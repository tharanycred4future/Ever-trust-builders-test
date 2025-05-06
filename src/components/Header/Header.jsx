import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion } from 'framer-motion';
import { faHardHat, faHandshake, faCubes, faStar } from '@fortawesome/free-solid-svg-icons';
import SeasonalServices from '../SeasonalServices/SeasonalServices';
import LocationsInfo from '../LocationsInfo/LocationsInfo';
const Header = () => {
  return (
    <>
      <div className="pt-32 md:pt-40">
        {/* Hero Section */}
        <section className="relative w-full min-h-[90vh] text-white">
          <img
            src="/home-header-img-alt.jpeg"
            alt="about page bg image"
            className="absolute inset-0 w-full h-full object-cover rounded-b-2xl shadow-lg"
          />

          <div className="relative z-10 flex items-center justify-center px-4 sm:px-6 lg:px-8 py-24">
            <div className="rounded-xl px-6 sm:px-10 lg:px-20 py-10 max-w-5xl w-full text-center shadow-md">
              <h3 className="text-sm sm:text-base md:text-lg font-semibold mb-2">
                Welcome to Ever Trust Builders
              </h3>
              <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold leading-snug md:leading-tight mb-4">
                Best Commercial & Residential Construction Company in Saint Louis, Missouri
              </h1>
            </div>
          </div>
        </section>

        {/* Quotation Block */}
        <div className="max-w-5xl mx-auto px-6 sm:px-10 lg:px-20 py-12">
          <div className="relative bg-white rounded-xl shadow-lg p-8 sm:p-12 text-gray-800 text-lg md:text-xl leading-relaxed font-medium">
            <span className="absolute top-0 left-4 text-6xl sm:text-7xl text-yellow-400 font-serif select-none">
              &ldquo;
            </span>
            <span className="absolute bottom-0 right-4 text-6xl sm:text-7xl text-yellow-400 font-serif select-none">
              &rdquo;
            </span>
            <p className="relative z-10">
              EverTrust is the best commercial and residential construction company in Saint Louis,
              Missouri, and we have decades of experience working in the field. We offer construction
              services such as retaining walls, grading, deck construction, and many other construction
              services in St Louis. From the ground up to finish the build, we commit each project to
              on-time completion on budget and the best specifications, rendering us a high-end option
              for local construction companies closest to you. We provide excellent workmanship with
              pride and professionalism.
            </p>
          </div>
        </div>

        {/* About Section */}
        <div className="mx-auto px-6 sm:px-10 lg:px-20 py-16 text-center flex flex-col items-center justify-center  text-lg bg-[#F4F1E6] w-full h-[35vw]">
          <p className="text-sm font-semibold uppercase tracking-wider text-gray-700 mb-4">
            About EverTrust
          </p>
          <div className='max-w-5xl'>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-justify text-gray-900 leading-tight mb-6">
              Residential & Commercial Construction Company in St Louis, Missouri
            </h2>
            <p className="text-base sm:text-lg text-justify text-gray-800 mb-4">
              With over 32 years of experience and over 100 projects successfully delivered,
              EverTrust is a prominent name among construction companies in St Louis.
              We are not just famous for creating impeccable buildings, but also for creating lasting relationships with our clients.
            </p>
            <p className="text-base sm:text-lg text-justify text-gray-800">
              As a full-service construction company in Missouri, we believe that every project is unique.
              We engage hand-in-hand with our customers, from the consultation stage to project delivery,
              to achieve their dream, without sacrificing timelines, budget, and high quality.
            </p>
            <p className="text-sm sm:text-base text-justify md:text-lg mt-2">
              EverTrust, being one of the most reliable construction companies in Saint Louis MO,
              has seen over 100 successful projects on the premise of customer satisfaction,
              reliability, and quality built on a reputation. From the ground up to finish the build,
              we commit each project to on-time completion in budget and the best
              specifications—rendering us a high-end option for local construction companies closest to you.
            </p>
          </div>
        </div>



        {/* Why Choose EverTrust Section (Grid Layout with Icons) */}
        <section className="py-16 bg-white text-gray-800">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">
              Why Choose EverTrust?
            </h2>

            <div className="grid md:grid-cols-2 gap-10">
              {/* Animation Variants */}
              {[{
                icon: faHardHat,
                color: "text-yellow-600",
                title: "Proven Expertise",
                description: `Being one of the largest construction companies in St Louis, we have success and experience on our side. We've constructed everything from small residential buildings to large commercial buildings, establishing us as one of the most diversified St Louis construction contractors around.
`,
              }, {
                icon: faHandshake,
                color: "text-blue-600",
                title: "Partnership-Focused Approach",
                description: `We don't simply construct buildings—we craft relationships. We take the time to work closely with our customers, staying ahead of them each step of the way. Most of our work is referral business and repeat, showing just how much faith we've gained throughout the years.
`,
              }, {
                icon: faCubes,
                color: "text-green-600",
                title: "Customised Construction Solutions",
                description: `Each project is unique. That's why we provide multiple types of construction solutions such as design/build, general contracting, and pre-engineered systems. Whether your vision is a home in your dreams or expanding your business office, our solutions are tailored to your exact requirements.`,
              }, {
                icon: faStar,
                color: "text-purple-600",
                title: "Quality & Craftsmanship",
                description: `As one of the most trusted construction companies near you, we wouldn't settle for anything less than the best. We maintain the highest level of work standards, ensuring that every project we undertake reaches and exceeds industry standards.

`,
              }].map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-4 bg-[#fff8e7] p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true, amount: 0.3 }}
                >
                  <FontAwesomeIcon icon={item.icon} className={`text-3xl ${item.color} mt-1`} />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-gray-700">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        <div>
          <SeasonalServices />
        </div>
        <div>
          <LocationsInfo />
        </div>
      </div>
    </>
  );
};

export default Header;
