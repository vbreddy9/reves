import React, { useState, useEffect } from "react";
import amenity1 from "./assets/gamya_tennis.webp";
import amenity2 from "./assets/gamya_football.webp";
import amenity3 from "./assets/gamya_garden.webp";
import amenity4 from "./assets/gamya_gym.webp";
import amenity5 from "./assets/gamya_hocky.webp";
import amenity6 from "./assets/gamya_pool.webp";
import amenity7 from "./assets/gamya_snoker.webp";
import amenity8 from "./assets/gamya_yoga.webp";
import amenity9 from "./assets/gamya_shuttle.webp";

// Block-wise amenities based on layout map
const amenities = [
  {
    id: "block-a",
    label: "BLOCK A",
    items: [
      "Box Cricket",
      "Zen Garden",
      "Reflexology Path",
      "Yoga Deck",
      "Yoga Lawn",
      "Meditation Deck",
    ],
  },
  {
    id: "block-b",
    label: "BLOCK B",
    items: [
      "Meditation Lawn",
      "Sand Pit with Climbing Wall",
      "Bowling",
      "Play Area for Kids",
      "Senior Citizen Seating Area",
    ],
  },
  {
    id: "block-c",
    label: "BLOCK C",
    items: [
      "Open Gym",
      "Crossfit Area",
      "Lounge Seating",
      "Free Play Lawn",
    ],
  },
  {
    id: "block-d",
    label: "BLOCK D",
    items: [
      "Floor Games",
      "Indoor Games",
      "Table Tennis",
      "Table Games",
    ],
  },
  {
    id: "block-e",
    label: "BLOCK E",
    items: [
      "Leisure Lawn",
      "Chit Chat Corner",
      "Green Wall",
      "Open Movie Screen",
      "Youngster’s Corner",
    ],
  },
  {
    id: "block-f",
    label: "BLOCK F",
    items: [
      "Artist Deck",
      "Work from Garden",
      "Reading Corner",
      "Community Farming",
      "Multi-purpose Lawn",
      "Alfresco Dining",
      "Kitty Party Area",
    ],
  },
  {
    id: "sports",
    label: "SPORTS ZONE",
    items: [
      "Strolling Garden",
      "Multi-purpose Courts",
      "Connecting Plaza",
      "Golf Putting",
      "Socializing Area",
      "Mound Garden",
      "Bus Dropoff and Pickup",
    ],
  },
  {
    id: "clubhouse",
    label: "CLUBHOUSE",
    items: [
      "Water Feature",
      "Clubhouse 1 Drop-off",
      "Stage",
      "Thematic Plantation",
      "Event Lawn",
      "Open Amphitheatre",
      "Toddler Space",
      "Salon & Spa",
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
  const [selected, setSelected] = useState("block-a");
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
