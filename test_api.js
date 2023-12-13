fetch('http://localhost:3000/api/auth/login', {
  method: 'POST',
  body: JSON.stringify({
    username: 'john',
    password: 'changeme'
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8'
  }
})
.then(res => res.json())
.then(response => {
    console.log('auth response', response);

    var access_token = response.access_token;

    fetch('http://localhost:3000/api/auth/profile', {
      method: 'GET',
      headers: {
        'Authorization': 'Bearer ' + access_token
      }
    })
    .then(res => res.json())
    .then(response => {
        console.log('profile response', response);
    })
})
