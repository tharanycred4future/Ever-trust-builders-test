import { useEffect, useState } from "react";
import { FaFacebookF, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { Link } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 shadow-md ${
        scrolled ? "py-1 bg-[#A2A68B]" : "py-2 bg-[#c2b280]"
      }`}
    >
      <div className="flex items-center justify-between px-6 text-white transition-all duration-300 ">
        {/* Left Section - Logo */}
        <div className="flex items-center">
          <Link to='/'>
            <img
              src="/logo-n-1.png"
              alt="Ever Trust Builders Logo"
              className={`transition-all duration-300 ${
                scrolled ? "w-24" : "w-36"
              } h-auto`}
            />
          </Link>
        </div>

        {/* Toggle Button - Mobile Only */}
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <HiX size={28} /> : <HiMenu size={28} />}
          </button>
        </div>

        {/* Center Section - Nav Links (Desktop) */}
        <div className="hidden md:flex flex-wrap justify-center space-x-6 font-medium transition-all duration-300">
          <Link className="text-[#4D4725] hover:text-blue-400 text-lg" to='/'>Home</Link>
          <Link className="text-[#4D4725] hover:text-blue-400 text-lg" to='/about'>About</Link>
          <Link className="text-[#4D4725] hover:text-blue-400 text-lg" to='/services'>Services</Link>
          <Link className="text-[#4D4725] hover:text-blue-400 text-lg" to='design-gallery'>Design Gallery</Link>
          <Link className="text-[#4D4725] hover:text-blue-400 text-lg" to='/blogs'>Blogs</Link>
          <Link className="text-[#4D4725] hover:text-blue-400 text-lg" to='/contact'>Contact Us</Link>
        </div>

        {/* Right Section - Social Icons (Desktop) */}
        <div className="hidden md:flex space-x-4 text-white">
          <a href="#" className="hover:text-blue-500 text-[#4D4725] text-xl "><FaFacebookF size={20} /></a>
          <a href="#" className="hover:text-pink-400 text-[#4D4725] text-xl "><FaInstagram size={20} /></a>
          <a href="https://wa.me/16186164671" target="_blank" rel="noopener noreferrer" className="hover:text-green-400 text-[#4D4725] text-xl "><FaWhatsapp size={20} /></a>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden flex flex-col items-center bg-[#c2b280] text-white py-4 space-y-4 font-bold ">
          <Link className="text-[#4D4725] hover:text-blue-400 text-xl" onClick={() => setIsMenuOpen(false)} to='/'>Home</Link>
          <Link className="text-[#4D4725] hover:text-blue-400 text-xl" onClick={() => setIsMenuOpen(false)} to='/about'>About</Link>
          <Link  className="text-[#4D4725] hover:text-blue-400 text-xl" onClick={() => setIsMenuOpen(false)} to='/services'>Services</Link>
          <Link className="text-[#4D4725] hover:text-blue-400 text-xl" to='design-gallery'>Design Gallery</Link>
          <Link className="text-[#4D4725] hover:text-blue-400 text-xl" onClick={() => setIsMenuOpen(false)} to='/contact'>Contact Us</Link>

          <div className="flex space-x-4 pt-2">
            <a href="#" className="hover:text-blue-500 text-[#4D4725] "><FaFacebookF size={20} /></a>
            <a href="#" className="hover:text-pink-400 text-[#4D4725] "><FaInstagram size={20} /></a>
            <a href="#" className="hover:text-green-400 text-[#4D4725] "><FaWhatsapp size={20} /></a>
          </div>
        </div>
      )}
    </nav>
  );
}
