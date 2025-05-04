import React, { useState } from "react";
import { motion } from 'framer-motion';
import "./recentConstructionWorks.css"; // Import your CSS file for styles
const constructionWorks = [
    {
      id: 1,
      beforeImage: 'before-1.webp',
      afterImage: 'after-1.webp',
      title: '',
    },
    {
      id: 2,
      beforeImage: 'before-2.webp',
      afterImage: 'after-2.webp',
      title: '',
    },
    {
      id: 3,
      beforeImage: 'before-3.webp',
      afterImage: ' after-3.webp',
      title: '',
    },
    // Add more works here
  ];



const RecentConstructionWorks = () => {

  return (
    <div className="py-16 bg-gray-100 pt-50 px-10">
      <h2 className="text-3xl font-bold text-center mb-12">Recent Construction Works</h2>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-8">
          {constructionWorks.map((work) => (
            <div key={work.id} className="flip-card">
              <motion.div
                className="flip-card-inner"
                whileHover={{ rotateY: 180 }}
                transition={{ duration: 0.8 }}
              >
                {/* Front */}
                <div className="flip-card-front">
                  <img
                    src={work.beforeImage}
                    alt="Before"
                    className="w-full h-full object-cover rounded-lg"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-center py-2">
                    Before{work.title}
                  </div>
                </div>

                {/* Back */}
                <div className="flip-card-back">
                  <img
                    src={work.afterImage}
                    alt="After"
                    className="w-full h-full object-cover rounded-lg"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-blue-700 bg-opacity-70 text-white text-center py-2">
                    After {work.title}
                  </div>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecentConstructionWorks;
