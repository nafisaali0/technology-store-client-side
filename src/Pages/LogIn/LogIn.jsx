import Swal from 'sweetalert2'
import { Link } from 'react-router-dom';
import NavBar from './../Shared/NavBar/NavBar';
import { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
const LogIn = () => {

    const {logInUser, googleLogIn } = useContext(AuthContext)

    const handleLogIn = e => {
        e.preventDefault();

        const email = e.target.email.value
        const password = e.target.password.value
        console.log(email, password)

        //promice for get login value 
        logInUser(email, password)
            .then(result => {
                console.log(result)
                return (
                    Swal.fire(
                        'LogIn Successfully!'
                      )
                )
                
            })
            .catch(error => {
                console.log(error)

            })
    }

    const handleGoogle = () => {
        googleLogIn()
            .then(result => {
                return (
                    console.log(result.user)
                )
            })
            .catch(error => console.log(error))
    }


    return (
        <>
            <NavBar></NavBar>


            {/* form start*/}
            <div className='container mx-auto overflow-hidden '>
                {/* form */}
                <div className="flex flex-col justify-center items-center my-24 p-10">
                    <div className="relative flex flex-col rounded-xl bg-transparent bg-clip-border text-gray-700 shadow-none">
                        <h4 className="block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                            Log In
                        </h4>
                        <form onSubmit={handleLogIn} className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
                            <div className="mb-4 flex flex-col gap-6">
                                <div className="relative h-11 w-full min-w-[200px]">
                                    <input className="peer h-full w-full rounded-md border border-blue-gray-200 bg-gray-100 bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-500 focus:border-t-transparent"
                                        placeholder="Email"
                                        type="email"
                                        name="email"
                                    />
                                </div>
                                <div className="relative h-11 w-full min-w-[200px]">
                                    <input className="peer h-full w-full rounded-md border border-blue-gray-200 bg-gray-100 bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-500 focus:border-t-transparent"
                                        placeholder="Password"
                                        name="password"
                                        type='password'
                                    />
                                </div>
                                <div className='text-[#474f85]'>
                                    <a href="#">Forgot password?</a>
                                </div>
                            </div>
                            <button
                                className="mt-6 block w-full select-none rounded-lg bg-[#66bfbf] py-3 text-center align-middle font-sans text-lg font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                                type="submit"
                                data-ripple-light="true"
                            >
                                Log In
                            </button>
                            <div className='flex justify-center items-center my-4 text-2xl text-[#474f85]'><p>OR</p></div>
                            <div className='flex justify-center items-center'>
                                <button
                                    onClick={handleGoogle}
                                    className="w-full py-3 border-2 border-[#66bfbf] text-black"
                                    type="submit"
                                    data-ripple-light="true"
                                >
                                    LogIn With Google
                                </button>
                            </div>
                            <p className="mt-4 block text-center font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
                                Already have an account?
                                <Link to='/register'>
                                    <a
                                        className="font-medium text-pink-500 transition-colors hover:text-blue-700"
                                        href="#">
                                        Register
                                    </a>
                                </Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default LogIn;