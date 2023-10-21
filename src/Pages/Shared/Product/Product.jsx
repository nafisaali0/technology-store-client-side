import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


// productInfo from Products compo
const Product = ({ productInfo }) => {
    // console.log(productInfo)

    const { _id, photo, name, brand, type, price, rating, description } = productInfo


    return (
        <>
            <div className="card bg-base-100 shadow-xl my-10">
                <figure><img className='w-[500px] h-[500px]' src={photo} alt="Shoes" /></figure>
                <div className="card-body text-2xl">
                    <h2 className="card-title">
                        {name}
                        <div className="badge bg-[#f9b248]">{rating}</div>
                    </h2>
                    <div className='grid grid-cols-2 md:grid-cols-3 gap-1 md:gap-3 text-sm lg:text-xl '>
                        <h2 className='capitalize'>Brand:{brand}</h2>
                        <h2>Type:{type}</h2>
                        <h2>Price:{price} $</h2>
                    </div>
                    <p className='text-sm'>{description}</p>
                    <div className="card-actions justify-end">
                        <Link to={`/productDetails/id/${_id}`}>
                            <div className="btn bg-[#c67700] text-white">Details</div>
                        </Link>
                        <Link to={`/updateProduct/id/${_id}`}>
                            <div className="btn badge-outline outline-[#f9b248] text-[#c67700]">Update</div>
                        </Link>

                    </div>
                </div>
            </div>
        </>
    );
};

Product.propTypes = {
    productInfo: PropTypes.obj
};

export default Product;