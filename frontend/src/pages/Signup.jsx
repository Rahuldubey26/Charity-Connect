import React from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="container mx-auto py-10 flex justify-center items-center">
      <div className="w-full max-w-md bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-bold text-center mb-6">Signup</h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700">Name</label>
            <input type="text" className="w-full border rounded-lg p-2" required />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input type="email" className="w-full border rounded-lg p-2" required />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Password</label>
            <input type="password" className="w-full border rounded-lg p-2" required />
          </div>
          <button type="submit" className="bg-blue-600 text-white w-full py-2 rounded-lg">Signup</button>
        </form>
        <p className="text-center mt-4">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-600">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
