import { createBrowserRouter } from "react-router-dom";
import Root from './../LayOut/Root';
import Home from "../Pages/Home/Home";
import LogIn from './../Pages/LogIn/LogIn';
import Register from './../Pages/Register/Register';
import MyCart from "../Pages/MyCart/MyCart";
import ProductDetails from './../Pages/ProductDetails/ProductDetails';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        // errorElement: <ErrorPage></ErrorPage>,
        children:
            [
                {
                    path: '/',
                    element: <Home></Home>
                },
                {
                    path: '/login',
                    element: <LogIn></LogIn>
                },
                {
                    path: '/register',
                    element: <Register></Register>
                },
                {
                    path: '/myCart/:id',
                    element: <MyCart></MyCart>
                },
                {
                    path: '/productDetails/:id',
                    element: <ProductDetails></ProductDetails>
                }

            ]
    },
]);

export default router;