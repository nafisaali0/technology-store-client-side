// import PropTypes from 'prop-types';
import NavBar from './../Shared/NavBar/NavBar';
import Footer from './../Shared/Footer/Footer';
import { useLoaderData } from 'react-router-dom';
import ShowCartProduct from '../Shared/ShowCartProduct/ShowCartProduct';
import { useState } from 'react';

const MyCart = () => {

    // load selected cart products from DB 
    const cartProducts = useLoaderData();
    // console.log(cartProducts)
    const [changeCart, setChangeCart] = useState(cartProducts)//initialize state for remain data after delete


    return (
        <div className=''>
            <NavBar></NavBar>

            <div className='container mx-auto overflow-hidden my-28 drop-shadow-xl'>
                <div className='p-10 text-center font-bold'>
                    <h1 className='text-5xl text-[#c67700] font-bold'>CART</h1>
                </div>
                <div className='grid grid-cols-1 gap-5 md:grid-cols-2 mt-10 mb-10'>
                    {
                        changeCart.map(cartProduct =>
                            <ShowCartProduct key={cartProduct._id}
                                cartProduct={cartProduct}
                                changeCart={changeCart}
                                setChangeCart={setChangeCart}
                            ></ShowCartProduct>
                        )
                    }

                </div>
            </div>

            <div className=''>
                <Footer></Footer>
            </div>

        </div>
    );
};

// MyCart.propTypes = {

// };

export default MyCart;



// <div className="overflow-x-auto">
//     <table className="table">
//         {/* head */}
//         <thead>
//             <tr>
//                 <th>
//                 </th>
//                 <th>Name</th>
//                 <th>Price</th>
//                 <th>Type</th>
//                 <th>Brand</th>
//                 <th></th>
//             </tr>
//         </thead>
//         <tbody>
//             {/* row 1 */}
//             <tr>
//                 <th>
//                     <label>
//                         <input type="checkbox" className="checkbox" />
//                     </label>
//                 </th>
//                 <td>
//                     <div className="flex items-center space-x-3">
//                         <div className="avatar">
//                             <div className="mask mask-squircle w-12 h-12">
//                                 <img src="/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
//                             </div>
//                         </div>
//                         <div>
//                             <div className="font-bold">Name</div>
//                             <div className="text-sm opacity-50">Rating</div>
//                         </div>
//                     </div>
//                 </td>
//                 <td>
//                     400$
//                 </td>
//                 <td>
//                     Apple
//                 </td>
//                 <td>Phone</td>
//                 <th>
//                     <button className="btn btn-ghost btn-xs">Details</button>
//                     <button className="btn btn-ghost btn-xs">Delete</button>
//                 </th>
//             </tr>
//         </tbody>
//     </table>
// </div>