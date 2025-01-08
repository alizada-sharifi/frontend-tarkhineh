

import { NavLink } from "react-router"


function Navbar  () {
    return (
        <nav
            className='border-b pb-2 space-x-2'
        >
            <NavLink 
            to="/"
            className={({ isActive }) =>
                isActive ? 'text-blue-400 font-bold' : 'text-black font-normal'
            }
            
            >Home
            </NavLink>

            <NavLink 
            to="/users"
            className={({ isActive }) =>
                isActive ? 'text-blue-400 font-bold' : 'text-black font-normal'
            }
            >
                Users
                </NavLink>
        </nav>
    )
}

export default Navbar

