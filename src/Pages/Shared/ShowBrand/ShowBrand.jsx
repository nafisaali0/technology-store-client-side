import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// brand data come from MapBrand Comp
const ShowBrand = ({ brand }) => {
    const { image, brand_name } = brand;
    return (
        <>
            <Link to={`/products/${brand_name}`}>
                <div className="card bg-white shadow-xl p-10 my-7 lg:my-10">
                    <div>
                        <h3 className='text-2xl capitalize font-bold text-[#c67700] dark:text-white'>{brand_name}</h3>
                    </div>
                    <div className='flex justify-around items-center gap-3 flex-col-reverse lg:flex-row my-5'>
                        <div className='flex-1 w-full text-left'>
                            <div className='flex flex-row lg:flex-col flex-wrap gap-3  text-black text-lg font-bold'>
                                <p>Phone</p>
                                <p>Monitor</p>
                                <p>Watch</p>
                                <p>TWS</p>
                            </div>

                        </div>
                        <figure className="flex-1">
                            <img className='w-[200px] h-[200px] rounded-xl' src={image} alt="brand image" />
                        </figure>
                    </div>
                    <div>
                        <button className='text-white bg-[#c67700] px-5 py-2 rounded-full'>View All</button>
                    </div>

                </div>
            </Link>
        </>
    );
};

ShowBrand.propTypes = {
    brand: PropTypes.obj
};

export default ShowBrand;