import React from 'react'
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <div>
      <nav className="bg-blue-600 text-white p-4 shadow-md">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-bold">MyWebsite</h1>

        {/* Menu */}
        <ul className="flex space-x-6 text-lg justify-around">
        <li><Link to="/" className="hover:text-gray-200">Home</Link></li>
        <li><Link to="/aboutus" className="hover:text-gray-200">About</Link></li>
        <li><Link to="/services" className="hover:text-gray-200">Services</Link></li>
        <li><Link to="/contactus" className="hover:text-gray-200">Contact</Link></li>
        <li><Link to="/signup" className="hover:text-gray-200 p-2 bg-red-800 rounded-md border hover:bg-red-500">SignUp</Link></li>


          {/* <li><a href="#" className="hover:text-gray-200">Contact</a></li> */}
        </ul>
      </div>
    </nav>
    </div>
  )
}

export default Navbar
