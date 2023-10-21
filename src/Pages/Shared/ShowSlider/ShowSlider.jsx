import PropTypes from 'prop-types';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './slides.css'


// import required modules
import { Pagination, Navigation } from 'swiper/modules';



const ShowSlider = ({ product, _id }) => {
    return (
        <>
            <Swiper
                // onSwiper={setSwiperRef}
                slidesPerView={3}
                centeredSlides={true}
                spaceBetween={30}
                pagination={{
                    type: 'fraction',
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                
                <SwiperSlide>Slide 2</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide>
            </Swiper>
        </>
    );
};

ShowSlider.propTypes = {
    product: PropTypes.obj,
    _id: PropTypes.number
};

export default ShowSlider;




// import PropTypes from 'prop-types';
// // Import Swiper React components
// import { Swiper, SwiperSlide } from 'swiper/react';

// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';

// import './slides.css'

// // import required modules

// import { EffectFade, Navigation, Pagination } from 'swiper/modules';

// const ShowSlider = ({productSlide, _id }) =>
//     console.log(productSlide)
//     return (
//         <>
//             <Swiper
//                 key={_id}
//                 spaceBetween={30}
//                 effect={'fade'}
//                 navigation={true}
//                 pagination={{
//                     clickable: true,
//                 }}
//                 modules={[EffectFade, Navigation, Pagination]}
//                 className="mySwiper"
//             >
//                 <SwiperSlide>
//                     <img src={productSlide.photo} />
//                 </SwiperSlide>
//             </Swiper>
//         </>
//     );
// };

