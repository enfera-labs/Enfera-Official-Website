import React from 'react';

const ServiceCards = () => {
  return (
    <div className="max-w-sm rounded-2xl overflow-hidden border p-4 shadow-md flex flex-col">
      <div className="flex items-center gap-4">
        <span className="text-xl font-bold">1.</span>
        <h3 className="text-lg font-semibold">Dedicated Development Teams</h3>
      </div>
      <img
        src="https://via.placeholder.com/300x150" 
        alt="Dedicated Development Teams"
        className="rounded-xl my-4 object-cover"
      />
      <p className="text-gray-600 mb-4">
        Expand your team with top-tier professionals dedicated to accelerating your project's success!
      </p>
      <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-full w-fit">
        Learn More
      </button>
    </div>
  );
};

export default ServiceCards;
