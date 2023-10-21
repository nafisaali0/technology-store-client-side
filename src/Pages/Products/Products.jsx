import { useLoaderData, } from "react-router-dom";
import Product from "../Shared/Product/Product";
import NavBar from './../Shared/NavBar/NavBar';
import ProductBanner from "../Shared/ProductBanner/ProductBanner";
import ProductEmpty from "../Shared/ProductEmpty/ProductEmpty";
import Footer from "../Shared/Footer/Footer";


const Products = () => {

    // const { brand } = useParams();
    // console.log(brand)
    
    //get all products by specific brand name from backend
    const products = useLoaderData();
    // console.log(products)

    return (
        <>
            <NavBar></NavBar>

            <div>
                <ProductBanner></ProductBanner>
            </div>
            <div className="container mx-auto overflow-hidden my-20">
                {/* check have any products on selected brand or not */}
                {
                    (products.length == 0) ?
                        <div className="flex flex-col justify-center items-center  ">
                            <ProductEmpty></ProductEmpty>
                        </div>
                        :
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 p-5">
                            {
                                products.map(productInfo => <Product key={productInfo._id} productInfo={productInfo}></Product>)
                            }
                        </div>
                }
            </div>
            <Footer></Footer>
        </>
    );
};

export default Products;