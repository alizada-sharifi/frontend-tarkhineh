import {createBrowserRouter} from 'react-router';
import AuthRouter from './authRouter';

const router = createBrowserRouter([...AuthRouter]);

export default router;
