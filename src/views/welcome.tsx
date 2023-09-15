import { NavLink } from "react-router-dom";


function Welcome() {
    return (
        <>
            <div className="flex flex-col bg-white shadow-md max-w-md ml-auto mr-auto mt-10">
                <h1 className=" p-4 text-2xl font-bold ">Schedule of Events</h1>
                <p className=" p-4 ">This application is a calendar in which you can mark upcoming events and view those that have already happened!</p>
                <NavLink to='/login'>
                    <button className="bg-white hover:bg-gray-100 text-black py-2 px-4 text-left w-full text-xl">
                        GO TO LOGIN
                    </button>
                </NavLink>
            </div>
        </>
    )
}

export default Welcome;