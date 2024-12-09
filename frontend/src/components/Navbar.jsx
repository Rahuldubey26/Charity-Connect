import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo Section */}
        <Link to="/" className="flex items-center">
          <img src="/assets/lg.png" alt="Charity Connect Logo" className="w-12 h-auto mr-2" />
          <h1 className="text-2xl font-bold">Charity Connect</h1>
        </Link>
        <div className="flex items-center">
          <Link to="/" className="px-4">Home</Link>
          <Link to="/about" className="px-4">About</Link>
          <Link to="/contact" className="px-4">Contact</Link>
          <Link to="/login">
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg ml-4">Donate</button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
