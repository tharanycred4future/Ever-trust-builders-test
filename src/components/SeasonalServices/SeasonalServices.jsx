import { useState } from "react";

const summerServices = [
  "Retaining Walls – To manage erosion control and curb appeal",
  "Land Clearing – Clear land for new development or landscaping",
  "Roofing Services – Installation, repair, and seasonal maintenance",
  "Grading Services – Drainage and foundation work done right",
  "Concrete Work – Driveways, sidewalks, patios, and more",
  "Asphalt Services – Smooth, durable paving for any surface",
  "Seal Coating – Seal in protection and extend the life of your asphalt surfaces",
];

const winterServices = [
  "Retaining Walls Construction – Built to last for year-round dependability",
  "Land Clearing – Winter construction or seasonal development",
  "Tree Services – Pruning, removal, and storm protection",
  "Grading – Avoid water buildup and freezing problems",
  "Landscaping Maintenance – Outdoor spaces kept functional and neat",
];

export default function SeasonalConstructionServices() {
  const [activeSeason, setActiveSeason] = useState(null);

  const toggleSeason = (season) => {
    setActiveSeason((prev) => (prev === season ? null : season));
  };

  const renderServiceCards = (services) =>
    services.map((service, index) => (
      <div
        key={index}
        className="bg-[#f4f0ec] rounded-xl shadow p-4 text-gray-700 font-medium border border-gray-200"
      >
        {service}
      </div>
    ));

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
        Seasonal Construction Services
      </h2>

      <div className="flex justify-center gap-4 mb-8 flex-wrap">
        <button
          onClick={() => toggleSeason("summer")}
          className={`px-6 py-2 rounded-full font-semibold transition ${
            activeSeason === "summer"
              ? "bg-[#679267] text-white shadow"
              : "bg-gray-200 text-gray-800 hover:bg-[#93c572]"
          }`}
        >
          Summer Construction Services
        </button>
        <button
          onClick={() => toggleSeason("winter")}
          className={`px-6 py-2 rounded-full font-semibold transition ${
            activeSeason === "winter"
              ? "bg-[#679267] text-white shadow"
              : "bg-gray-200 text-gray-800 hover:bg-[#93c572]"
          }`}
        >
          Winter Construction Services
        </button>
      </div>

      {activeSeason && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in-down">
          {activeSeason === "summer"
            ? renderServiceCards(summerServices)
            : renderServiceCards(winterServices)}
        </div>
      )}
    </div>
  );
}
