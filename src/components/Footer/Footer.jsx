import {Link} from "react-router-dom";



export default function Footer() {
  return (
    <footer
      className="text-white py-10 px-6 bg-cover bg-center"
      style={{
        backgroundImage:
          " url('/footer-bg-img.jpg')",
      }}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {/* Left Side - Contact Info */}
        <div className="space-y-3 text-sm">
          <h2 className="text-2xl md:text-3xl font-semibold mb-2 hover:text-[#0093af] cursor-pointer">Contact Us</h2>
          <p className="mt-6">Ever Trust Builders</p>
          <p className="mt-2">Chesterfield,Missouri</p>
          <p className="mt-2">
            Email:{" "}
            <a href="mailto:info@evertrust.com" className="underline">
            contactus@etbuilders.com
            </a>
          </p>
          <p className="mt-2">Phone: +1 618-616-4671</p>
        </div>

        {/* Center - Logo */}
        <div className="flex flex-col items-center justify-start md:items-center md:justify-center ">
          <h2 className="text-2xl font-bold hover:text-[#0093af] cursor-pointer">Ever Trust Builders</h2>
          <img src="/logo1.png" alt="Ever Trust Builders Logo" className="w-50 h-auto" />
          </div>

        {/* Right Side - Useful Links */}
        <div className="text-sm space-y-2 sm:pl-4 md:pl-35">
          <h2 className="text-2xl md:text-3xl font-semibold mb-2 hover:text-[#0093af] cursor-pointer">Useful Links</h2>
          <p className="mt-6">
            <a href="#" className="hover:underline">
              Home
            </a>
          </p>
          <p className="mt-2">
            <a href="#" className="hover:underline">
              Blogs
            </a>
          </p>
          <p className="mt-2">
            
            <Link className="hover:underline" to='/terms-and-conditions'>
              Terms & Conditions
            </Link>
          </p>
          <p className="mt-2">
            <Link className="hover:underline" to='/privacy-policy'>
              Privacy Policy
            </Link>
          </p>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="text-center text-sm text-white/80 mt-10">
        © {new Date().getFullYear()} Ever Trust Builders. All rights reserved.
      </div>
    </footer>
  );
}
