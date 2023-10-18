// import PropTypes from 'prop-types';
import NavBar from './../Shared/NavBar/NavBar';
import Footer from './../Shared/Footer/Footer';

const MyCart = () => {
    return (
        <>
            <NavBar></NavBar>

            <div className='container mx-auto overflow-hidden'>
                <div className='my-28 flex justify-center items-center'>
                    <h1 className='text-5xl text-black font-bold'>Your Cart</h1>
                </div>
            </div>

            <Footer></Footer>
        </>
    );
};

// MyCart.propTypes = {

// };

export default MyCart;