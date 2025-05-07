import React from 'react';

const ExtraServices = () => {
  return (
    <div className="bg-black text-white px-6 sm:px-10 lg:px-20 py-20 min-h-screen">
      <div className="max-w-7xl mx-auto relative">
        {/* Top-left Title */}
        <div className="bg-black p-6 sm:p-8 rounded-2xl shadow-md max-w-xl mb-12">
          <h1 className="text-6xl sm:text-5xl font-extrabold leading-tight">
            What's new for you <br />
            in <span className="text-blue-500">Construction?</span>
          </h1>
        </div>

        {/* Right side Eco-Friendly box */}
        <div className="bg-black p-6 sm:p-8 rounded-2xl shadow-md max-w-xl ml-auto mb-20 md:-mt-20">
          <p className='text-lg'>
            <span className="text-green-400 text-2xl font-semibold">🌿 Eco-Friendly Construction Options</span><br />
            At EverTrust, we provide green construction solutions that are sustainable. From energy-saving materials and products to low-impact site clearance, we turn your project into a green, cost-effective undertaking. When you build your home or renovate your office complex, EverTrust combines green-innovative thinking and durable quality.
          </p>
        </div>

        {/* Bottom-left Emergency Services */}
        <div className="bg-black p-6 sm:p-8 rounded-2xl shadow-md max-w-xl mt-10 md:ml-10">
          <p className='text-lg'>
            <span className="text-yellow-300 text-2xl font-semibold">🛠️ Emergency Repair Services</span><br />
            When unforeseen damage happens, EverTrust is there 24/7 to make emergency home and business repairs. Your emergency roof repair, storm damage cleanup, or emergency grading and erosion control might be the order of the day; our crew delivers speedy, dependable service to restore your property to all due haste.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ExtraServices;
