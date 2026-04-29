import { lazy } from 'react';

const Home = lazy(() =>
  import('../pages/Home').then(({ Home }) => ({
    default: Home,
  }))
);

const Account = lazy(() =>
  import('../pages/Account').then(({ Account }) => ({
    default: Account,
  }))
);

const Users = lazy(() =>
  import('../pages/Users').then(({ Users }) => ({
    default: Users,
  }))
);

const NotFound = lazy(() =>
  import('../pages/NotFound').then(({ NotFound }) => ({
    default: NotFound,
  }))
);

export const routersLayout = [
  { path: '/', Element: Home },
  { path: '/account', Element: Account },
  { path: '/users', Element: Users },
  { path: '*', Element: NotFound },
];
