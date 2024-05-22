import { NavLink, Outlet } from "react-router-dom";
import { IoMdHome } from "react-icons/io";
import { FaCalendarAlt, FaShoppingCart } from "react-icons/fa";
import { RiSecurePaymentFill } from "react-icons/ri";
import { TbMessageStar, TbCalendarUser } from "react-icons/tb";
import { IoMenuSharp } from "react-icons/io5";
import { GiShoppingBag } from "react-icons/gi";
import { MdEmail, MdOutlineMenuBook } from "react-icons/md";
import { FaUtensils } from "react-icons/fa";
import { TfiMenuAlt } from "react-icons/tfi";
import { PiUsersThreeBold } from "react-icons/pi";
const Dashboard = () => {
    const isAdmin = true;
    
    return (
        <div className="flex bg-[#f6f6f6] ">
            {/* side bar */}
            <div className="w-64 min-h-screen bg-[#d1a054]">
                <ul className="menu p-4">

                    {
                        isAdmin ? <>
                            <li className="text-md font-bold uppercase">
                                <NavLink to='/dashboard/userHome'><span className="text-2xl"><IoMdHome /></span>Admin Home</NavLink>
                            </li>
                            <li className="text-md font-bold uppercase">
                                <NavLink to='/dashboard/userHome'><span className="text-2xl"><FaUtensils /></span>Add Items</NavLink>
                            </li>
                            <li className="text-md font-bold uppercase">
                                <NavLink to='/dashboard/userHome'><span className="text-2xl"><TfiMenuAlt /></span>Management</NavLink>
                            </li>
                            <li className="text-md font-bold uppercase">
                                <NavLink to='/dashboard/userHome'><span className="text-2xl"><MdOutlineMenuBook /></span>Manage Bookings</NavLink>
                            </li>
                            <li className="text-md font-bold uppercase">
                                <NavLink to='/dashboard/users'><span className="text-2xl"><PiUsersThreeBold /></span>All Users</NavLink>
                            </li>
                        </> : <>
                            <li className="text-md font-bold uppercase">
                                <NavLink to='/dashboard/userHome'><span className="text-2xl"><IoMdHome /></span>User Home</NavLink>
                            </li>
                            <li className="text-md font-bold uppercase">
                                <NavLink to='/dashboard/reservation'><span className="text-2xl"><FaCalendarAlt /></span>Reservation</NavLink>
                            </li>

                            <li className="text-md font-bold uppercase">
                                <NavLink to='/dashboard/payment-history '><span className="text-2xl"><RiSecurePaymentFill /></span>payment history </NavLink>
                            </li>
                            <li className="text-md font-bold uppercase">
                                <NavLink to='/dashboard/cart'><span className="text-2xl"><FaShoppingCart /></span>my cart </NavLink>
                            </li>
                            <li className="text-md font-bold uppercase">
                                <NavLink to='/dashboard/add_review '><span className="text-2xl"><TbMessageStar /></span>add review</NavLink>
                            </li>
                            <li className="text-md font-bold uppercase">
                                <NavLink to='/dashboard/my_booking  '><span className="text-2xl"><TbCalendarUser /></span>my booking </NavLink>
                            </li>
                        </>
                    }
                    <div className="divider"></div>

                    <li className="text-md font-bold uppercase">
                        <NavLink to='/'><span className="text-2xl"><IoMdHome /></span>Home </NavLink>
                    </li>
                    <li className="text-md font-bold uppercase">
                        <NavLink to='/menu'><span className="text-2xl"><IoMenuSharp /></span>Menu </NavLink>
                    </li>
                    <li className="text-md font-bold uppercase">
                        <NavLink to='/ourShop'><span className="text-2xl"><GiShoppingBag /></span>Shop </NavLink>
                    </li>
                    <li className="text-md font-bold uppercase">
                        <NavLink to='/dashboard/contact  '><span className="text-2xl"><MdEmail /></span>Contact </NavLink>
                    </li>
                </ul>
            </div>
            {/* dashboard content */}
            <div className="flex-1">
                <Outlet />
            </div>
        </div>
    );
};

export default Dashboard;