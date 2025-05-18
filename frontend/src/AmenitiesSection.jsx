import React, { useState, useEffect } from "react";
import amenity1 from "./assets/Chess_Terrace.webp";
import amenity2 from "./assets/Co_Working.webp";
import amenity3 from "./assets/Club_House.webp";
import amenity4 from "./assets/BBQ_Party.webp";
import amenity5 from "./assets/ClubHouse.webp";
import amenity6 from "./assets/Balcony_cam.webp";
import amenity7 from "./assets/Seating.webp";
import amenity8 from "./assets/Rooftop_lounge.webp";
import amenity9 from "./assets/Sunken.webp";
import amenity10 from "./assets/Swimming_pool.webp";

const amenities = [
  {
    id: "tower",
    label: "Tower Amenities",
    items: ["Teen Lounge", "Lobby Lounge", "Co-working Pods", "Reading Nook", "Senior Citizens Lounge", "Business Lounge"],
  },
  {
    id: "stilt Amenities",
    label: "Stilt Amenities",
    items: ["Kids Play Zone", "Amphitheatre Seating", "Pet Park", "Cycle Stand", "Flexi Court", "Jogging Walkway", "Butterfly Walkway", "Stretching Terrace", "Skate Route", "Tropical Dry Berm", "Cricket Practice Net", "Climbing Rope", "Table Play", "Sand Pit", "Vision Terrace"],
  },
  {
    id: "terrace",
    label: "Terrace Amenities",
    items: ["Stepping Planter", "Rooftop Seating", "Rooftop Terrace", "Shaded Seating", "Trellis Canopy", "Yoga Deck", "Pickleball"],
  },
  {
    id: "club",
    label: "Club Amenities",
    items: ["Banquet Hall", "Indoor Games Room", "Cafe Lounge", "Fitness Studio", "Terrace Pool", "Party Area", "Creche", "Mini Theatre", "Guest rooms", "Squash Court", "salon & spa", "Gym"],
  },
  {
    id: "sky",
    label: "Sky Amenities",
    items: ["Sky Lounge", "Sky Seating", "Lift Lobby", "Rooftop Seating", "Rooftop Terrace", "Shaded Seating", "Changing Room", "Yoga Deck", "Shallow Pool", "Swimming Pool Lobby", "Hot Water Pool", "Landscape", "Elevated Walk way", "View Desk", "Jacuzzi"],
  },
];

const images = [amenity1, amenity2, amenity3, amenity4, amenity5, amenity6, amenity7, amenity8, amenity9, amenity10];

const AmenitiesSection = () => {
  const [selected, setSelected] = useState("tower");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Rotate every 3 seconds
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
          List of 203 World-Class <span className="text-green-400">Amenities</span>
        </h2>

        {/* Auto-scrolling Images */}
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

        {/* Amenity Tabs */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-6 mb-8">
          {amenities.map(({ id, label }) => (
            <button
              key={id}
              className={`px-4 py-2 rounded-lg text-sm sm:text-base font-medium transition ${
                selected === id
                  ? "bg-green-600 text-white"
                  : "bg-green-100 text-green-700 hover:bg-blue-200"
              }`}
              onClick={() => setSelected(id)}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Amenity List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-5xl mx-auto text-left">
          {amenities
            .find((amenity) => amenity.id === selected)
            ?.items.map((item, index) => (
              <div
                key={index}
                className="flex items-center bg-white border border-green-200 shadow-sm rounded-lg px-4 py-3 gap-3"
              >
                <i className="fas fa-check-circle text-green-500"></i>
                <span className="text-gray-700 font-medium">{item}</span>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default AmenitiesSection;
