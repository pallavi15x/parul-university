import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    // 'z-50' ensures it stays on top of the hero image
    <nav className="flex justify-between items-center p-6 bg-white shadow-md w-full z-50 relative">
      <div className="font-bold text-xl text-orange-600">PARUL UNIVERSITY</div>
      <div className="space-x-8 hidden md:flex font-medium text-gray-700">
        <Link to="/" className="hover:text-orange-500 transition">Home</Link>
        <Link to="/about" className="hover:text-orange-500 tarnsition">About</Link>
        <Link to="/events" className="hover:text-orange-500 transition">Events</Link>
      </div>
      <button className="bg-yellow-400 px-6 py-2 rounded-full font-bold text-black transition">
        Apply Now 2026
      </button>
    </nav>
  );
};


export default Navbar;