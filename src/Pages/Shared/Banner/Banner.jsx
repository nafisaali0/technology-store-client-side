import banner from '../../../assets/cool-background.svg'
import image from '../../../assets/hero1.png'
const Banner = () => {
    return (
        <>
            <div className="hero min-h-screen z-0 bg-[#f2f2f2] " style={{ backgroundImage: `url(${banner})` }}>
                <div className="hero-overlay  bg-opacity-60"></div>
                <div className='flex flex-col-reverse md:flex-row justify-between items-center container mx-auto overflow-hidden'>
                    <div className="flex-1 lg:w-2/5 text-left text-[#f9b248] p-3">
                        <h1 className="mb-5 text-lg md:text-5xl font-bold">Welcome To Tech Store</h1>
                        <p className="mb-5 text-3xl">
                            TAKE YOUR TRIP
                            TO YOUR VIRTUAL
                            WORLD
                        </p>
                        <button className="btn border-none text-white bg-[#c67700] px-7">Shop Now</button>
                    </div>
                    <div>
                        <img src={image} className="lg:w-[900px] lg:h-[700px] md:w-[400px] md:h-[00px] rounded-lg shadow-2xl" />
                    </div>
                </div>

            </div>
        </>
    );
};


export default Banner;