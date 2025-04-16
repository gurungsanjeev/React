

import { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import axios from 'axios'
const Signup = () => {
    const [fname, setFname] = useState("")
    const [lname, setLname] = useState("")
    const [email, setEmail] = useState("")
    const [gender, setGender] = useState("")
    const [birthDay, setBirthDay] = useState("")
    const [birthMonth, setBirthMonth] = useState("")
    const [birthYear, setBirthYear] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate();

    const generateDays = () => {

        return Array.from({ length: 31 }, (_, i) => (
            <option key={i + 1} value={i + 1}>
                {i + 1}
            </option>
        ));
    };

    const generateYears = () => {
        const years = [];
        for (let i = 2025; i >= 1905; i--) {
            years.push(<option key={i} value={i}>{i}</option>);
        }
        return years;
    };


    const handleSubmit = (e: { preventDefault: () => void; }) => {

        e.preventDefault();
        if (!fname || !lname || !email || !gender || !birthDay || !birthMonth || !birthYear || !password) {
            alert("Please fill in all the fields");
            return;
        }

        axios.post("http://localhost:3001/signup", { fname, lname, email, password, gender, birthDay, birthMonth, birthYear })
            .then(result => {
                console.log(result)
                navigate('/login')
            })
            .catch(err => console.log(err));

        // console.log({
        //     fname,
        //     lname,
        //     email,
        //     gender,
        //     birthDay,
        //     birthMonth,
        //     birthYear,
        //     password,
        // });

    }


    return (
        <div className="bg-[#f0f2f5] min-h-screen flex items-center justify-center flex-col">
            <h1 className='text-6xl text-blue-500 font-bold'>facebook</h1>
            <div className="flex flex-col lg:flex-row items-center gap-16 mt-6">



                <div className="bg-white rounded-lg shadow-lg w-[432px]">
                    <div className="mb-4 px-2.5 py-4" >
                        <h1 className="flex justify-center text-2xl font-semibold">Create a new account</h1>
                        <p className="flex  justify-center text-sm">It’s quick and easy.</p>

                    </div>
                    <form onSubmit={handleSubmit}>

                        <div className="flex flex-col gap-4 border-t-2 border-gray-300 p-4">
                            <div className="flex gap-5 w-[339]">

                                <input
                                    type="text"
                                    placeholder="First Name"
                                    value={fname}
                                    onChange={(e) => setFname(e.target.value)}
                                    required
                                    className="p-2.5 font-[15px]  w-[100%] border border-gray-300 rounded-md text-[17px] focus:outline-blue-500"
                                />
                                <input
                                    type="text"
                                    placeholder="Last Name"
                                    value={lname}
                                    onChange={(e) => setLname(e.target.value)}
                                    required
                                    className="p-2.5  w-[100%]  border border-gray-300 rounded-md text-[17px] focus:outline-blue-500"
                                />
                            </div>

                            <div>
                                <label className="text-sm">Birthday</label>
                                <div className="flex gap-2 mt-1">
                                    <select
                                        name="birthDay"

                                        value={birthDay}
                                        onChange={(e) => setBirthDay(e.target.value)}

                                        required
                                        className="w-1/3 border border-gray-300 rounded-md  p-1 "
                                    >
                                        {generateDays()}
                                    </select>

                                    <select
                                        name="birthMonth"
                                        value={birthMonth}
                                        onChange={(e) => setBirthMonth(e.target.value)}
                                        required
                                        className="w-1/3 border border-gray-300 rounded-md p-1"
                                    >
                                        {["Month", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"].map(
                                            (month, i) => (
                                                <option key={i} value={month}>
                                                    {month}
                                                </option>
                                            )
                                        )}
                                    </select>

                                    <select
                                        name="birthYear"
                                        value={birthYear}
                                        onChange={(e) => setBirthYear(e.target.value)}
                                        required
                                        className="w-1/3 border border-gray-300 rounded-md p-1"
                                    >
                                        {generateYears()}
                                    </select>
                                </div>
                            </div>

                            <div>
                                <label className="text-sm">Gender</label>
                                <div className="flex gap-2 mt-1">
                                    <input
                                        type="radio"
                                        name="gender"
                                        value="Female"

                                        className="border border-gray-300 rounded-md"

                                        onChange={(e) => setGender(e.target.value)}
                                    />Female
                                    <input
                                        type="radio"
                                        name="gender"

                                        value="Male"
                                        className="border border-gray-300 rounded-md"
                                        onChange={(e) => setGender(e.target.value)}
                                    />Male
                                    <input
                                        type="radio"
                                        name="gender"
                                        value="others"
                                        className="border border-gray-300 rounded-md"
                                        onChange={(e) => setGender(e.target.value)}
                                    />others




                                </div>
                            </div>
                            <input
                                name="mobileOrEmail"
                                placeholder="Mobile number or email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                className="p-2 border border-gray-300 rounded-md"
                            />

                            <input
                                name="password"
                                type="password"
                                placeholder="New password"
                                value={password}
                                required
                                onChange={(e) => setPassword(e.target.value)}
                                className="p-2 border border-gray-300 rounded-md"
                            />
                            <p className='text-[11px] w-auto'>
                                People who use our service may have uploaded your contact information to Facebook. <span className='text-blue-500'> Learn more.</span>
                            </p>
                            <p className='text-[11px] w-auto '>   By clicking Sign Up, you agree to our <span className='text-blue-500'> Terms </span>, <span className='text-blue-500'>Privacy Policy </span> and <span className='text-blue-500'> Cookies Policy</span>. You may receive SMS Notifications from us and can opt out any time.
                            </p>

                            <button
                                type="submit"
                                className="bg-green-600  flex justify-center text-white py-3 rounded-md font-semibold text-lg hover:bg-green-700"

                            >
                                Signup
                            </button>
                        </div>
                    </form>

                    <NavLink to="/login"> <span

                        className="text-blue-600 text-sm text-center hover:underline flex justify-center"
                    >
                        Already have an Account?
                    </span>
                    </NavLink>


                </div>

            </div>

        </div>







    );
};

export default Signup;
