import about from '../../../assets/about.jpg'
const AboutUs = () => {
    return (
        <>
            <div className="min-h-full bg-base-200 my-20 p-8">
                <div className='flex flex-col-reverse lg:flex-row lg:justify-between gap-5 items-center container mx-auto overflow-'>
                    <div className="flex-1 lg:w-2/5 text-left text-neutral-content">
                        <h1 className="mb-5 text-sm text-[#c67700] font-bold">About Us</h1>
                        <h1 className="text-3xl text-[#f9b248] font-bold">
                            We understand that online shopping should be convenient, reliable, and enjoyable
                            event and automation
                        </h1>
                        <p className="py-6 text-xl text-black w-4/5">
                            We source our products from trusted suppliers and vendors to provide you with items that meet the highest quality standards. <br />
                            Our product catalog spans a wide variety of categories, from fashion and electronics to home and lifestyle, giving you endless choices.<br />
                        </p>
                        <div className='flex justify-between flex-col md:flex-row font-bold gap-3'>
                            <div className='text-[#f9b248]'>
                                <h2 >Fear Of Missing Out?</h2>
                                <p className='mt-1'>Get the latest deals,updates & more</p>
                            </div>
                            <div className="form-control w-full max-w-xs">
                                <div className='flex text-white'>
                                    <input type="email" placeholder='Email' className="w-full max-w-xs py-3"/>
                                    <button className='w-1/2 max-w-xs py-3 bg-[#c67700]'>Subscribe</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <img src={about} className="min-w-full lg:min-w-max rounded-lg shadow-2xl" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default AboutUs;