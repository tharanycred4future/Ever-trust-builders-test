import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="text-white py-10 px-6 bg-[#c2b280]">
      <div className="max-w-8xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20">
        
        {/* Column 1 - Logo & Brand */}
        <div className="flex flex-col items-center md:items-start  ">
          <img src="/logo1.png" alt="Ever Trust Builders Logo" className="w-40 h-auto" />
          <h2 className="text-2xl font-bold text-[#4D4725] hover:text-[#6a2226] cursor-pointer">
            {/* Add brand name here if needed */}
          </h2>
        </div>

        {/* Column 2 - Useful Links */}
        <div className="text-center md:text-left text-sm text-[#4D4725] space-y-2">
          <h2 className="text-2xl md:text-3xl font-semibold mb-2 hover:text-[#6a2226] cursor-pointer">
            Useful Links
          </h2>
          <p className="mt-6"><a href="#" className="hover:underline">Home</a></p>
          <p className="mt-2"><a href="#" className="hover:underline">Blogs</a></p>
          <p className="mt-2">
            <Link to='/terms-and-conditions' className="hover:underline">Terms & Conditions</Link>
          </p>
          <p className="mt-2">
            <Link to='/privacy-policy' className="hover:underline">Privacy Policy</Link>
          </p>
        </div>

        {/* Column 3 - Contact Info */}
        <div className="text-center md:text-left space-y-2 text-sm text-[#4D4725]">
          <h2 className="text-2xl md:text-3xl font-semibold mb-2 hover:text-[#6a2226] cursor-pointer">
            Contact Us
          </h2>
          <p className="mt-6">Ever Trust Builders</p>
          <p className="mt-2">Chesterfield, Missouri</p>
          <p className="mt-2">
            Email: <a href="mailto:contactus@etbuilders.com" className="underline">contactus@etbuilders.com</a>
          </p>
          <p className="mt-2">Phone: +1 618-616-4671</p>
        </div>
      </div>

      {/* Footer Bottom Line */}
      <div className="text-center text-sm text-[#4D4725] mt-10">
        © {new Date().getFullYear()} Ever Trust Builders. All rights reserved.
      </div>
    </footer>
  );
}
