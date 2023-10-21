import banner from '../../../assets/banner9.jpeg'
const CountDown = () => {
    return (
        <>
            <div className='container mx-auto overflow-hidden'> 
                <div className="hero h-[700px]" style={{ backgroundImage: `url(${banner})` }}>
                    <div className="hero-overlay bg-opacity-70"></div>
                    <div className="hero-content text-center text-neutral-content ">
                        <div className="flex flex-col justify-center items-center">
                            <h1 className="mb-5 text-3xl md:text-5xl font-bold">FOR ALL EXCLUSIVE COLLETIONS</h1>
                            <p className="mb-5 text-2xl md:text-3xl">Count down is going on...</p>
                            <div className="grid grid-flow-col gap-5 text-center auto-cols-max my-3">
                                <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                                    <span className="countdown font-mono text-5xl">
                                        <span style={{ "--value": 15 }}></span>
                                    </span>
                                    days
                                </div>
                                <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                                    <span className="countdown font-mono text-5xl">
                                        <span style={{ "--value": 10 }}></span>
                                    </span>
                                    hours
                                </div>
                                <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                                    <span className="countdown font-mono text-5xl">
                                        <span style={{ "--value": 24 }}></span>
                                    </span>
                                    min
                                </div>
                                <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                                    <span className="countdown font-mono text-5xl">
                                        <span style={{ "--value": 45 }}></span>
                                    </span>
                                    sec
                                </div>
                            </div>
                            <p className="mb-5 text-xl">DON'T MISS THE OFFER</p>
                            <p className="mb-5 text-xl">BUY NOW!</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CountDown;