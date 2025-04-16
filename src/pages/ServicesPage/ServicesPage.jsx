import React from 'react'

const summerServices = [
    {
      title: "Construction of Retaining Walls",
      description:
        "Retaining walls are the main components that manage soil erosion and landscape structuring. Summer season is our season of building and repairing functional and aesthetic retaining walls that beautify your outdoor spaces. Our walls are made to stand the soil pressure as well as pressure coming from water while enhancing design for your landscape.",
      image: "/summer-img-1.webp", 
    },
    {
      title: "Land Clearing",
      description:
        "Whether you have a new construction project lined up or just looking to clear overgrown lands, our summer land clearing services ensure that your property is cleared of unwanted vegetation, debris, and obstacles. We take care of everything from small brush sizes to large tree sizes using the most sophisticated equipment and leave your land ready for development or landscaping.",
      image: "/summer-img-2.webp",
    },
    {
      title: "Roofing Work",
      description:
        "For an issue to come in with a roof, summer is the best season to be addressed. Our roofing work includes installation, repairs, and maintenance to keep your home or business well covered over the elements. We work with all sorts of roofing materials and long-lasting solutions to make sure your property stays safe and secure.",
      image: "/summer-img-3.webp",
    },
    {
        title:"Grading Services",
        description:"It provides ample time to grade your land in summer and prepare it for construction, landscaping, and the management of drainage. Our grading services prevent erosion, improve water flow, and can create a stable foundation for any outdoor project, ensuring that your property always looks its best.",
        image:"/summer-img-4.webp"
    },
    {
       title:"Concrete Services",
       description:"Our concrete services can make driveways and sidewalks, patios, and foundations all easy to address with durable and attractive solutions for your property. It is the best time of the year for new concreting or repairing existing surfaces as it will cure much faster, and with the warmth, yield a more permanent result during summer.",
       image:"/summer-img-5.webp"
    },
    {
        title:"Asphalt Services",
        description:"For driveways, parking lots, and other paved surfaces, we have expert asphalt services. From laying fresh new asphalt to repairing existing surfaces, our high-quality solutions will hold up with even the heaviest use and hottest summer seasons. We see that each project we do for asphalt is for smooth, durable, and safe surfaces for long years.",
        image:"/summer-img-6.webp"
     },
     {
        title:"Seal Coating",
        description:"Avoid damage caused to the surfaces of your asphalt by summer's hot sun and damaging UV rays through reputable seal coating services. Seal coating extends the life of your pavements as it keeps the cracks out and wear-and-tear at bay, so your asphalt will look fresh and new again.",
        image:"/summer-img-7.webp"
     }

  ];


  const winterServices = [
    {
      title: "Construction of Retaining Walls",
      description:
        "Winter may also stress the retaining walls through soil movements and freezing and unfreezing of water. Our company is experienced in constructing and maintaining retaining walls that provide strong structural integrity and can stand even harsh weather conditions. Both for erosion control and landscaping, our retaining walls are strong and visually appealing.",
      image: "/summer-img-8.webp", 
    },
    {
      title: "Land Clearing",
      description:
        "Winter Land Clearing Winter land clearing is executed through specially designed techniques for handling frozen grounds and vegetation. Our land clearing will ensure that your site is ready for development or landscaping at any time of the year. We remove trees, brush, and debris efficiently so that all left is a clean slate for future projects.",
      image: "/summer-img-9.webp",
    },
    {
      title: "Tree Services",
      description:
        "Winter can be harsh on trees because it causes branches or even the entire tree to fall due to heavy snow and icing. Pruning, trimming, and removal is part of our tree services to eliminate damage to your property while encouraging healthy growth for those coming seasons. For you, emergency tree removals are available in the event of unexpected winter storms.",
      image: "/summer-img-10.webp",
    },
    {
        title:"Grading",
        description:"Proper grading in winter ensures that there are no water pools which would lead to problems when it melts. Land grading professionals ensure your land is levelled correctly such that water is allowed to pass swiftly out of the land and one has saved the risk of water causing damage and erosion.",
        image:"/summer-img-11.webp"
    },
    {
       title:"Landscaping Services",
       description:"Although most landscaping goes dormant in the winter, we prepare your landscape for the upcoming growing season. Our landscaping services include winter cleanups, mulch applications, and protection for plants, trees, and shrubs to have a healthy, vibrant landscape come spring.",
       image:"/summer-img-12.webp"
    }
  ];









const ServicesPage = () => {
  return (
    <div >
      <div className="relative bg-[url('/header-img.jpg')] bg-cover bg-center h-[20vw] w-[100%] rounded-lg">
        </div>
        <section className="px-4 py-10 sm:px-6 lg:px-16 text-black">
  <div className="max-w-7xl mx-auto">
    <div className="flex flex-col space-y-4">
    <div className="mb-6">
  <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">
     Our Seasonal Services
  </h2>
  <div className="mt-2 h-1 w-24 bg-[#0093af] rounded"></div> {/* Adjust width here */}
</div>
      <p className="text-xl text-gray-950">
      At Mr. Construction and Sons, we understand that the needs for your property change with every season, and we offer tailored solutions for winter as well as summer to ensure your home or business is always well-kept throughout the year. Here are our specialized services:
      </p>
    </div>
  </div>
</section>
        <section className="py-5 px-4 sm:px-6 lg:px-16 bg-white">
      <div className="max-w-7xl mx-auto">
      <div className="mb-6">
  <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">
    <span className="text-black mr-2">1.</span> Summer Services
  </h2>
  <div className="mt-2 h-1 w-24 bg-[#0093af] rounded"></div> {/* Adjust width here */}
</div>
        <p className="text-gray-600 mb-10 max-w-4xl">
          By summer, it demands maintenance and improvement of property appearance and usability. Our summer services will make your property look its best while overcoming the particular challenges of the hot season:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {summerServices.map((service, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="py-10 px-4 sm:px-6 lg:px-16 bg-white">
      <div className="max-w-7xl mx-auto">
      <div className="mb-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">
           <span className="text-black mr-2">2.</span> WinterServices
        </h2>
          <div className="mt-2 h-1 w-24 bg-[#0093af] rounded"></div> {/* Adjust width here */}
        </div>
        <p className="text-gray-600 mb-10 max-w-4xl">
        Your property, of course, deserves special care during the colder months to stand up well against the harsh winter weather. We offer winter services designed to protect your property as well as enhance it:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {winterServices.map((service, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
        
    </div>
  )
}

export default ServicesPage
