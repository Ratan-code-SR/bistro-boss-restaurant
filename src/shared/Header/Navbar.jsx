import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../components/provider/ContextProvider";
import { toast } from "react-toastify";
const Navbar = () => {
    const { user,logOut } = useContext(AuthContext)
    const navLink = <>
        <NavLink to="/"><li className="ml-3 font-semibold">Home</li></NavLink>
        <li className="ml-3 font-semibold">Contact Us</li>
        <li className="ml-3 font-semibold">Dashboard</li>
        <NavLink to='/menu'><li className="ml-3 font-semibold">Our Menu</li></NavLink>
        <NavLink to='/ourShop'><li className="ml-3 font-semibold">Our Shop</li></NavLink>
      
    </>
    const handleLogOut  = ()=> {
        logOut()
        .then(result => {
            console.log(result);
            toast.success('Logout successfully!!')
        })
    }
    return (
        <div className="navbar max-w-screen-xl  fixed z-10 opacity-70 text-white font-bold bg-black">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLink}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">Bistro Restaurant</a>
            </div>
            <div className="navbar-end hidden items-center
             lg:flex">
                <ul className="menu menu-horizontal items-center px-1">
                    {navLink}
                    {
                        user ?
                            <button onClick={handleLogOut} className="btn font-semibold ml-3">Sign Out</button> :
                            
                                <NavLink to='/login'><button className="ml-3 font-semibold btn">Login</button></NavLink>
                    }

                </ul>
            </div>
        </div>
    );
};

export default Navbar;