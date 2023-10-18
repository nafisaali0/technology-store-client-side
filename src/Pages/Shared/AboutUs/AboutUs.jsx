import about from '../../../assets/about.jpg'
const AboutUs = () => {
    return (
        <>
            <div className="min-h-full bg-base-200 my-10 p-5">
                <div className='flex flex-col-reverse lg:flex-row lg:justify-between gap-5 items-center container mx-auto overflow-'>
                    <div className="flex-1 lg:w-2/5 text-left text-neutral-content">
                        <h1 className="mb-5 text-sm text-[#474f85] font-bold">About Us</h1>
                        <h1 className="text-3xl text-[#474f85] font-bold">
                            We understand that online shopping should be convenient, reliable, and enjoyable
                            event and automation
                        </h1>
                        <p className="py-6 text-xl text-black w-4/5">
                            We source our products from trusted suppliers and vendors to provide you with items that meet the highest quality standards. <br />
                            Our product catalog spans a wide variety of categories, from fashion and electronics to home and lifestyle, giving you endless choices.<br />
                        </p>
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