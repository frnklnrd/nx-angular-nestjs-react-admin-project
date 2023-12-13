// import jsonServerProvider from 'ra-data-json-server';
import simpleRestProvider from 'ra-data-simple-rest';

import { fetchUtils } from 'react-admin';

const httpClient = (url: string, options = {} as any) => {
  if (!options.headers) {
    options.headers = new Headers({ Accept: 'application/json' });
  }

  if (localStorage.getItem('auth')) {
    const { token } = JSON.parse(localStorage.getItem('auth') as string);
    options.headers.set('Authorization', `Bearer ${token}`);
  }

  return fetchUtils.fetchJson(url, options);
};

export const dataProvider = simpleRestProvider(
  'http://localhost:3000/api',
  httpClient
);

/*
export const dataProvider = jsonServerProvider(
  'http://localhost:3000/api', // import.meta.env.VITE_JSON_SERVER_URL,
  httpClient
);
*/
