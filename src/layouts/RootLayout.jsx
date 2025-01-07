import { Outlet } from "react-router"

Outlet
const RootLayout = () => {
  return (
    <main className='space-y-2' >
        <Outlet />
    </main>
  )
}

export default RootLayout
