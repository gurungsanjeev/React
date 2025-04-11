import { NavLink } from "react-router-dom";
const Login = () => {
    return (
        <div className="bg-[#f0f2f5] min-h-screen flex items-center justify-center">
            <div className="flex flex-col lg:flex-row items-center gap-16">
                {/* Left Side Slogan */}
                <div className="text-center lg:text-left max-w-lg relative bottom-10">
                    <h1 className="text-blue-600 text-6xl font-bold font-sans">facebook</h1>
                    <h2 className="text-[28px] leading-8 mt-4 font-[SFProDisplay-Regular, Helvetica, Arial, sans-serif] w-[500px] font-normal">
                        Connect with friends and the world around you on Facebook.
                    </h2>
                </div>

                {/* Signup Card */}
                <div>

                
                <div className="bg-white p-5 rounded-lg shadow-lg w-[396px]">
                    <form className="flex flex-col gap-4">
                        <input
                            type="text"
                            placeholder="Email or phone number"
                            className="px-4 py-3 border border-gray-300 rounded-md text-[17px] focus:outline-blue-500"
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            className="px-4 py-3 border border-gray-300 rounded-md text-[17px] focus:outline-blue-500"
                        />

                        <button
                            type="submit"
                            className="bg-blue-600 text-white py-3 rounded-md font-semibold text-lg hover:bg-blue-700"
                        >
                            Log In
                        </button>

                        <a
                            href="#"
                            className="text-blue-600 text-sm text-center hover:underline"
                        >
                            Forgot password?
                        </a>

                        <hr className="my-2 bg-[#f0f2f5]" />
                        <NavLink to="/signup">
                        <button
                            type="button"
                            className="bg-green-600 text-white py-3 rounded-md font-semibold text-md hover:bg-green-700 mx-auto w-fit px-5 flex justify-center"
                        >
                            Create New Account
                        </button>
                        </NavLink>
                    </form>

                </div>
                <p className="text-sm text-center mt-6">
                    <span className="font-semibold hover:underline cursor-pointer">
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
