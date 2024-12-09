import React from "react";

const DonateNow = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 py-10">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg text-center">
        <h2 className="text-3xl font-bold mb-6">Make a Difference with Your Donation</h2>
        <p className="text-lg mb-6">
          Your generous donation helps us to fund education, healthcare, disaster relief, and much more.
        </p>
        <button className="bg-blue-600 text-white px-8 py-4 rounded-lg text-xl hover:bg-blue-700 transition duration-300">
          Donate Now
        </button>
      </div>
    </div>
  );
};

export default DonateNow;
