import React from "react";
import { Link } from "react-router-dom";
import { FiClock } from "react-icons/fi";

const ComingSoon = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-100 to-gray-300 px-6 text-center">
      <div className="bg-white p-10 rounded-3xl shadow-xl max-w-md">
        <div className="flex justify-center mb-6">
          <div className="bg-yellow-100 text-yellow-600 p-4 rounded-full shadow">
            <FiClock size={40} />
          </div>
        </div>
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Coming Soon!</h1>
        <p className="text-gray-600 mb-6">
          This service is under construction and will be available soon. Stay tuned for exciting updates!
        </p>
        <Link
          to="/"
          className="inline-block px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full font-medium shadow hover:from-blue-600 hover:to-purple-700 transition-all"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default ComingSoon;
