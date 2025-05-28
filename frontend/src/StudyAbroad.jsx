import React, { useState } from "react";

const StudyAbroad = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="bg-gray-100 py-10 w-full">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
        About <span style={{ color: '#cb8904' }}>Developer</span>
        </h2>

        {/* Main Content */}
        <p className="text-gray-700 mt-4">
        <strong>Supadha: </strong> is a prime real estate company headquartered in Hyderabad with its operations spread across 3 entities – Supadha Infra, Supadha Developers and Supadha Constructions. <br></br><br></br>Founded by the 2-industry stalwarts Mr. K Brahmaiah & Mr DS Prasad, with their individual experiences and expertise that have benefited the construction landscape of Hyderabad for over 2 decades.
        </p>

        
      </div>
    </div>
  );
};

export default StudyAbroad;
