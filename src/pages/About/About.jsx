import React from 'react';

const About = () => {
  return (
    <section className="px-6 py-16 md:px-20 bg-gray-50 text-gray-800 pt-50 ">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#002e63]">About Us</h2>
        <p className="text-lg leading-relaxed mb-8">
          At <span className="font-semibold">EverTrustBuilders</span>, we take our work seriously and our number one priority is your satisfaction.
          Honesty, hard work, excellence, and quality are the virtues we live by and we strive to uphold each of them on every job.
          We specialize in quality services and can improve the curb appeal of your home and property while helping to increase safety
          and eliminate small problems before they become big, expensive issues.
        </p>

        <div className="text-left">
          <h3 className="text-2xl font-semibold text-[#1dacd6] mb-4">Some of the types of work we do:</h3>
          <ul className="list-disc list-inside space-y-2 text-base md:text-lg">
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
    </section>
  );
};

export default About;
