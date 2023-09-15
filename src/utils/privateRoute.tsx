import { Navigate, Outlet } from "react-router-dom";
import { auth } from "./base";

function PrivateRoutes() {
    
    const isLogged = auth.currentUser ? true : false;

    return (
        isLogged ? <Outlet /> : <Navigate to="/login" /> 
    )
}

export default PrivateRoutes;