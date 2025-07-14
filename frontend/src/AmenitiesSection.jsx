import React from "react";
import { FaCheckCircle, FaTree, FaTint, FaRoad, FaLightbulb, FaShieldAlt, FaChild, FaBasketballBall, FaWalking, FaWater } from "react-icons/fa";

const highlights = [
  { icon: <FaCheckCircle />, text: "100% Vastu" },
  { icon: <FaWater />, text: "Overhead Water Tank" },
  { icon: <FaTint />, text: "Rain Water Harvesting" },
  { icon: <FaTree />, text: "Parks with Landscaping" },
  { icon: <FaRoad />, text: "100' Black Top Roads" },
  { icon: <FaRoad />, text: "30' Black Top Roads" },
  { icon: <FaTint />, text: "Underground Drainage" },
  { icon: <FaRoad />, text: "System Modern Modular Street" },
  { icon: <FaLightbulb />, text: "Electricity & Lights 24/7 Security" },
  { icon: <FaWalking />, text: "Designed park with walking & cycling tracks" },
  { icon: <FaChild />, text: "Kids play area with play equipment" },
  { icon: <FaBasketballBall />, text: "Basketball, shuttle courts & provision for yoga" },
];

const AmenitiesSection = () => {
  return (
    <section className="bg-orange-50 py-12 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-2xl font-bold text-center mb-6">Project <span
            style={{
              background: 'linear-gradient(to right, #cb8904, #fa6a04)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              display: 'inline-block',
            }}
          >
            Highlights</span></h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="flex items-start gap-4 bg-white shadow-md border border-orange-100 rounded-lg p-4"
            >
              <div className="text-orange-500 text-xl">{item.icon}</div>
              <p className="text-gray-800 text-base font-medium">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AmenitiesSection;
