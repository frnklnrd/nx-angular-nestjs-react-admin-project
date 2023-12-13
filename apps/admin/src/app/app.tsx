// eslint-disable-next-line @typescript-eslint/no-unused-vars

import { Admin, ListGuesser, Resource } from 'react-admin';

import { authProvider } from './auth/authProvider';
import { dataProvider } from './data/dataProvider';

export function App() {
  return (
    <div>
      <Admin authProvider={authProvider} dataProvider={dataProvider}>
        <Resource name="users" list={ListGuesser} />
      </Admin>
    </div>
  );
}

export default App;
