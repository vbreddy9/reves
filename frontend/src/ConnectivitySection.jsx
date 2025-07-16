import React from "react";
import {
  Cpu,
  Plane,
  Route,
  GraduationCap,
  Factory,
  Landmark,
} from "lucide-react";
import map from "./assets/map.webp";

const connectivityPoints = [
  {
    text: "Beside Electronics Hardware Technology Park",
    icon: <Cpu className="text-yellow-600 w-5 h-5 mt-1" />,
  },
  {
    text: "11 km HCL & Videocon",
    icon: <Cpu className="text-yellow-600 w-5 h-5 mt-1" />,
  },
  {
    text:
      "Manufacturing electronic goods like WIPRO, PRO, PR Defence Equipments & MALABAR GOLD & DAIMONDS.",
    icon: <Factory className="text-yellow-600 w-5 h-5 mt-1" />,
  },
  {
    text: "15 km from Shamshabad RGI Airport",
    icon: <Plane className="text-yellow-600 w-5 h-5 mt-1" />,
  },
  {
    text: "10 km from ORR, Pedda Golconda exit",
    icon: <Route className="text-yellow-600 w-5 h-5 mt-1" />,
  },
  {
    text: "8 km from JIMS & Ramanuja Statue and Swarna Bharathi Trust",
    icon: <GraduationCap className="text-yellow-600 w-5 h-5 mt-1" />,
  },
  {
    text: "15 km TATA Aerospace Hub, TCS & Wonderla",
    icon: <Factory className="text-yellow-600 w-5 h-5 mt-1" />,
  },
  {
    text: "E-SEZ Maheswaram - EMC (Electronic Manufacturing Cluster)",
    icon: <Cpu className="text-yellow-600 w-5 h-5 mt-1" />,
  },
  {
    text: "7 km from HYD & Bangalore Highway at Timmapur",
    icon: <Route className="text-yellow-600 w-5 h-5 mt-1" />,
  },
  {
    text: "Upcoming Dukes and My Home Villas",
    icon: <Landmark className="text-yellow-600 w-5 h-5 mt-1" />,
  },
];

const ConnectivitySection = () => {
  return (
    <section className="bg-white py-12 px-4 md:px-16 lg:px-24">
      <div className="text-center mb-10">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-maroon-800 text-center">
          Seamlessly Connected,&nbsp;
          <span
            style={{
              background: "linear-gradient(to right, #cb8904, #fa6a04)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              display: "inline-block",
            }}
          >
            Ideally Positioned
          </span>
        </h2>
        <p className="mt-4 text-gray-600 text-sm sm:text-base md:text-lg max-w-3xl mx-auto text-center">
          REVES Township is located in Maheshwaram, close to Shamshabad
          International Airport, offering seamless access to business hubs, top
          schools, hospitals, highways and lifestyle destinations.
        </p>
      </div>

      {/* Two Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
        {/* Left: Cards with custom icons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {connectivityPoints.map((point, index) => (
            <div
              key={index}
              className="flex items-start gap-3 bg-white border border-yellow-100 p-4 rounded-lg shadow-sm hover:shadow-lg transition duration-300"
            >
              {point.icon}
              <p className="text-gray-800 text-sm font-medium">{point.text}</p>
            </div>
          ))}
        </div>

        {/* Right: Map with CTA button */}
        <div className="relative rounded-xl overflow-hidden shadow-xl">
          <img
            src={map}
            alt="Location Map"
            className="w-full h-[450px] object-cover rounded-lg"
          />
          <a
          href="https://maps.app.goo.gl/U6JR3jwqR58GVW2g8"
          target="_blank"
          rel="noopener noreferrer"
          className="absolute top-4 right-4 px-2 py-1 rounded-lg hover:opacity-90 transition text-white font-semibold"
          style={{
            background: "linear-gradient(to right, #cb8904, #fa6a04)",
          }}
        >
  <span
    style={{
      
      display: "inline-block",
    }}
  >
    Navigate to REVES
  </span>
</a>

        </div>
      </div>
    </section>
  );
};

export default ConnectivitySection;
