import React from 'react'
import { NavLink } from 'react-router-dom'
import Footer from '../Footer'
import NavBar from '../Navbar/NavBar'
const Login = () => {
  return (
    <>

    <NavBar/>
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
                id="password"
                className="w-full px-3 py-2 border border-gray-300 rounded"
                placeholder="Enter your password"
              />
            </div>

            <button
              type="submit"
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

      <Footer/>
    </>
  )
}

export default Login
