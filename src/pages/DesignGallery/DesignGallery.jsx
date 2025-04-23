import React, { useState } from 'react';
import img_1 from '/img_1.jpeg';
import img_2 from '/img_2.jpeg';
import img_3 from '/img_3.jpeg';
import img_4 from '/img_4.jpeg';
import img_5 from '/img_5.jpeg';
import img_6 from '/contact-header-img.jpg';
import img_7 from '/header-img.jpg';
import img_8 from '/footer-bg.jpg';
import img_9 from '/footer-bg-img.jpg';
import img_10 from '/footer-bg-alt.jpg';

const DesignGallery = () => {
  const images = [
    { src: img_1, alt: 'img 1', title: '' },
    { src: img_2, alt: 'img 2', title: '' },
    { src: img_3, alt: 'img 3', title: '' },
    { src: img_4, alt: 'img 4', title: '' },
    { src: img_5, alt: 'img 5', title: '' },
    { src: img_6, alt: 'img 6', title: '' },
    { src: img_7, alt: 'img 7', title: '' },
    { src: img_8, alt: 'img 8', title: '' },
    { src: img_9, alt: 'img 9', title: '' },
    { src: img_10, alt: 'img 10', title: '' },
  ];

  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  const openModal = (index) => setSelectedImageIndex(index);
  const closeModal = () => setSelectedImageIndex(null);
  const nextImage = () => setSelectedImageIndex((prev) => (prev + 1) % images.length);
  const prevImage = () => setSelectedImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 mt-40 ">
      <h1 className="text-3xl text-center font-bold mb-10">Design Gallery</h1>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {images.map((image, index) => (
          <div key={index} className="text-center">
            <h3 className="text-lg font-semibold">{image.title}</h3>
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-60 sm:h-64 md:h-72 lg:h-80 object-cover rounded-lg shadow-md cursor-pointer transition-transform hover:scale-105"
              onClick={() => openModal(index)}
            />
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedImageIndex !== null && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50 px-4"
          onClick={closeModal}
        >
          <div
            className="relative w-full h-full flex justify-center items-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Left Arrow */}
            <button
              onClick={prevImage}
              className="absolute left-2 sm:left-6 top-1/2 transform -translate-y-1/2 text-white text-3xl sm:text-5xl font-bold z-10 bg-black bg-opacity-30 hover:bg-opacity-60 p-2 sm:p-4 rounded-full"
            >
              &lt;
            </button>

            {/* Image */}
            <img
              src={images[selectedImageIndex].src}
              alt={images[selectedImageIndex].alt}
              className="max-h-[80vh] w-auto max-w-full object-contain rounded-lg shadow-xl"
            />

            {/* Right Arrow */}
            <button
              onClick={nextImage}
              className="absolute right-2 sm:right-6 top-1/2 transform -translate-y-1/2 text-white text-3xl sm:text-5xl font-bold z-10 bg-black bg-opacity-30 hover:bg-opacity-60 p-2 sm:p-4 rounded-full"
            >
              &gt;
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DesignGallery;
