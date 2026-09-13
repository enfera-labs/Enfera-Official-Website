import React from "react";
import AssistantImage from "../assets/images/Assistant.png"; 

const AssistantCard = () => {
  return (
    <div className="bg-gradient-to-r from-blue-50 to-indigo-100 rounded-2xl shadow-lg p-6 md:p-10 flex flex-col md:flex-row items-center justify-between gap-8 my-16 max-w-6xl mx-auto">
      
      {/* Text Content */}
      <div className="flex-1 text-center md:text-left">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Need Assistance?
        </h2>
        <p className="text-lg text-gray-600 mb-6 max-w-md">
          Let's assess your needs and craft the perfect strategy for your business.
        </p>
        <a
          href="https://wa.me/94779458618"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full font-semibold shadow-md hover:scale-105 transition-transform"
        >
          Contact Us <span className="ml-2">▶</span>
        </a>
      </div>
      
      {/* Image */}
      <div className="flex-1">
        <img
          src={AssistantImage}
          alt="Assistant"
          className="w-full max-w-sm rounded-xl drop-shadow-lg"
        />
      </div>
    </div>
  );
};

export default AssistantCard;
