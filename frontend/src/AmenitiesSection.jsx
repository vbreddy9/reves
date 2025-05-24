import React, { useState, useEffect } from "react";
import amenity1 from "./assets/cinq-amenities-1.webp";
import amenity2 from "./assets/cinq-amenities-2.webp";
import amenity3 from "./assets/cinq-amenities-3.webp";
import amenity4 from "./assets/cinq-gallery-image-1.webp";
import amenity5 from "./assets/cinq-gallery-image-4.webp";
import amenity6 from "./assets/cinq-gallery-image-6.webp";
import amenity7 from "./assets/cinq-gallery-image-7.webp";
import amenity8 from "./assets/cinq-gallery-image-8.webp";


const amenities = [
  {
    id: "ground",
    label: "Ground Floor",
    items: ["Reception", "Cafe", "Banquet Hall"],
  },
  {
    id: "stilt Amenities",
    label: "First Floor",
    items: ["Co-Working Space", "Mini Theatre"],
  },
  {
    id: "terrace",
    label: "Second Floor",
    items: ["Badminton Court", "Squash Court"],
  },
  {
    id: "club",
    label: "Third Floor",
    items: ["5 Guest Rooms"],
  },
  {
    id: "four",
    label: "Fourth Floor",
    items: ["Bowling Alley", "Gym", "Gentleman's Room"],
  },
  {
    id: "fif",
    label: "Fifth Floor",
    items: ["Gym HIIT", "Jacuzzi", "Salon", "Spa"],
  },
  {
    id: "sky",
    label: "Terrace Amenities",
    items: ["Infinity Pool", "Party Area", "Sit-Out Area"],
  },
];

const images = [amenity1, amenity2, amenity3, amenity4, amenity5, amenity6, amenity7, amenity8];

const AmenitiesSection = () => {
  const [selected, setSelected] = useState("ground");
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
        Top-Notch, World-Class <span style={{ color: '#cb8904' }}>Amenities</span>
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
                  ? "bg-yellow-600 text-white"
                  : "bg-yellow-100 text-yellow-700 hover:bg-yellow-200"
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
