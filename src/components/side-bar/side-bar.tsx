import { NavLink } from "react-router-dom";
import { auth } from "../../base";
import { useEffect, useState } from "react";

function SideBar() {
    const [fireUser, setUser] = useState({} || null);
    const [isLogged, setIsLogged ] = useState(false);

    useEffect(() => {
        const unsubscribe =  auth.onAuthStateChanged((user) => {
            setUser(user);
        });

        return unsubscribe;
    });
    
    useEffect(() => {
        if(fireUser !== null && Object.keys(fireUser).length !== 0) {
            setIsLogged(true);
        } else {
            setIsLogged(false);
        }
    }, [fireUser])

      const signOutUser = () => auth.signOut();
    

    return (
        <>
            <aside className="flex flex-col bg-white shadow-md w-48 h-full">
                <h1 className="text-2xl font-bold leading-tight p-4 mt-3">Menu</h1>
                <NavLink to="/">
                    <button className="bg-white hover:bg-gray-100 text-black py-2 px-4 mt-6 mb-2 w-full text-left">
                        Welcome page 
                    </button>
                </NavLink>
                {!isLogged && 
                    <>
                        <NavLink to='/login'>
                            <button className="bg-white hover:bg-gray-100 text-black py-2 px-4 text-left w-full">
                                Login
                            </button>
                        </NavLink>
                        <NavLink to='/signup'>
                            <button className="bg-white hover:bg-gray-100 text-black py-2 px-4 my-2 text-left w-full">
                                Sign up
                            </button>
                        </NavLink>
                    </>
                }
                {isLogged && 
                    <>
                        <NavLink to='/'>
                            <button className="bg-white hover:bg-gray-100 text-black py-2 px-4 text-left w-full">
                                Schedule
                            </button>
                        </NavLink>
                        <button className="bg-white hover:bg-gray-100 text-black py-2 px-4 my-2 text-left w-full" onClick={() => signOutUser()}>
                            Log out
                        </button>
                    </>
                }
            </aside>
        </>
    )
}

export default SideBar;