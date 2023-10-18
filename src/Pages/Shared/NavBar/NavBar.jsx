import { Link, NavLink } from "react-router-dom";
import logo from '../../../assets/logo2-removebg.png'
import './navbar.css'

const NavBar = () => {
    return (
        <>
            <div className="container mx-auto">
                <div className="navbar bg-base-100">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <nav className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""}>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                
                                    <NavLink to="/">Home</NavLink>
                                    <NavLink to="/services">Add Product</NavLink>
                                    <NavLink to="/services">My Cart</NavLink>
                                    {/* {
                                    user ? <NavLink to="/recentevent">Recent Event</NavLink> : ''
                                 } */}
                               
                            </ul>
                            </nav>
                        </div>
                        <img className="w-32" src={logo} alt="" />
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal flex items-center">
                            <nav className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""}>
                                <NavLink to="/">Home</NavLink>
                                <NavLink to="/services">Add Product</NavLink>
                                <NavLink to="/services">My Cart</NavLink>
                                {/* {
                                user ? <NavLink to="/recentevent">Recent Event</NavLink> : ''
                            } */}
                            </nav>
                        </ul>
                    </div>
                    <div className="navbar-end">
                        <Link to={'/login'}>
                            <button className="bg-[#66bfbf] text-white px-4 py-2 md:px-7 md:py-2 rounded-md font-bold">Login</button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default NavBar;