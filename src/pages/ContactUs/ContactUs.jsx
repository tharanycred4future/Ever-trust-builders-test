import React from 'react';
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaFacebookF,
  FaInstagram,
  FaWhatsapp
} from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';


const ContactUs = () => {
  return (
    <>
    <div className='flex items-center justify-center'>
    <div
  className="relative bg-cover bg-center h-[25vw] w-full rounded-lg"
  style={{
    backgroundImage: " url('/home-header.jpg')"
  }}
></div>
    </div>


    <section className="bg-white py-16 px-4 md:px-16 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2">Get in Touch</h2>
          <p>
            Please reach out to us at <strong>Ever Trust Builders</strong> – we're here to help you!
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 justify-center items-stretch max-w-7xl mx-auto">
        {/* Contact Info Card - LEFT */}
        <div className="bg-white shadow-xl p-8 rounded-lg w-full lg:w-1/2">
          <h3 className="text-2xl font-semibold mb-6">Contact Info</h3>
          <div className="space-y-5">
            <div className="flex items-center gap-4">
              <span className="text-[#0093af] text-xl"><FaPhone /></span>
              <div>
                <p className="font-semibold text-xl">Call Us</p>
                <p>+1 618-616-4671</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-[#0093af] text-xl"><FaEnvelope /></span>
              <div>
                <p className="font-semibold text-xl">Our Email</p>
                <p>contactus@etbuilders.com</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-[#0093af] text-xl"><FaMapMarkerAlt /></span>
              <div>
                <p className="font-semibold text-xl">Our Location</p>
                <p>Chesterfield,Missouri</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-[#0093af] text-xl"><FaClock /></span>
              <div>
                <p className="font-semibold text-xl">Working Hours</p>
                <p>Mon–Fri: 9 AM–6 PM<br />Sat: 10 AM–5 PM</p>
              </div>
            </div>
          </div>

          <div className="mt-14 ml-8">
            <p className="font-semibold mb-3 text-xl">Follow Us</p>
            <div className="flex gap-3 ">
            <a href="#"><FaWhatsapp className="text-black bg-white rounded-full p-1 text-3xl hover:text-[#0093af] " /></a>
              <a href="#"><FaFacebookF className="text-black bg-white rounded-full p-1 text-3xl hover:text-[#0093af]" /></a>
              <a href="#"><FaInstagram className="text-black bg-white rounded-full p-1 text-3xl hover:text-[#0093af]" /></a>
              
            </div>
          </div>
        </div>

        {/* Send Us A Message - RIGHT */}
        <div className="bg-white shadow-xl p-8 rounded-lg w-full lg:w-1/2 h-full">
          <h3 className="text-2xl font-semibold mb-6">Send Us A Message</h3>
          <form className="space-y-4">
            <div className="flex gap-4">
              <input type="text" placeholder="First Name" className="w-1/2 p-2 border rounded" />
              <input type="text" placeholder="Last Name" className="w-1/2 p-2 border rounded" />
            </div>
            <input type="email" placeholder="Email" className="w-full p-2 border rounded" />
            <input type="text" placeholder="Phone " className="w-full p-2 border rounded" />
            <input type="text" placeholder="Subject" className="w-full p-2 border rounded" />
            <textarea rows="5" placeholder="Message" className="w-full p-2 border rounded" />
            <button type="submit" className="bg-[#0093af] text-white px-6 py-2 rounded hover:bg-[#0072bb] font-semibold cursor-pointer">
              Send Message
            </button>
          </form>
        </div>
      </div>

       {/* Google Map */}
<div className="mt-10">
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3092.947356146799!2d-90.57134222401891!3d38.6631088718054!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87df2f904fe6fdd7%3A0x9c1e202b07c0e2e4!2sChesterfield%2C%20MO!5e0!3m2!1sen!2sus!4v1715790227155!5m2!1sen!2sus"
    width="100%"
    height="300"
    allowFullScreen=""
    loading="lazy"
    className="w-full rounded shadow"
  ></iframe>
</div>

      </div>
    </section>
    </>
  );
};

export default ContactUs;
