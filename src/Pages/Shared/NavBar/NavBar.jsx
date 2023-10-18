import { Link, NavLink } from "react-router-dom";






const NavBar = () => {
    return (
        <>
            <div className="drop-shadow-md mb-10 font-roboto">
                <div className="navbar h-14 px-10 py-14 bg-[#ffffff]">
                    <div className="navbar-start" >
                        <div className="dropdown">
                            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            {/* nav link for mobile */}
                            <nav className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""}>
                                <ul tabIndex={0} className="menu dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                    <NavLink to="/">Home</NavLink>
                                    <NavLink to="/services">Services</NavLink>
                                    {/* {
                                        user ? <NavLink to="/recentevent">Recent Event</NavLink> : ''
                                    } */}
                                    <NavLink to="/booking">Booking</NavLink>
                                </ul>
                            </nav>
                        </div>
                        {/* logo for pc */}
                        <div className='hidden lg:flex'>
                            <img className="w-2/5" src={logo} alt="" />
                        </div>
                    </div>
                    {/* logo for mobile */}
                    <div className='flex lg:hidden' >
                        <img className="w-28" src={logo} alt="" />
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        {/* nav link for pc */}
                        <nav className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""}>
                            <div className="flex gap-5 items-center" >
                                <NavLink to="/">Home</NavLink>
                                <NavLink to="/services">Services</NavLink>
                                {
                                    user ? <NavLink to="/recentevent">Recent Event</NavLink> : ''
                                }
                                <NavLink to="/booking">Booking</NavLink>
                            </div>
                        </nav>
                    </div>
                    <div className="navbar-end ">
                        {
                            user ?
                                <div className="dropdown dropdown-end text-[#474f85] font-bold font-roboto">
                                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                        <div className="w-20 lg:w-36 border-black border-2 rounded-full">
                                            <img src={user.photoURL ? user.photoURL : `${logo}`} />
                                        </div>
                                    </label>
                                    <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                                        <li><a>{user.email}</a></li>
                                        <li><a>{user.displayName}</a></li>
                                        <Link className="ml-3" to={'/register'}><a>Add Another Account</a></Link>
                                        <li onClick={handleLogOut}><a>Logout</a></li>
                                    </ul>
                                </div>
                                :
                                <Link to={'/login'}>
                                    <button className="bg-[#65e892] text-[#474f85] px-4 py-2 md:px-7 md:py-2 rounded-md font-bold">Login</button>
                                </Link>
                        }
                    </div>

                </div>
            </div>
        </>
    );
};

export default NavBar;