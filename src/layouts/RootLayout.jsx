import {Outlet} from 'react-router';

function RootLayout() {
  return (
    <main className="space-y-2">
      <Outlet />
    </main>
  );
}

export default RootLayout;
