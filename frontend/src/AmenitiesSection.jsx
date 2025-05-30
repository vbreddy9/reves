import React, { useState, useEffect } from "react";
import amenity1 from "./assets/badminton.webp";
import amenity2 from "./assets/basketball.webp";
import amenity3 from "./assets/gym.webp";
import amenity4 from "./assets/hall.webp";
import amenity5 from "./assets/play_area.webp";
import amenity6 from "./assets/swimming_pool.webp";
import amenity7 from "./assets/walking_area.webp";
import amenity8 from "./assets/spa.webp";
import amenity9 from "./assets/yoga.webp";

// Block-wise amenities based on layout map
const amenities = [
  {
    id: "tower-a",
    label: "TOWER AON",
    items: [
      "Dance Room",
      "Soccer Pool",
      "Dart Room",
      "Multipurpose Room",
      "Coffee Lounge",
      "Entertainment Lounge", "Chess Lounge", "Recording Room"
    ],
  },
  {
    id: "block-b",
    label: "TOWER EKA",
    items: [
      "2 Squash Courts",
      "Cricket Simulator",
      "Golf Simulator",
      "Indoor Play Zone",
      "Pool Table", "Convenience Store"
    ], 
  },
  {
    id: "block-c",
    label: "TOWER ISA",
    items: [
      "Aqua Gym",
      "Temperature Controlled Pool",
      "Lounge",
      "Coffee Lounge", "Pool Table", ""
    ],
  },
  {
    id: "block-d",
    label: "TOWER ODIN",
    items: [
      "Mini-Theatre",
      "Bowling",
      "Creche",
      "Kids’ Learning Centre", "VR Room", "Dance Floor With Light", "Co-working station", "Science Lab", "Napping Pod", "Table Tennis", "Rock Climbing", "Play Zone"
    ],
  },
  {
    id: "block-e",
    label: "TOWER UNO",
    items: [
      "Library",
      "Story Nook",
      "Banquet Hall with Kitchen",
      "Pharmacy",
      "Story Nook", "Working Pods", "Multipurpose Room", "Clinic With Emergency Room"
    ],
  },
 
  {
    id: "clubhouse",
    label: "CLUBHOUSE",
    items: [
      "Aerobics",
      "Banquet with Kitchen",
      "Boxing",
      "Badminton Courts",
      "Ace Lounge",
      "Guest Rooms",
      "Indoor Gym",
      "Luxury Waiting Lounges", "Pantry & Store", "Queen’s Lounge", "Spa, Salon & Sauna", "Terrace Party Zone", "Zumba", "Yoga"
    ],
  },
];

const images = [
  amenity1,
  amenity2,
  amenity3,
  amenity4,
  amenity5,
  amenity6,
  amenity7,
  amenity8,
  amenity9,
];

const AmenitiesSection = () => {
  const [selected, setSelected] = useState("tower-a");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const visibleImages = [
    images[currentImageIndex],
    images[(currentImageIndex + 1) % images.length],
    images[(currentImageIndex + 2) % images.length],
  ];

  return (
    <section className="bg-neutral-50 py-12 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6">
          70+ Awesome Amenities{" "}
          <span style={{ color: "#cb8904" }}> Await!</span>
        </h2>

        {/* Auto-rotating images */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-8 transition-all duration-500">
          {visibleImages.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Amenity ${index}`}
              className="rounded-xl w-full md:w-1/3 object-cover"
            />
          ))}
        </div>

        {/* Tab buttons for blocks */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-6 mb-8">
          {amenities.map(({ id, label }) => (
            <button
              key={id}
              className={`px-4 py-2 rounded-lg text-sm sm:text-base font-medium transition ${
                selected === id
                  ? "bg-yellow-600 text-white"
                  : "bg-yellow-100 text-yellow-700 hover:bg-yellow-200"
              }`}
              onClick={() => setSelected(id)}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Amenity items list */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-5xl mx-auto text-left">
          {amenities
            .find((amenity) => amenity.id === selected)
            ?.items.map((item, index) => (
              <div
                key={index}
                className="flex items-center bg-white border border-yellow-200 shadow-sm rounded-lg px-4 py-3 gap-3"
              >
                <i className="fas fa-check-circle text-yellow-500"></i>
                <span className="text-gray-700 font-medium">{item}</span>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default AmenitiesSection;
