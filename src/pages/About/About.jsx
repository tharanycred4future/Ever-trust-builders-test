import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <>
      <section className="relative w-full h-[80vh] md:h-[100vh] min-h-[300px] sm:min-h-[400px] bg-gray-50 text-gray-800 mt-30 pt-10 md:pt-20">
        {/* Background Image */}
        <div
    className="absolute inset-0 w-full h-full rounded-b-2xl shadow-lg"
    style={{
      backgroundImage: "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.3)), url('/img_2.jpeg')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
    }}
  ></div>

        {/* Overlay Content */}
        <div className="absolute inset-0 flex items-center justify-center text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5 }}
            className="w-3/4 p-8 text-white rounded-2xl"
          >
            <motion.h2
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1.5 }}
              className="text-3xl md:text-5xl pt-20 mb-4 sm:pt-8 font-bold drop-shadow-md"
            >
              About Us
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1.5 }}
              className="text-md text-center md:text-xl mb-4 drop-shadow-md"
            >
              Residential & Commercial Construction Company in St Louis, Missouri
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 1.5 }}
              className="text-md text-center md:text-xl mb-4 drop-shadow-md"
            >
              With over 32 years of experience and over 100 projects successfully delivered, EverTrust is a prominent name among construction companies in St Louis. We are not just famous for creating impeccable buildings, but also for creating lasting relationships with our clients.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
          className="flex flex-col items-center justify-center py-20 w-[80%] px-10 md:px-20 mx-auto"
        >
          <p className="text-md text-center md:text-xl mb-4 drop-shadow-md">
            As a full-service construction company in Missouri, we believe that every project is unique. We engage hand-in-hand with our customers—from the consultation stage to project delivery—to achieve their dream, without sacrificing timelines, budget, and high quality.
          </p>
          <p className="text-md text-center md:text-xl mb-4 drop-shadow-md">
            At <span className="font-semibold">EverTrustBuilders</span>, we take our work seriously and our number one priority is your satisfaction.
            Honesty, hard work, excellence, and quality are the virtues we live by and we strive to uphold each of them on every job.
            We specialize in quality services and can improve the curb appeal of your home and property while helping to increase safety
            and eliminate small problems before they become big, expensive issues.
          </p>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
        className="text-center flex flex-col items-center justify-center py-20"
      >
        <h3 className="text-2xl font-semibold text-[#1dacd6] mb-4">
          Some of the types of work we do:
        </h3>

        <div className="flex items-center text-left justify-center">
          <ul className="list-disc list-inside space-y-2 md:text-lg">
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
      </motion.div>
    </>
  );
};

export default About;
