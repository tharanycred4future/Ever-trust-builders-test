export default function Footer() {
    return (
      <footer
        className="text-white py-10 px-6 bg-cover bg-center"
        style={{ backgroundImage: "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('/footer-bg.jpg')", }} // replace with actual image path
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 items-center">
          {/* Left Side - Contact Info */}
          <div className="space-y-3 text-sm">
            <h2 className="text-lg font-semibold mb-2">Contact Us</h2>
            <p>Ever Trust Builders</p>
            <p>123 Dream Avenue, Hyderabad, India</p>
            <p>Email: <a href="mailto:info@evertrust.com" className="underline">info@evertrust.com</a></p>
            <p>Phone: +91 98765 43210</p>
          </div>
  
          {/* Center - Logo */}
          <div className="flex justify-center">
            <div className="text-2xl font-bold text-white   px-4 py-2 rounded-full">
              Ever Trust Builders
            </div>
          </div>
  
          {/* Right Side - Useful Links */}
          <div className="text-sm space-y-2 text-right md:text-left ">
            <h2 className="text-lg font-semibold mb-2">Useful Links</h2>
            <p><a href="#" className="hover:underline">Home</a></p>
            <p><a href="#" className="hover:underline">Blogs</a></p>
            <p><a href="#" className="hover:underline">Terms & Conditions</a></p>
            <p><a href="#" className="hover:underline">Privacy Policy</a></p>
          </div>
        </div>
  
        {/* Bottom Line */}
        <div className="text-center text-sm text-white/80 mt-10">
          © {new Date().getFullYear()} Ever Trust Builders. All rights reserved.
        </div>
      </footer>
    );
  }
  