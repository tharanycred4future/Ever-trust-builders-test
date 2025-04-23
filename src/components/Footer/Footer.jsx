import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="text-white py-10 px-6 bg-[#c2b280]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {/* Column 1 - Logo & Brand Name */}
        <div className="flex flex-col items-center md:items-start space-y-3">
          <img src="/logo1.png" alt="Ever Trust Builders Logo" className="w-40 h-auto" />
          <h2 className="text-2xl font-bold text-[#4D4725] hover:text-[#6a2226] cursor-pointer">
            Ever Trust Builders
          </h2>
        </div>

        {/* Column 2 - Useful Links */}
        <div className="text-sm text-[#4D4725]  space-y-2">
          <h2 className="text-2xl md:text-3xl  text-[#4D4725] font-semibold mb-2 hover:text-[#6a2226] cursor-pointer">Useful Links</h2>
          <p className="mt-6 text-[#4D4725] ">
            <a href="#" className="hover:underline">Home</a>
          </p>
          <p className="mt-2 text-[#4D4725] ">
            <a href="#" className="hover:underline">Blogs</a>
          </p>
          <p className="mt-2 text-[#4D4725] ">
            <Link className="hover:underline" to='/terms-and-conditions'>Terms & Conditions</Link>
          </p>
          <p className="mt-2 text-[#4D4725] ">
            <Link className="hover:underline" to='/privacy-policy'>Privacy Policy</Link>
          </p>
        </div>

        {/* Column 3 - Contact Info */}
        <div className="space-y-3 text-[#4D4725] text-sm">
          <h2 className="text-2xl text-[#4D4725] md:text-3xl font-semibold mb-2 hover:text-[#6a2226] cursor-pointer">Contact Us</h2>
          <p className="mt-6 text-[#4D4725]">Ever Trust Builders</p>
          <p className="mt-2 text-[#4D4725]">Chesterfield, Missouri</p>
          <p className="mt-2 text-[#4D4725]">
            Email: <a href="mailto:contactus@etbuilders.com" className="underline">contactus@etbuilders.com</a>
          </p>
          <p className="mt-2 text-[#4D4725]">Phone: +1 618-616-4671</p>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="text-center text-sm text-[#4D4725] mt-10">
        © {new Date().getFullYear()} Ever Trust Builders. All rights reserved.
      </div>
    </footer>
  );
}
