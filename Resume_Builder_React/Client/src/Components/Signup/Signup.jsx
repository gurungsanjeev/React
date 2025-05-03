
import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import Login from '../Login/Login'
import NavBar from '../Navbar/NavBar'
import axios from 'axios'
import Footer from '../Footer'


const Signup = () => {


  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();




  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:3001/register", { name, email, password })
      .then(result => {
        console.log(result)
        if(result.data === "user Already exists"){
          alert("user already Existed!")
        }else{

          navigate('/login')
        }
        
      })
      .catch(err => console.log(err))
  }






  return (


    <>
      
      <div className="flex items-center justify-center min-h-screen w-full bg-gray-100">
        <div className="w-full max-w-sm p-8 bg-white  shadow-lg rounded-xl">
          <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="fullname" className="block text-gray-700 text-sm font-bold mb-2">
                Full Name
              </label>
              <input
                type="text"
                id="fullname"
                onChange={(e) => setName(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded"
                placeholder="Enter your full name"
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded"
                placeholder="Enter your email"
                required
              />
            </div>

            <div className="mb-6">
              <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
                Password
              </label>
              <input
                type="password"
                autocomplete="new-password"
                onChange={(e) => setPassword(e.target.value)}
                id="password"
                className="w-full px-3 py-2 border border-gray-300 rounded"
                placeholder="Create a password"
                required
              />
            </div>

            <button
              type="submit"

              className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
            >
              Sign Up
            </button>
          </form>

          {/* Login Link */}
          <p className="mt-6 text-center text-sm text-gray-600">
            Already have an account?{' '}

            <NavLink to="/login" className="text-green-500 hover:underline font-medium">
              Login</NavLink>

          </p>
        </div>
      </div>
      
    </>
  )
}

export default Signup
