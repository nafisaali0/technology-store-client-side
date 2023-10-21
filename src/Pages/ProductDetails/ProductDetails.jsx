import { useLoaderData, useParams } from "react-router-dom";
import NavBar from "../Shared/NavBar/NavBar";
import Footer from "../Shared/Footer/Footer";
import Swal from 'sweetalert2'

const ProductDetails = () => {

    const { id } = useParams();
    console.log(id)

    //get specific product through unique id from backend created api
    const product = useLoaderData();
    // console.log(product)

    const { photo, name, brand, type, price, rating, description } = product

    // this info of selcted product sent to backend as a object to cart DB
    const cartProductInfo = { photo, name, brand, type, price, rating, description }

    const handleCart = () => {

        //send data to the server and below link from backend's created API and load in mongo as DB
        fetch('http://localhost:5000/cart', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(cartProductInfo)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    Swal.fire(
                        'Added New Product'
                    )
                }
            })
    }

    return (
        <>
            <NavBar></NavBar>
            <div className="container mx-auto overflow-hidden w-4/5 h-[700px] flex justify-center items-center bg-[#eee] p-5 my-16">
                <div className="flex flex-col md:flex-row gap-16 items-center">
                    <div className="flex-1 bg-[#eee]">
                        <img className="w-full h-full" src={photo} alt="" />
                    </div>
                    <div className="flex-1">
                        <h1 className="text-3xl font-bold">{name}</h1>
                        <h2 className="text-2xl font-bold my-5">Price:{price} $</h2>
                        <div className='flex flex-wrap gap-2 items-center text-sm lg:text-xl font-semibold my-5'>
                            <h2 className='capitalize'>Brand:{brand}</h2>
                            <h2>Type:{type}</h2>
                            <h2>Rating:{rating}</h2>
                        </div>
                        <p className="text-xl">{description}</p>
                        <button onClick={handleCart} className="text-sm px-8 py-3 my-5 text-white rounded-full bg-[#f9b248] font-semibold">Add to Cart</button>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </>
    )
};

// ProductDetails.propTypes = {

// };

export default ProductDetails;