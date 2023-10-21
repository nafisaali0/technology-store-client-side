import { createBrowserRouter } from "react-router-dom";
import Root from './../LayOut/Root';
import Home from "../Pages/Home/Home";
import LogIn from './../Pages/LogIn/LogIn';
import Register from './../Pages/Register/Register';
import ProductDetails from './../Pages/ProductDetails/ProductDetails';
import AddProduct from "../Pages/AddProduct/AddProduct";
import ErrorPage from './../Pages/ErrorPage/ErrorPage';
import PrivateRoutes from "./PrivateRoutes";
import Products from "../Pages/Products/Products";
import MyCart from './../Pages/MyCart/MyCart';
import UpdateProduct from './../Pages/UpdateProduct/UpdateProduct';

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
                    element: <PrivateRoutes><AddProduct></AddProduct></PrivateRoutes>
                },
                {
                    path: '/products/:brand',
                    loader: ({ params }) => fetch(`http://localhost:5000/product/${params.brand}`),
                    element: <Products></Products>
                },
                {
                    path: '/productDetails/id/:id',
                    loader: ({ params }) => fetch(`http://localhost:5000/product/id/${params.id}`),
                    element:<PrivateRoutes><ProductDetails></ProductDetails></PrivateRoutes>
                },
                {
                    path: '/updateProduct/id/:id',
                    loader: ({ params }) => fetch(`http://localhost:5000/product/id/${params.id}`),
                    element:<PrivateRoutes><UpdateProduct></UpdateProduct></PrivateRoutes> 
                },
                {
                    path: '/myCart',
                    loader: () => fetch('http://localhost:5000/cart'),
                    element: <PrivateRoutes><MyCart></MyCart></PrivateRoutes>
                },


            ]
    },
]);

export default router;