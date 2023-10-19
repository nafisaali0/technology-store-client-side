import Swal from 'sweetalert2'
import NavBar from './../Shared/NavBar/NavBar';
import Footer from './../Shared/Footer/Footer';

const AddProduct = () => {

    const handleAddProduct = event => {

        event.preventDefault();

        const form = event.target;

        const photo = form.photo.value
        const name = form.name.value
        const brand = form.brand.value
        const type = form.type.value
        const price = form.price.value
        const rating = form.rating.value

        const newProductInfo = { photo, name, brand, type, price, rating }
        console.log(newProductInfo)

        //send data to the server
        fetch('http://localhost:5000/product', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newProductInfo)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if(data.insertedId){
                    // alert("Added New Product")
                    Swal.fire(
                        'Added New Product'
                    )
                }
            })
    }


    return (
        <>
            <NavBar></NavBar>

            <div className="container mx-auto my-44 bg-[#F4F3F0]">
                <div className="p-10">
                    <div className="text-center text-2xl font-bold my-7">
                        <h2>Add New Product</h2>
                    </div>
                    <form onSubmit={handleAddProduct}>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                            <input type="link" name="photo" placeholder="photo URL" className="input input-bordered w-full" />
                            <input type="text" name="name" placeholder="Name" className="input input-bordered w-full" />
                            <input type="text" name="brand" placeholder="Brand Name" className="input input-bordered w-full " />
                            <input type="text" name="type" placeholder="Type" className="input input-bordered w-full" />
                            <input type="text" name="price" placeholder="Price" className="input input-bordered w-full" />
                            <input type="text" name="rating" placeholder="Rating" className="input input-bordered w-full" />
                        </div>
                        <div>
                            <textarea type="text" name="description" className="textarea textarea-bordered textarea-xs w-full mt-5" placeholder="Short Description"></textarea>
                            <input type="submit" value="Add Product" className="btn btn-block bg-[#D2B48C] my-10" />
                        </div>
                    </form>
                </div>
            </div>

            {/* add footer */}
            <Footer></Footer>
        </>
    );
};

// AddProduct.propTypes = {

// };

export default AddProduct;