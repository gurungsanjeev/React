import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import Footer from '../Footer'
import NavBar from '../Navbar/NavBar'
import axios from 'axios'
import { Navigate } from 'react-router-dom'
import { useState } from 'react'

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate();


  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post("http://localhost:3001/login", { email, password })
      .then(result => {
        console.log(result)
        if(result.data === "success")
          {

          navigate('/home')
        }
        else{
          alert("your password is incorrect!!")
        }
       
      })
      .catch(err => console.log(err));

  }
  return (
    <>

      <NavBar />
      <div className="flex items-center justify-center h-screen w-full bg-gray-100">
        <div className="w-full max-w-sm p-8 bg-white rounded-xl shadow-lg ">
          <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
          <form>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                onChange={(e)=> setEmail(e.target.value)}
                id="email"
                className="w-full px-3 py-2 border border-gray-300 rounded"
                placeholder="Enter your email"
              />
            </div>

            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                Password
              </label>
              <input
                type="password"
                onChange={(e)=>setPassword(e.target.value)}
                id="password"
                className="w-full px-3 py-2 border border-gray-300 rounded"
                placeholder="Enter your password"
              />
            </div>

            <button
              type="submit"
              onClick={handleSubmit}
              className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
            >
              Login
            </button>
          </form>

          {/* Sign up link */}
          <p className="mt-6 text-center text-sm text-gray-600">
            Don't have an account?{' '}


            <NavLink to="/signup" className="text-blue-500 hover:underline font-medium">Sign up</NavLink>

          </p>
        </div>
      </div>

      <Footer />
    </>
  )
}

export default Login
