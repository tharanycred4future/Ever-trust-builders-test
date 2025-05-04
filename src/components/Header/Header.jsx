import React from 'react';

const Header = () => {
  return (
    <>
      <div className="pt-32 md:pt-40">
        {/* Hero Section */}
        <section className="relative w-full min-h-[90vh] text-white">
          {/* Background Image */}
          <img
            src="/home-header-img-alt.jpeg"
            alt="about page bg image"
            className="absolute inset-0 w-full h-full object-cover rounded-b-2xl shadow-lg"
          />

          {/* Overlay Content */}
          <div className="relative z-10 flex items-center justify-center px-4 sm:px-6 lg:px-8 py-24">
            <div className=" rounded-xl px-6 sm:px-10 lg:px-20 py-10 max-w-5xl w-full text-center shadow-md">
              <h3
                data-aos="fade-up"
                className="text-sm sm:text-base md:text-lg font-semibold mb-2"
              >
                Welcome to Ever Trust Builders
              </h3>

              <h1
                data-aos="fade-up"
                data-aos-delay="100"
                className="text-2xl sm:text-4xl md:text-5xl font-extrabold leading-snug md:leading-tight mb-4"
              >
                Best Commercial & Residential Construction Company in Saint Louis, Missouri
              </h1>
            </div>
          </div>
        </section>

        {/* Section 2 */}
        <section className="relative w-full py-16 bg-white text-gray-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-20 flex flex-col md:flex-row items-center gap-12">
            {/* Image */}
            <div className="w-full md:w-1/2">
              <img
                src="/home-header-img-1.jpg"
                alt="Why Choose EverTrust"
                className="w-full h-auto rounded-xl shadow-lg object-cover"
              />
            </div>

            {/* Text Content */}
            <div className="w-full md:w-1/2">
              <p
                data-aos="fade-up"
                data-aos-delay="200"
                className="text-sm sm:text-base md:text-lg mb-6"
              >
                EverTrust is the best commercial and residential construction company in Saint Louis, Missouri, and we have decades of experience working in the field. We offer construction services such as retaining walls, grading, deck construction, and many other construction services in St Louis. We work with residential customers and commercial customers and strive to provide excellent workmanship with pride and professionalism.
              </p>
              <p
                data-aos="fade-up"
                data-aos-delay="300"
                className="text-sm sm:text-base md:text-lg"
              >
                EverTrust, being one of the most reliable construction companies in Saint Louis MO, has seen over 100 successful projects on the premise of customer satisfaction, reliability, and quality built on a reputation. From the ground up to finish the build, we commit each project to on-time completion in budget and the best specifications—rendering us a high-end option for local construction companies closest to you.
              </p>
            </div>
          </div>
        </section>

        {/* Why Choose Section */}
        <section className="relative w-full py-16 bg-white text-gray-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-20 flex flex-col-reverse md:flex-row items-center gap-12">
            {/* Text Content */}
            <div className="w-full md:w-1/2">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8"
              data-aos="fade-up"
              data-aos-delay="100">
                Why Choose EverTrust?
              </h2>

              <div className="mb-6">
                <h3 className="text-lg sm:text-xl font-semibold mb-2"
                data-aos="fade-up"
                data-aos-delay="100">Proven Expertise</h3>
                <p className="text-sm sm:text-base md:text-lg text-gray-600"
                data-aos="fade-up"
                data-aos-delay="200">
                  Being one of the largest construction companies in St Louis, we have success and experience on our side. We've constructed everything from small residential buildings to large commercial buildings—establishing us as one of the most diversified St Louis construction contractors around.
                </p>
              </div>

              <div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2"
                data-aos="fade-up"
                data-aos-delay="100">Partnership-Focused Approach</h3>
                <p className="text-sm sm:text-base md:text-lg text-gray-600"
                data-aos="fade-up"
                data-aos-delay="300">
                  We don't simply construct buildings—we craft relationships. We take the time to work closely with our customers, staying ahead of them each step of the way. Most of our work is referral business and repeat, showing just how much faith we've gained throughout the years.
                </p>
              </div>
            </div>

            {/* Image */}
            <div className="w-full md:w-1/2">
              <img
                src="/home-header-img-2.jpg"
                alt="Why Choose EverTrust"
                className="w-full h-auto rounded-xl shadow-lg object-cover"
              />
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Header;
