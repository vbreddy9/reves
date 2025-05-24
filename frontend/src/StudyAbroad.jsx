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
        <strong>Raghava: </strong>A professionally managed organisation that commenced as a conglomerate in 1991, Raghava is committed to excellence, quality, and client satisfaction. Our businesses span the sectors of engineering & construction, real estate, infrastructure, and urban development & management. <br/><br/>We strive for innovativeness by empowering our teams to create value and attain the highest standards. We endeavour to provide reliable and integrated quality services in order to contribute to the infrastructural growth in India. Recently, we emerged as a real estate company developing and building responsible infrastructure through our practices.
        </p>

        
      </div>
    </div>
  );
};

export default StudyAbroad;
