import React from 'react';

const Header = () => {
  return (
    <div className='flex items-center justify-center'>

    
    <div className="relative  bg-cover bg-center h-[50vw] w-[100%] rounded-lg"
     style={{backgroundImage:"linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)),url('/contact-header-img.jpg')"}}
    
    >
      <h3 
      data-aos="fade-up"
      className='absolute  font-semibold text-xl text-[#bcd4e6] left-[200px] top-[100px]'>Welcome to Ever Trust Builders</h3>  
      <h1 
       data-aos="fade-up"
      data-aos-delay="100"
      className='absolute  font-extrabold text-5xl text-[#1dacd6] left-[200px] top-[150px] w-[50%]'>Leading Construction Company in St Louis, Missouri</h1>
      <p 
      data-aos="fade-up"
      data-aos-delay="200"
       className='absolute  text-[#e7feff] text-lg w-[50%] left-[200px] top-[280px]'>Ever Trust Builders is the most successful construction company in St Louis, Missouri, enjoying a solid reputation as one of the trusted commercial & residential construction companies. We take pride in an excellent history of delivering over 100 projects with reliable and high-quality craftsmanship year-round. Our commitment to excellence is the reason behind our full range of services from design to construction so that every project will be done on time, within budget, and of the highest quality.</p>
    </div>
    </div>
  );
};

export default Header;
