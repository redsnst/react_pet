import { NavLink } from "react-router-dom";


function SideBar() {
    return (
        <>
            <aside className="flex flex-col bg-white shadow-md w-48 h-full">
                <h1 className="text-2xl font-bold leading-tight p-4 mt-3">Menu</h1>
                <NavLink to="/">
                    <button className="bg-white hover:bg-gray-100 text-black py-2 px-4 mt-6 mb-2 w-full text-left">
                        Welcome page 
                    </button>
                </NavLink>
                <NavLink to='/login'>
                    <button className="bg-white hover:bg-gray-100 text-black py-2 px-4 text-left w-full">
                        Login
                    </button>
                </NavLink>
                <button className="bg-white hover:bg-gray-100 text-black py-2 px-4 my-2 text-left w-full">
                    Sign up
                </button>
            </aside>
        </>
    )
}

export default SideBar;