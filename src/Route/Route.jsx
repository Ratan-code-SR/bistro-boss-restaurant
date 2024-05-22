import Main from '../layout/Main.jsx';
import Home from '../pages/Home/Home'
import { createBrowserRouter } from "react-router-dom";
import Menu from '../pages/Menu/menu/Menu.jsx';
import Order from '../pages/order/Order.jsx';
import Login from '../pages/login/Login.jsx';
import Register from '../pages/register/Register.jsx';
import Cart from '../pages/Dashboard/Cart/Cart.jsx';
import Dashboard from '../layout/Dashboard.jsx'
import PrivateRoute from '../Route/PrivateRoute.jsx'
import AllUsers from '../pages/Dashboard/AllUsers/AllUsers.jsx';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        // element: <ErrorElement />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/menu",
                element: <Menu />

            },
            {
                path: "/ourShop",
                element: <Order />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: "/register",
                element: <Register />
            }

        ],
    },
    {
        path: "dashboard",
        element: <PrivateRoute><Dashboard /></PrivateRoute>,
        children: [
            {
                path: 'cart',
                element: <Cart />
            },
            {
                path: 'users',
                element: <AllUsers />
            }
        ]
    }
]);

export default router;
