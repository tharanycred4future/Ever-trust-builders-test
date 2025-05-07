import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';







export default function ConstructionServiceArea() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12 space-y-10">
      {/* Title & Intro */}
      <div className="text-center bg-[#fffacd] shadow-lg rounded-lg p-6 mb-10">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Looking for Construction Companies Near You?
        </h2>
        <p className="text-gray-700 max-w-2xl mx-auto">
          Stop searching—EverTrust is your locally trusted residential and commercial construction expert. We're honoured to be one of the leading St. Louis construction companies, providing reliable and experienced services for whatever you wish to construct.
        </p>
        <p className="text-gray-700 max-w-2xl mx-auto mt-4">
          Do you require custom home builders in St. Louis, MO, construction services company experts, or a construction company near you that knows your objectives? EverTrust is the company you can trust.
        </p>
      </div>

      {/* Areas We Serve */}
      <div>
        <h3 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
          📍 Areas We Serve
        </h3>
        <p className="text-gray-700 mb-4">
          EverTrust is pleased to offer the best construction services in St. Louis and the suburbs. Our service areas include:
        </p>
        <div className="flex flex-wrap gap-3">
          {[
            "St. Louis",
            "Chesterfield",
            "Clayton",
            "Kirkwood",
            "O'Fallon",
            "St. Charles",
            "And the surrounding communities",
          ].map((location, idx) => (
            <span
              key={idx}
              className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium"
            >
              {location}
            </span>
          ))}
        </div>
        <p className="text-gray-700 mt-4">
          No matter where you are, right in the suburbs or the heart of the city, EverTrust will strive to offer you the best construction solutions as per your requirements.
        </p>
      </div>

      {/* Map placeholder */}
      <div className="w-full h-64 rounded-xl overflow-hidden">
        <MapContainer center={[38.627, -90.1994]} zoom={10} className="h-full w-full z-0">
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          />
          {[
            { name: 'St. Louis', coords: [38.627, -90.1994] },
            { name: 'Chesterfield', coords: [38.6631, -90.5771] },
            { name: 'Clayton', coords: [38.6426, -90.3237] },
            { name: 'Kirkwood', coords: [38.5834, -90.4068] },
            { name: 'O’Fallon', coords: [38.8106, -90.6998] },
            { name: 'St. Charles', coords: [38.7881, -90.4974] },
          ].map((loc, idx) => (
            <Marker key={idx} position={loc.coords}>
              <Popup>{loc.name}</Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>

      <section className="w-full bg-white px-6 sm:px-10 lg:px-20 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Contact Us for Your Project
          </h2>
          <p className="text-base sm:text-lg text-gray-700 mb-10">
            If you are located in one of the aforementioned regions and are in the process of initiating your construction project, it's simple: simply complete the form below to contact us!
          </p>
        </div>


      </section>




      {/* Contact Form */}
      <form className="space-y-4 max-w-xl">
        <div>
          <label className="block text-gray-700 mb-1">Name:</label>
          <input
            type="text"
            placeholder="Your Name"
            className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-gray-700 mb-1">Email:</label>
          <input
            type="email"
            placeholder="Your Email"
            className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-gray-700 mb-1">Phone Number:</label>
          <input
            type="tel"
            placeholder="Your Phone Number"
            className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-gray-700 mb-1">Project Details:</label>
          <textarea
            placeholder="Tell us about your project..."
            rows={4}
            className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
        </div>

        <div>
          <label className="block text-gray-700 mb-1">Service Area:</label>
          <select
            className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            defaultValue=""
          >
            <option value="" disabled>Select City</option>
            <option value="St. Louis">St. Louis</option>
            <option value="Chesterfield">Chesterfield</option>
            <option value="Clayton">Clayton</option>
            <option value="Kirkwood">Kirkwood</option>
            <option value="O’Fallon">O’Fallon</option>
            <option value="St. Charles">St. Charles</option>
            <option value="Other">Other (please specify)</option>
          </select>
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded-md font-semibold hover:bg-blue-700 transition"
        >
          Submit
        </button>
      </form>

    </div>
  );
}
