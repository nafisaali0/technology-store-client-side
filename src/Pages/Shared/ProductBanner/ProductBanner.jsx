import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import banner from '../../../assets/cool-background.png'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './slides.css'


// import required modules
import {Autoplay, Pagination, Navigation } from 'swiper/modules';

const ProductBanner = () => {

    const [products, setProducts] = useState([]); //store all products using api 

    useEffect(() => {
        fetch('http://localhost:5000/product')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    // console.log(products)

    return (
        <>
            <div className='p-5 md:p-10' style={{ backgroundImage: `url(${banner})` }}>
                <div className='container mx-auto overflow-hidden flex justify-between items-center gap-5 flex-col-reverse md:flex-row'>
                    {/* flex-1  */}
                    <div className='uppercase font-bold'>
                        <h2 className='text-5xl text-[#c67700]  md:text-3xl'>Enjoy 50% Off</h2>
                        <p className='text-2xl md:text-xl text-[#f9b248]  my-5'>21st october to 2nd november</p>
                        <button className='px-5 py-5 text-xl md:text-lg bg-[#c67700] text-white rounded-md uppercase'>Use Code: TechStore50 </button>
                    </div>

                    <Swiper
                        spaceBetween={30}
                        centeredSlides={true}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        pagination={{
                            clickable: true,
                        }}
                        navigation={true}
                        modules={[Autoplay, Pagination, Navigation]}
                        className="mySwiper"
                    >
                        {/* className='flex-1 w-full' */}
                        <div>
                            {
                                products.map((product, _id) =>
                                    <SwiperSlide key={_id}>
                                        <img  src={product.photo} alt={`${_id + 1}`} />
                                    </SwiperSlide>
                                )
                            }
                        </div>
                    </Swiper>
                </div>

            </div>


        </>
    );
};
ProductBanner.propTypes = {
    productSlide: PropTypes.obj,
    _id: PropTypes.number
};

export default ProductBanner;