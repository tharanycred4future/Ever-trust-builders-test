import { FaFacebookF, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { Link } from "react-router-dom";
export default function NavBar() {
  return (
    <nav
      className="flex flex-col md:flex-row items-center justify-between px-6  md:py-2 bg-cover bg-center shadow-md text-white space-y-6 md:space-y-0"
      style={{ backgroundImage: "url('/navbar-bg.jpg')" }}
    >
      {/* Top Section (Left side links on desktop) */}
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 items-center ">
       <Link className="text-gray-100 hover:text-blue-400 font-medium" to='/'>
          Home
        </Link> 
       <Link className="text-gray-100 hover:text-blue-400 font-medium" to='/about'>
          About
        </Link>
        <Link className="text-gray-100 hover:text-blue-400 font-medium" to='/services'>
          Services
        </Link>
        <a href="#" className="text-gray-100 hover:text-blue-400 font-medium">
          Design Gallery
        </a>
        <Link className="text-gray-100 hover:text-blue-400 font-medium" to='/contact'>
          Contact Us
       </Link>
      </div>

      {/* Center logo */}
      <div className="text-2xl font-bold text-white text-center">
      <img src="/logo.png" alt="Ever Trust Builders Logo" className="w-30 h-auto" />
      </div>

      {/* Right side social icons */}
      <div className="flex space-x-4 justify-center md:justify-end text-white ">
  <a href="#" className="hover:text-blue-500">
    <FaFacebookF size={20} />
  </a>

  <a href="#" className="hover:text-pink-400">
    <FaInstagram size={20} />
  </a>

  <a href="#" className="hover:text-green-400">
    <FaWhatsapp size={20} />
  </a>
</div>
    </nav>
  );
}
