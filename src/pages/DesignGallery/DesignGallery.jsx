import React, { useState } from 'react';
import img_1 from '/img_1.jpeg';
import img_2 from '/img_2.jpeg';
import img_3 from '/img_3.jpeg';
import img_4 from '/img_4.jpeg';
import img_5 from '/img_5.jpeg';


const DesignGallery = () => {
  const images = [
    { src: img_1, alt: 'img 1', title: '' },
    { src: img_2, alt: 'img 2', title: '' },
    { src: img_3, alt: 'img 3', title: '' },
    { src: img_4, alt: 'img 4', title: '' },
    { src: img_5, alt: 'img 5', title: '' },
    
  ];

  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  const openModal = (index) => {
    setSelectedImageIndex(index);
  };

  const closeModal = () => {
    setSelectedImageIndex(null);
  };

  const nextImage = () => {
    setSelectedImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setSelectedImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className='container mx-auto p-50'>
      <h1 className='text-3xl text-center font-bold mt-10'>Design Gallery</h1>

      {/* Menu Section */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 mt-10'>
        
        {images.slice(0, 5).map((image, index) => (
          <div key={index} className="text-center">
            <h3 className="text-xl font-semibold mt-4">{image.title}</h3>
            <img
              src={image.src}
              alt={image.alt}
              className="w-[600px] h-[300px] object-cover rounded-lg mt-2 cursor-pointer"
              onClick={() => openModal(index)}
            />
          </div>
        ))}
      </div>

     

      {/* Modal to show the clicked image */}
      {selectedImageIndex !== null && (
  <div
    className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50"
    onClick={closeModal}
  >
    {/* Arrows and image wrapper */}
    <div
      className="relative w-full h-full flex justify-center items-center"
      onClick={(e) => e.stopPropagation()} // Prevent modal close on content click
    >
      {/* Left Arrow at screen edge */}
      <button
        onClick={prevImage}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 text-white text-5xl font-bold z-10 bg-black bg-opacity-30 hover:bg-opacity-60 px-4 py-2"
      >
        &lt;
      </button>

      {/* Displayed Image */}
      <img
        src={images[selectedImageIndex].src}
        alt={images[selectedImageIndex].alt}
        className="max-h-[80vh] w-auto object-contain rounded-lg shadow-xl"
      />

      {/* Right Arrow at screen edge */}
      <button
        onClick={nextImage}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 text-white text-5xl font-bold z-10 bg-black bg-opacity-30 hover:bg-opacity-60 px-4 py-2"
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

