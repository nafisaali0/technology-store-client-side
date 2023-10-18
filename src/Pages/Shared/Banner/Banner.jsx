import banner from '../../../assets/cool-background.svg'
import image from '../../../assets/hero1.png'
const Banner = () => {
    return (
        <>
            <div className="hero min-h-screen z-0 " style={{ backgroundImage: `url(${banner})` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className='flex flex-col-reverse md:flex-row justify-between items-center container mx-auto overflow-hidden'>
                    <div className="flex-1 lg:w-2/5 text-left text-neutral-content p-3">
                        <h1 className="mb-5 text-lg md:text-5xl font-bold">Welcome To Tech Store</h1>
                        <p className="mb-5">
                            Technocy is a clean, modern, user friendly, and highly customizable WordPress Theme, built for especially for your WooCommerce electronics store.
                        </p>
                        <button className="btn border-none text-white bg-[#66bfbf]">Shop Now</button>
                    </div>
                    <div>
                        <img src={image} className="min-w-full lg:min-w-max rounded-lg shadow-2xl" />
                    </div>
                </div>

            </div>
        </>
    );
};

export default Banner;