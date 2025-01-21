import {MainLayout} from '../layouts';
import {Home, NotFound} from '../pages';
import ROUTES from './routePaths';

const mainRouter = [
  {
    path: ROUTES.HOME,
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
];

export default mainRouter;
