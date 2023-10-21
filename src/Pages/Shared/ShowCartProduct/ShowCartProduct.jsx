import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';
import Swal from 'sweetalert2'

// this props are come form MyCart components
const ShowCartProduct = ({ cartProduct, changeCart, setChangeCart }) => {
    const { _id } = cartProduct;

    // execute delete form client site and execute through backend
    const handleDelete = (id) => {
        // console.log(id)

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/cart/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your coffee has been deleted.',
                                'success'
                            )
                            // filter to check which products have after delete in state and change the state value 
                            const remaining = changeCart.filter(product => product._id !== id)
                            setChangeCart(remaining)
                        }

                    })
            }
        })
    }

    return (
        <>
           

            <div className="relative flex w-full max-w-[48rem] flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
            <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
                <img
                    src={cartProduct.photo}
                    alt="image"
                    className="h-full w-full object-cover"
                />
            </div>
            <div className="px-6 py-4 font-bold">
                <p className=' mb-3' >Product Name: {cartProduct.name}</p>
                <p className=' mb-3 capitalize' >Brand: {cartProduct.brand}</p>
                <p className=' mb-3'>Price: {cartProduct.price}$</p>
                <button  onClick={() => handleDelete(_id)}  className="text-center font-semibold w-36 px-5 py-2 text-white bg-[#c67700] rounded-md">Delete</button>
            </div>
        </div>
        </>
    );
};

ShowCartProduct.propTypes = {
    cartProduct: PropTypes.obj,
    changeCart: PropTypes.func,
    setChangeCart: PropTypes.func
};

export default ShowCartProduct;
