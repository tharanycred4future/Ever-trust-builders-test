import React from 'react';
import { Link } from 'react-router-dom';

const Blogs = () => {
  const blogData = [
    {
      title: ' How to Select the Right Building Materials for Your Project',
      description:'Choosing the right building materials is the most important thing you...',
      image: '/blog-one-img.jpg',
      link: '/how-to-select-the-right-building-materials-for-your-project'
    },
    {
      title: 'Understanding the Construction Timeline: What to Expect and When',
      description:'Initiating a construction project—be it your dream house or the launch of a new commercial venture—is ...',
      image: '/blog-two-img.png',
      link: '/understanding-the-construction-timeline-what-to-expect-and-when'
    },
    
    // You can add more blogs here
  ];

  return (
    <div className="bg-[#add8e6] min-h-screen py-20 px-4 sm:px-6 lg:px-8 pt-50">
      <h1 className="text-3xl sm:text-4xl font-bold text-center mb-12">Blogs</h1>

      <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6 max-w-7xl mx-auto">
        {blogData.map((blog, index) => (
          <Link
            to={blog.link}
            key={index}
            className="block break-inside-avoid bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden"
          >
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-auto object-cover rounded-t-2xl"
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold text-gray-800">{blog.title}</h2>
              <p className='text-md '>{blog.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
