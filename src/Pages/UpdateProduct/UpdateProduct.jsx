import NavBar from './../Shared/NavBar/NavBar';
import Footer from './../Shared/Footer/Footer';
import { useLoaderData, useParams } from 'react-router-dom';
import Swal from 'sweetalert2'


const UpdateProduct = () => {

    const { id } = useParams();
    console.log(id)

    //get specific product through unique id from backend created api
    const product = useLoaderData();
    console.log(product)

    const {_id, photo, name, brand, type, price, rating, description } = product

    const handleUpdateProduct = event => {

        event.preventDefault();

        const form = event.target;

        const photo = form.photo.value
        const name = form.name.value
        const brand = form.brand.value
        const type = form.type.value
        const price = form.price.value
        const rating = form.rating.value
        const description = form.description.value

        const updateProductInfo = { photo, name, brand, type, price, rating, description }
        console.log(updateProductInfo)


        // sent update productinfo to server
        Swal.fire({
            title: 'Are you sure?',
            text: "Update this Product!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, update it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://technology-store-server-side.vercel.app/product/id/${_id}`, {
                    method: 'PUT',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(updateProductInfo)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.modifiedCount > 0) {
                            Swal.fire(
                                'Updated!',
                                'Your product has been Updated.',
                                'success'
                            )
                        }

                    })
            }
        })


    }
    return (
        <>
            <NavBar></NavBar>

            <div className="container mx-auto my-44 bg-[#F4F3F0]">
                <div className="p-10">
                    <div className="text-center text-[#c67700] text-2xl font-bold my-7">
                        <h2>Update Product</h2>
                    </div>
                    <form onSubmit={handleUpdateProduct}>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                            <input type="link" name="photo" defaultValue={photo} placeholder="photo URL" className="input input-bordered w-full" />
                            <input type="text" name="name" defaultValue={name} placeholder="Name" className="input input-bordered w-full" />
                            <input type="text" name="brand" defaultValue={brand} placeholder="Brand Name" className="input input-bordered w-full " />
                            <input type="text" name="type" defaultValue={type} placeholder="Type" className="input input-bordered w-full" />
                            <input type="number" name="price" defaultValue={price} placeholder="Price" className="input input-bordered w-full" />
                            <input type="text" name="rating" defaultValue={rating} placeholder="Rating" className="input input-bordered w-full" />
                        </div>
                        <div>
                            <textarea type="text" name="description" defaultValue={description} className="textarea textarea-bordered textarea-xs w-full mt-5" placeholder="Short Description"></textarea>
                            <input type="submit" value="Update Product" className="btn btn-block text-white bg-[#c67700] my-10" />
                        </div>
                    </form>
                </div>
            </div>

            {/* add footer */}
            <Footer></Footer>
        </>
    );
};



export default UpdateProduct;