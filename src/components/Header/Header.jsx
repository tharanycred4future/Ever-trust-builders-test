import React from 'react';

const Header = () => {
  return (
    <div className="flex items-center justify-center">
      <div
        className="relative bg-cover bg-center w-full h-[90vh] md:h-[60vh] rounded-lg px-6 sm:px-10 lg:px-20 py-12 flex flex-col justify-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('/contact-header-img.jpg')",
        }}
      >
        <h3
          data-aos="fade-up"
          className="text-[#bcd4e6] text-lg sm:text-lg font-semibold mb-2"
        >
          Welcome to Ever Trust Builders
        </h3>
        <h1
          data-aos="fade-up"
          data-aos-delay="100"
          className="text-[#1dacd6] text-3xl sm:text-3xl md:text-5xl font-extrabold leading-tight mb-4"
        >
          Leading Construction Company in St Louis, Missouri
        </h1>
        <p
          data-aos="fade-up"
          data-aos-delay="200"
          className="text-[#e7feff] text-base sm:text-sm md:text-lg max-w-4xl"
        >
          Ever Trust Builders is the most successful construction company in St
          Louis, Missouri, enjoying a solid reputation as one of the trusted
          commercial & residential construction companies. We take pride in an
          excellent history of delivering over 100 projects with reliable and
          high-quality craftsmanship year-round. Our commitment to excellence is
          the reason behind our full range of services from design to
          construction so that every project will be done on time, within
          budget, and of the highest quality.
        </p>
      </div>
    </div>
  );
};

export default Header;
