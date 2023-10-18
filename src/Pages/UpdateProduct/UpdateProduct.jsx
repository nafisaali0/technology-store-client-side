// import PropTypes from 'prop-types';
import NavBar from './../Shared/NavBar/NavBar';
import Footer from './../Shared/Footer/Footer';


const UpdateProduct = () => {

    const handleUpdateProduct = event => {

        event.preventDefault();

        const form = event.target;

        const title = form.title.value
        const taste = form.taste.value
        const photo = form.photo.value
        const quantity = form.quantity.value

        const updateCoffeeInfo = { title, taste, quantity, photo, }
        console.log(updateCoffeeInfo)


    }
    return (
        <>
            <NavBar></NavBar>

            <div className="container mx-auto my-44 bg-[#F4F3F0]">
                <div className="p-10">
                    <div className="text-center text-2xl font-bold my-7">
                        <h2>Update Product</h2>
                    </div>
                    <form onSubmit={handleUpdateProduct}>
                        {/* defaultValue={photo} */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                            <input type="link" name="photo" placeholder="photo URL" className="input input-bordered w-full" />
                            <input type="text" name="name" placeholder="Name" className="input input-bordered w-full" />
                            <input type="text" name="brand" placeholder="Brand Name" className="input input-bordered w-full " />
                            <input type="number" name="type" placeholder="Type" className="input input-bordered w-full" />
                            <input type="number" name="price" placeholder="Price" className="input input-bordered w-full" />
                            <input type="number" name="Rating" placeholder="Rating" className="input input-bordered w-full" />
                        </div>
                        <div>
                            <textarea type="text" name="description" className="textarea textarea-bordered textarea-xs w-full mt-5" placeholder="Short Description"></textarea>
                            <input type="submit" value="Update Product" className="btn btn-block bg-[#D2B48C] my-10" />
                        </div>
                    </form>
                </div>
            </div>

            {/* add footer */}
            <Footer></Footer>
        </>
    );
};

// UpdateProduct.propTypes = {

// };

export default UpdateProduct;