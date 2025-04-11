import React from 'react'
import { useState } from 'react';
import { NavLink } from 'react-router-dom';




const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError("Please enter valid data");
      return;
    }

    // Check if the email format is correct
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address");
      return;
    }
    alert(`Registered: ${email}`);
    // Basic dummy login logic
    console.log("Email:", email);
    console.log("Password:", password);
    setEmail("")
    setPassword("")
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-br from-gray-200 to-gray-400">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md">
        <h1 className="text-3xl font-bold text-center text-indigo-700 mb-4">Login</h1>
        <hr className="mb-6 border-indigo-200" />

        {/* /// Error message */}
        <div className='text-red-500 text-sm mb-4'>
          {error}
        </div>

        <form onSubmit={handleLogin} className="flex flex-col gap-4">
          <div>
            <label htmlFor="email" className="block mb-1 text-sm font-medium text-gray-700">Email{error}</label>
            <input
              type="email"
              id="email"
              placeholder='Example@.com'
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            // required
            />
          </div>

          <div>
            <label htmlFor="password" className="block mb-1 text-sm font-medium text-gray-700">Password{error}</label>
            <input
              type="password"
              id="password"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              value={password}
              placeholder='Enter your password'
              onChange={(e) => setPassword(e.target.value)}
            // required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-lg font-medium transition duration-200"
          >
            Login
          </button>

          <div className="text-center mt-4 text-sm text-gray-600">
            Don't have an account? <NavLink to="/signup"><span className="text-indigo-600 hover:underline cursor-pointer">Sign up now!</span></NavLink>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login
