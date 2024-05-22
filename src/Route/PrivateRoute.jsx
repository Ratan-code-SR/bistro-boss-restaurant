
import { Navigate } from "react-router-dom";
import useAuth from "../Hooks/useAuth";

const PrivateRoute = ({ children }) => {
    const { user, loading } = useAuth()
    if (loading) {
        return <>
            <div className="flex justify-center my-52">
                <span className="loading loading-spinner text-neutral"></span>
            </div>
        </>
    }
    
    if (user) {
        return children;
    }
    return <Navigate to="/login" state={{from:location}} replace></Navigate>

};

export default PrivateRoute;