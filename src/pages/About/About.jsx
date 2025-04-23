import React from 'react';

const About = () => {
  return (
    <>
    <section className="relative w-full h-[80vh] md:h-[100vh] min-h-[300px] sm:min-h-[400px] bg-gray-50 text-gray-800 mt-30 pt-10 md:pt-20">
  {/* Background Image */}
  <img
    src="/img_5.jpeg"
    alt="about page bg image"
    className="absolute inset-0 w-full h-full object-cover rounded-b-2xl shadow-lg"
  />

  {/* Overlay Content */}
  <div className="absolute inset-0 flex items-center justify-center text-center px-4">
    <div className=" w-3/4">
      <h2 className="text-3xl md:text-5xl pt-20 mb-4 sm:pt-8 font-bold text-white drop-shadow-md">
        About Us
      </h2>
      <p className="text-md md:text-xl text-white drop-shadow-md ">
        At <span className="font-semibold">EverTrustBuilders</span>, we take our work seriously and our number one priority is your satisfaction.
        Honesty, hard work, excellence, and quality are the virtues we live by and we strive to uphold each of them on every job.
        We specialize in quality services and can improve the curb appeal of your home and property while helping to increase safety
        and eliminate small problems before they become big, expensive issues.
      </p>
    </div>
  </div>
</section>

    <div className="text-center flex flex-col items-center justify-center py-20">
    <h3 className="text-2xl font-semibold text-[#1dacd6] mb-4">Some of the types of work we do:</h3>
    <div className='flex items-center text-left justify-center'>
    <ul className="list-disc list-inside space-y-2  md:text-lg">
      <li>Kitchen remodeling</li>
      <li>Roof (cleaning and repair)</li>
      <li>Gutters (cleaning and repair)</li>
      <li>Fencing &amp; gates (new or repair)</li>
      <li>Deck (new or repair)</li>
      <li>Flooring (installation or repair)</li>
      <li>Siding (installation or repair)</li>
      <li>Window / Door (installation or repair)</li>
      <li>Painting or staining</li>
      <li>Pressure washing</li>
    </ul>
    </div>
  </div>
  </>





  );
};

export default About;
