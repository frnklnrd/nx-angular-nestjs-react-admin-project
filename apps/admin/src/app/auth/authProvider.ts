import { AuthProvider } from 'react-admin';

export const authProvider: AuthProvider = {
  // called when the user attempts to log in
  login: ({ username, password }) => {
    const request = new Request('http://localhost:3000/api/auth/login', {
      method: 'POST',
      body: JSON.stringify({ username, password }),
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
      // mode: 'no-cors'
    });
    return fetch(request)
      .then((response) => {
        if (response.status < 200 || response.status >= 300) {
          throw new Error(response.statusText);
        }
        return response.json();
      })
      .then((response) => {
        console.log(response.access_token)
        return {
          token: response.access_token,
        };
      })
      .then(({ token }) =>
        localStorage.setItem('auth', JSON.stringify({ token }))
      );
  },
  // called when the user clicks on the logout button
  logout: () => {
    localStorage.removeItem('auth');
    return Promise.resolve();
  },
  // called when the API returns an error
  checkError: ({ status }: { status: number }) => {
    if (status === 401 || status === 403) {
      localStorage.removeItem('auth');
      return Promise.reject();
    }
    return Promise.resolve();
  },
  // called when the user navigates to a new location, to check for authentication
  checkAuth: () => {
    return localStorage.getItem('auth') ? Promise.resolve() : Promise.reject();
  },
  // called when the user navigates to a new location, to check for permissions / roles
  getPermissions: () => Promise.resolve(),
};
