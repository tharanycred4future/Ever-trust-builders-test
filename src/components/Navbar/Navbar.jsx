import {
  FacebookIcon,
  TwitterIcon,
  InstagramIcon,
  LinkedinIcon,
} from "lucide-react";

export default function NavBar() {
  return (
    <nav
      className="flex flex-col md:flex-row items-center justify-between px-6 py-6 md:py-8 bg-cover bg-center shadow-md text-white space-y-6 md:space-y-0"
      style={{ backgroundImage: "url('/navbar-bg.jpg')" }}
    >
      {/* Top Section (Left side links on desktop) */}
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 items-center">
        <a href="#" className="text-gray-100 hover:text-blue-400 font-medium">
          Home
        </a>
        <a href="#" className="text-gray-100 hover:text-blue-400 font-medium">
          About
        </a>
        <a href="#" className="text-gray-100 hover:text-blue-400 font-medium">
          Services
        </a>
        <a href="#" className="text-gray-100 hover:text-blue-400 font-medium">
          Design Gallery
        </a>
        <a href="#" className="text-gray-100 hover:text-blue-400 font-medium">
          Contact Us
        </a>
      </div>

      {/* Center logo */}
      <div className="text-2xl font-bold text-white text-center">
        Ever Trust Builders
      </div>

      {/* Right side social icons */}
      <div className="flex space-x-4 justify-center md:justify-end text-white">
        <a href="#" className="hover:text-blue-500">
          <FacebookIcon size={20} />
        </a>
        <a href="#" className="hover:text-blue-300">
          <TwitterIcon size={20} />
        </a>
        <a href="#" className="hover:text-pink-400">
          <InstagramIcon size={20} />
        </a>
        <a href="#" className="hover:text-blue-600">
          <LinkedinIcon size={20} />
        </a>
      </div>
    </nav>
  );
}
