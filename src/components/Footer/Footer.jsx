export default function Footer() {
  return (
    <footer
      className="text-white py-10 px-6 bg-cover bg-center"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('/footer-bg-alt.jpg')",
      }}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {/* Left Side - Contact Info */}
        <div className="space-y-3 text-sm">
          <h2 className="text-2xl md:text-3xl font-semibold mb-2">Contact Us</h2>
          <p className="mt-6">Ever Trust Builders</p>
          <p className="mt-2">123 Dream Avenue, Hyderabad, India</p>
          <p className="mt-2">
            Email:{" "}
            <a href="mailto:info@evertrust.com" className="underline">
              info@evertrust.com
            </a>
          </p>
          <p className="mt-2">Phone: +91 98765 43210</p>
        </div>

        {/* Center - Logo */}
        <div className="flex items-start justify-center md:justify-center">
          <div className="text-2xl font-bold px-4 py-2 rounded-full text-center md:text-left">
            Ever Trust Builders
          </div>
        </div>

        {/* Right Side - Useful Links */}
        <div className="text-sm space-y-2 sm:pl-4 md:pl-35">
          <h2 className="text-2xl md:text-3xl font-semibold mb-2">Useful Links</h2>
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
            <a href="#" className="hover:underline">
              Terms & Conditions
            </a>
          </p>
          <p className="mt-2">
            <a href="#" className="hover:underline">
              Privacy Policy
            </a>
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
