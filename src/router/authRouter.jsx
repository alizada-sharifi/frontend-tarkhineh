import {Login, Register} from '../pages';

const AuthRouter = [
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/signup',
    element: <Register />,
  },
];

export default AuthRouter;
