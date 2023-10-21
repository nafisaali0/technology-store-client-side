import { Link, NavLink } from "react-router-dom";
import logo from '../../../assets/logo2-removebg.png';
import users from '../../../assets/logo2.jpg'
import './navbar.css'
import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import Loader from './../Loader/Loader';

const NavBar = () => {

    const { user, logOut, loading } = useContext(AuthContext)

    if (loading) {
        return <Loader></Loader>
    }
    
    // user logOut
    const handleLogOut = () => {
        logOut(user)
            .then(removeUser => {
                console.log(removeUser)
            })
            .catch(error => {
                console.log(error)
            })
    }

    return (
        <>
            <div className="drop-shadow-xl">
                <div className="navbar container mx-auto ">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <label tabIndex={0} className="btn btn-ghost text-[#c67700] lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <nav className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""}>
                                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-gray-800 rounded-box w-52">

                                    <NavLink to="/">Home</NavLink>
                                    <NavLink to="/addProduct">Add Product</NavLink>
                                    <NavLink to="/myCart">My Cart</NavLink>
                                </ul>
                            </nav>
                        </div>
                        <img className="w-32" src={logo} alt="" />
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal flex items-center">
                            <nav className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""}>
                                <NavLink to="/">Home</NavLink>
                                <NavLink to="/addProduct">Add Product</NavLink>
                                <NavLink to="/myCart">My Cart</NavLink>
                            </nav>
                        </ul>
                    </div>
                    <div className="navbar-end">

                        {
                            user ?
                                <div className="dropdown dropdown-end text-[#474f85] font-bold font-roboto">
                                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                        <div className="w-20 lg:w-36 border-black border-2 rounded-full">
                                            <img src={user.photoURL ? user.photoURL : `${users}`} />
                                        </div>
                                    </label>
                                    <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                                        <li><a>{user.email}</a></li>
                                        <li><a>{user.displayName}</a></li>
                                        <Link className="ml-3" to={'/register'}><a>Add Another Account</a></Link>
                                        <li onClick={handleLogOut} ><a>Logout</a></li>
                                    </ul>
                                </div>
                                :
                                <Link to={'/login'}>
                                    <button className="bg-[#c67700] text-white px-4 py-2 md:px-7 md:py-2 rounded-md font-bold">Login</button>
                                </Link>
                        }
                    </div>
                </div>
            </div>
        </>
    );
};

export default NavBar;