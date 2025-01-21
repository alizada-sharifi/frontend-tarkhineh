import {createBrowserRouter} from 'react-router';
import AuthRouter from './authRouter';
import mainRouter from './mainRouter';

const router = createBrowserRouter([...mainRouter, ...AuthRouter]);

export default router;
