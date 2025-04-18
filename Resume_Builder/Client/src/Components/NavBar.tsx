
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav className="bg-white  shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center ">
        {/* Logo / Brand */}
        <div className="text-2xl font-bold text-blue-600">
          <Link to="/home">ProfileBuilder</Link>
        </div>

        {/* Navigation Links */}
        <div className="space-x-4">
          <Link
            to="/login"
            className="text-gray-700 hover:text-blue-600 font-medium transition"
          >
            Login
          </Link>
          <Link
            to="/signup"
            className="text-white bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded font-medium transition"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
