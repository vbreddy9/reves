import React, { useState } from "react";
import TowerAonUnoImg from "./assets/t_aon_uno.webp";
import TowerEkaOdinImg from "./assets/t_eka_odin.webp";
import TowerIsaImg from "./assets/t_isa.webp";
import MasterPlanImg from "./assets/mplan.webp";


const FloorPlans = () => {
  const [activeTab, setActiveTab] = useState("TOWER AON & UNO");

  const scrollToBanner = () => {
    const bannerSection = document.getElementById("banner-section");
    if (bannerSection) {
      bannerSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const tabs = ["TOWER AON & UNO", "TOWER EKA & ODIN", "TOWER ISA", "Master Plan"];

  const tabContent = {
  "TOWER AON & UNO": {
    image: TowerAonUnoImg,
    highlights: [
      { title: "Spacious Layouts", desc: "Designed with openness and comfort in mind." },
      { title: "Prime Location", desc: "Located at the heart of the community." },
      { title: "Elegant Interiors", desc: "High-end finishes and fixtures." },
    ],
  },
  "TOWER EKA & ODIN": {
    image: TowerEkaOdinImg,
    highlights: [
      { title: "Contemporary Design", desc: "Modern layouts and stunning views." },
      { title: "Premium Living", desc: "Every element crafted to perfection." },
      { title: "Balanced Lifestyle", desc: "A perfect blend of luxury and functionality." },
    ],
  },
  "TOWER ISA": {
    image: TowerIsaImg,
    highlights: [
      { title: "Elevated Living", desc: "Skyline views and ample light." },
      { title: "Smart Floor Plans", desc: "Intelligently designed for family comfort." },
      { title: "Exclusive Access", desc: "Dedicated entrances and privacy zones." },
    ],
  },
  "Master Plan": {
    image: MasterPlanImg,
    highlights: [
      { title: "7.7 Acres of Tranquility", desc: "Thoughtfully planned open spaces." },
      { title: "Holistic Living", desc: "Wellness, lifestyle and convenience in one place." },
      { title: "Connectivity", desc: "Seamless access across the property." },
    ],
  },
};


  return (
    <section className="py-12 px-4 md:px-16 bg-white">
      <div className="text-center mb-10">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold mb-3 text-gray-900">
          With harmony in <span style={{ color: '#cb8904' }}>Nature</span>
        </h2>
        <p className="text-gray-600 max-w-xl mx-auto">
         ONE by MSN’s elegant blocks offer stunning views and world-class living.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`text-lg font-medium px-4 py-2 border-b-2 ${
              activeTab === tab
                ? "text-[#4f1021] border-[#4f1021]"
                : "text-gray-600 border-transparent"
            } transition`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="py-12 px-10 flex flex-col md:flex-row items-start justify-start gap-6 md:gap-4 lg:gap-2 xl:gap-12">
        <img
          src={tabContent[activeTab].image}
          alt={`${activeTab} Plan`}
          className="w-full md:max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl rounded-lg shadow"
        />
        <div className="text-gray-700 space-y-8 w-full md:w-1/2 xl:w-[45%]">
          {tabContent[activeTab].highlights.map((item, index) => (
            <div key={index}>
              <h4 className="font-semibold text-gray-900">{item.title}</h4>
              <p>{item.desc}</p>
            </div>
          ))}
          <button
            onClick={scrollToBanner}
            className="border border-[#4f1021] text-[#4f1021] px-5 py-2 rounded hover:bg-[#4f1021]/10 transition"
          >
            Get Pricing
          </button>
        </div>
      </div>
    </section>
  );
};

export default FloorPlans;
