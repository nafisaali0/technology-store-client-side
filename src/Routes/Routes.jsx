import { createBrowserRouter } from "react-router-dom";
import Root from './../LayOut/Root';
import Home from "../Pages/Home/Home";
import LogIn from './../Pages/LogIn/LogIn';
import Register from './../Pages/Register/Register';
import MyCart from "../Pages/MyCart/MyCart";
import ProductDetails from './../Pages/ProductDetails/ProductDetails';
import AddProduct from "../Pages/AddProduct/AddProduct";
import ErrorPage from './../Pages/ErrorPage/ErrorPage';
import UpdateProduct from "../Pages/UpdateProduct/UpdateProduct";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
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
                    path: '/addProduct',
                    element: <AddProduct></AddProduct>
                },
                {
                    path: '/updateProduct',
                    element: <UpdateProduct></UpdateProduct>
                },
                {
                    path: '/myCart',
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