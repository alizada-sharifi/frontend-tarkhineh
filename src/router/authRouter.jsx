import {Login, Register} from '../pages';
import ROUTES from './routePaths';

const AuthRouter = [
  {
    path: ROUTES.LOGIN,
    element: <Login />,
  },
  {
    path: ROUTES.REGISTER,
    element: <Register />,
  },
];

export default AuthRouter;
