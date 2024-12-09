import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section
      className="hero bg-cover bg-center min-h-screen flex items-center justify-center"
      style={{ backgroundImage: "url('/assets/bg.jpg')" }} // Add your background image path
    >
      <div className="text-center text-white p-4">
        <h1 className="text-4xl font-bold mb-4">Welcome to Charity Connect</h1>
        <p className="text-lg mb-6">
          Empowering change, one donation at a time. Join us in making a difference!
        </p>

        {/* Donate Now Button */}
        <Link to="/donate-now">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg text-xl hover:bg-blue-700 transition duration-300">
            Donate Now
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
