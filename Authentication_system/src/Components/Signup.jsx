import React from 'react'
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Signup = () => {
  const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [userName, setUserName] = useState('');
  
    const handleSignup = (e) => {
      e.preventDefault();
      // Basic dummy login logic
      
      
    };
  
    return (
      <div className="flex items-center justify-center h-screen bg-gradient-to-br from-gray-200 to-gray-400">
        <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md">
          <h1 className="text-3xl font-bold text-center text-indigo-700 mb-4">Sign Up</h1>
          <hr className="mb-6 border-indigo-200" />
  
          <form onSubmit={handleSignup} className="flex flex-col gap-4">
            <div>
              <label htmlFor="email" className="block mb-1 text-sm font-medium text-gray-700">UserName</label>
              <input
                type="text"
                id="username"
                placeholder='Enter your name'
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                value={userName}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-1 text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                id="email"
                placeholder='Example@.com'
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
  
            <div>
              <label htmlFor="password" className="block mb-1 text-sm font-medium text-gray-700">Password</label>
              <input
                type="password"
                id="password"
                placeholder='Enter your password'
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
  
            <button
              type="submit"
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-lg font-medium transition duration-200"
            >
              Register
            </button>
  
            <div className="text-center mt-4 text-sm text-gray-600">
              Already have an account?<NavLink to ='/login'><span className="text-indigo-600 hover:underline cursor-pointer">Login Now</span></NavLink>
            </div>
          </form>
        </div>
      </div>
    );
}

export default Signup
