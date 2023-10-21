import { Link } from 'react-router-dom';
import logo from '../../../assets/logo2-removebg.png'

const Footer = () => {
    return (
        <>
            <footer className="footer p-10 bg-black text-base-content overflow-hidden">
                <div className='container mx-auto grid gap-3 grid-cols-1 md:grid-cols-3 '>
                    <aside>
                        <img className='w-52 h-36' src={logo} alt="" />
                        <p className='text-[#f9b248]'>Tech Store Ltd.<br />Ecommerce Website || 2023</p>
                    </aside>
                    <nav className='flex flex-col flex-wrap text-sm'>
                        <header className="footer-title text-white">COMPANY</header>
                        <a className="link link-hover">Category</a>
                        <a className="link link-hover">Brand</a>
                        <a className="link link-hover">Offer</a>
                        <a className="link link-hover">About Us</a>
                    </nav>
                    <nav className='flex flex-col flex-wrap text-sm'>
                        <header className="footer-title text-white">Pages</header>
                        <Link to={'/'} className="link link-hover">Home</Link>
                        <Link to={'/addProduct'} className="link link-hover">Add Product</Link>
                        <Link to={'/myCart'} className="link link-hover">My Cart</Link>
                        <Link to={'/login'} className="link link-hover">Log In</Link>
                    </nav>
                </div>
            </footer>
        </>
    );
};

export default Footer;