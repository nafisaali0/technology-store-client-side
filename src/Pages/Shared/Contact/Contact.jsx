import contact from '../../../assets/connect.jpg'
const Contact = () => {
    return (
        <div>
            <div className="container mx-auto my-10 overflow-hidden"
                data-aos="fade-up"
                data-aos-duration="3000">
                <div className="flex items-center flex-col md:flex-row gap-20 md:gap-10  p-5">
                    <div className='flex-1'>
                        <div className='text-4xl font-roboto font-bold'>
                            <h2>Get In Touch</h2>
                        </div>
                        <div className='mt-5'>
                            <img className='w-[500px] h-[400px]' src={contact} alt="" />
                        </div>
                    </div>
                    <div className=" flex-1 w-80 shadow-2xl bg-base-100" data-aos="flip-left"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="2000">
                        <form className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Message</span>
                                </label>
                                <textarea className="textarea textarea-bordered" placeholder="Message"></textarea>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn bg-[#66bfbf] text-white">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;