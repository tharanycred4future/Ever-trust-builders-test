import {
    FacebookIcon,
    TwitterIcon,
    InstagramIcon,
    LinkedinIcon,
  } from "lucide-react";

export default function NavBar() {
  return (
    <nav  className="flex h-[150px] items-center justify-between px-6 py-8 bg-cover bg-center shadow-md text-white"
   
        style={{ backgroundImage: " url('/navbar-bg.jpg')" }} // replace with actual image path
    >
  
  
      {/* Left side links */}
      <div className="flex space-x-6">
        <a href="#" className="text-gray-900 hover:text-blue-500 font-medium">
          Home
        </a>
        <a href="#" className="text-gray-900 hover:text-blue-500 font-medium">
          About
        </a>
        <a href="#" className="text-gray-900 hover:text-blue-500 font-medium">
          Services
        </a>
        <a href="#" className="text-gray-900 hover:text-blue-500 font-medium">
          Design Gallery
        </a>
        <a href="#" className="text-gray-900 hover:text-blue-500 font-medium">
          Contact Us
        </a>
      </div>

      {/* Center logo */}
      <div className="text-2xl font-bold text-white">Ever Trust Builders</div>

      {/* Right side social icons */}
      <div className="flex space-x-4 text-gray-900">
        <a href="#" className="hover:text-blue-600">
          <FacebookIcon size={20} />
        </a>
        <a href="#" className="hover:text-blue-400">
          <TwitterIcon  size={20} />
        </a>
        <a href="#" className="hover:text-pink-500">
          <InstagramIcon size={20} />
        </a>
        <a href="#" className="hover:text-blue-700">
          <LinkedinIcon size={20} />
        </a>
      </div>
    </nav>
  );
}
