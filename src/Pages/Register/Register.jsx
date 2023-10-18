import Swal from 'sweetalert2'
import { useContext, useState } from "react";
import NavBar from "../Shared/NavBar/NavBar";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";



const Register = () => {

    const { registerUser} = useContext(AuthContext)
    const [registerError, setRegisterError] = useState('')
    const passwordRequirement = /^(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}[\]:;<>,.?~\\-]).{6,}$/;
    const navigate = useNavigate()

    const handleRegister = e => {
        e.preventDefault();

        const email = e.target.email.value
        const password = e.target.password.value

        // console.log(email, password)
        
        setRegisterError('')//clean error state
        
        // grap error before data going to server
        if (!passwordRequirement.test(password)) {
            setRegisterError('Your password should be capital letter, regular expression and length would be 6')
            return Swal.fire({
                icon: 'error',
                title: (registerError),
                text: 'Can Not Register',
            })
        }
        registerUser(email, password)
            .then(result => {
                return (
                    console.log(result.user),
                    Swal.fire(
                        'Register Successfully!'
                    ),
                    e.target.reset(),
                    navigate('/')
                )
            })
            .catch(error => {
                console.log(error)
                return (
                    setRegisterError(error.message),
                    Swal.fire({
                        icon: 'error',
                        title: (registerError),
                        text: 'Can Not Register',
                    })
                )
            })

    }


    return (
        <>
            <NavBar></NavBar>

            {/* Register form start */}

            <div className="container mx-auto overflow-hidden">
                {/* form */}
                <div className="flex flex-col justify-center items-center my-36 p-10">
                    <div className="relative flex flex-col rounded-xl bg-transparent bg-clip-border text-gray-700 shadow-none">
                        <h4 className="block font-sans text-2xl font-semibold leading-snug tracking-normal text-[#474f85] antialiased">
                            Register
                        </h4>
                        <p className="mt-1 block font-bold text-base leading-relaxed text-[#474f85] antialiased">
                            Enter your details to register.
                        </p>
                        <form onSubmit={handleRegister} className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
                            <div className="mb-4 flex flex-col gap-6">
                                <div className="relative h-11 w-full min-w-[200px]">
                                    <input className="peer h-full w-full rounded-md border border-blue-gray-200 bg-gray-100 bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-500 focus:bg-gray-100"
                                        placeholder="Name"
                                        type="text"
                                        name="name"
                                    />
                                </div>
                                <div className="relative h-11 w-full min-w-[200px]">
                                    <input className="peer h-full w-full rounded-md border border-blue-gray-200 bg-gray-100 bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-500 focus:bg-gray-100"
                                        placeholder="Email"
                                        type="email"
                                        name="email"
                                    />
                                </div>
                                <div className="flex relative h-11 w-full min-w-[200px]">
                                    <input className="peer h-full w-full rounded-md border border-blue-gray-200 bg-gray-100  bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-500 focus:bg-gray-100"
                                        type='password'
                                        placeholder="Password"
                                        name="password"
                                        required
                                    />
                                </div>
                            </div>
                            <button
                                className="mt-6 block w-full select-none rounded-lg bg-[#66bfbf] text-white py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                                type="submit"
                                data-ripple-light="true"
                            >
                                Register
                            </button>
                            <p className="mt-4 block text-center font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
                                Already have an account?
                                <Link to='/login'>
                                    <a
                                        className="font-medium text-pink-500 transition-colors hover:text-blue-700"
                                        href="#"
                                    >
                                        Log In
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

export default Register;