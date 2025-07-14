import React, { useState } from "react";

const StudyAbroad = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="bg-gray-100 py-10 w-full">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
        About <span style={{ background: "linear-gradient(to right, #cb8904, #fa6a04)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              display: "inline-block", }}>Developer</span>
        </h2>

        {/* Main Content */}
        <p className="text-gray-700 mt-4">
        Established in 2023, <strong>Garudadri Developers</strong> is a forward-thinking real estate company specializing in premium <strong>villa plots and open plot developments</strong>. With a strong foundation built on integrity, transparency, and customer-first values, we are committed to delivering exceptional living environments across prime locations.

          <br /><br />

          Our projects are designed to provide more than just land—they offer lifestyle-driven communities with well-planned layouts, blacktop roads, green landscapes, and future-ready infrastructure. Whether you’re building your dream home or investing for the future, Garudadri Developers ensures lasting value and peace of mind.

          <br /><br />

          At Garudadri, we believe in creating spaces that inspire — where every plot holds the promise of a better tomorrow. Join us in shaping communities that blend nature, connectivity, and modern living.
                  </p>

        
      </div>
    </div>
  );
};

export default StudyAbroad;
