import {Routes, Route} from 'react-router';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Users from './pages/Users';
import NotFound from './pages/NotFound';
import RootLayout from './layouts/RootLayout';
import {cn} from './helpers/common';

function App() {
  return (
    <>
      <h1
        className={cn('text-2xl font-bold', 'text-blue-400', {
          'text-red-400': true,
        })}
      >
        React Router
      </h1>
      <Navbar />

      <Routes>
        <Route element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="users" element={<Users />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
