import Home from './components/Home';
import LiederList from './components/LiederList';
import NoMatch from './components/NoMatch';
import { RouteObject } from 'react-router-dom';

const routes: RouteObject[] = [
  {
    ...Home,
    path: '/',
  },
  {
    ...LiederList,
    path: '/lieder',
  },
  {
    path: '*',
    element: NoMatch,
  },
];

export default routes;
