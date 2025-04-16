import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Navigate } from "react-router-dom";
import axios from "axios";


const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();



    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        axios.post('http://localhost:3001/login', { email, password })
            .then(result => {
                console.log(result)
                if (result.data === "Success") {

                    navigate('/home')
                }

            })
            .catch(err => console.log(err))

    }

    return (
        <div className="bg-[#f0f2f5] min-h-screen flex items-center justify-center">
            <div className="flex flex-col lg:flex-row items-center gap-40">
                {/* Left Side Slogan */}
                <div className="text-center lg:text-left max-w-lg relative bottom-10">
                    <h1 className="text-blue-600 text-7xl font-bold font-sans">facebook</h1>
                    <h2 className="text-[28px] leading-8 mt-4 font-[SFProDisplay-Regular, Helvetica, Arial, sans-serif] w-[500px] font-normal">
                        Connect with friends and the world around you on Facebook.
                    </h2>
                </div>

                {/* Signup Card */}
                <div className="">


                    <div className="bg-white p-5 rounded-lg shadow-2xl w-[396px] ">
                        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                            <input
                                type="text"
                                value={email}
                                placeholder="Email or phone number"
                                className="px-4 py-3.5 border border-gray-300  rounded-md text-[18px] font-medium focus:outline-blue-500"
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <input
                                type="password"
                                value={password}
                                placeholder="Password"
                                className="px-4 py-3.5 border font-semibold border-gray-300  rounded-md text-[18px] focus:outline-blue-500"
                                onChange={(e) => setPassword(e.target.value)}
                            />

                            <button
                                type="submit"
                                className="bg-blue-600 text-white py-0 leading-12 px-4 rounded-md font-semibold text-[22px] hover:bg-blue-700"
                            >
                                Log In
                            </button>

                        </form>
                        <span className="text-center justify-center flex my-4">

                            <a
                                href="#"
                                className="text-blue-600 text-sm text-center  hover:underline"
                            >
                                Forgot password?
                            </a>
                        </span>

                        <hr className="my-6  bg-[#f0f2f5] " />
                        <NavLink to="/signup">
                            <button
                                type="button"
                                className="bg-[#42b72a] text-white py-3 text-lg rounded-md font-semibold text-md hover:bg-green-600 mx-auto w-fit px-5 flex justify-center"
                            >
                                Create New Account
                            </button>
                        </NavLink>

                    </div>
                    <p className="text-sm text-center mt-6  ">
                        <span className="font-bold hover:underline cursor-pointer">
                            Create a Page
                        </span>{" "}
                        for a celebrity, brand or business.
                    </p>

                </div>


            </div>
        </div>
    );
};

export default Login;
