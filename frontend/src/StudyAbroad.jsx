import React, { useState } from "react";

const StudyAbroad = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="bg-gray-100 py-10 w-full">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
        About <span className="text-green-400"> Developer</span>
        </h2>

        {/* Main Content */}
        <p className="text-gray-700 mt-4">
        <strong>Urbanrise </strong>is South India’s largest real estate developer, recognized for its pathbreaking and quality residential projects across South India. Backed by the renowned Alliance Group, Urbanrise has delivered over<strong> 22,000+</strong> homes and has 72 million square feet under development. <br></br>
        <br></br>Driven by a passion for growth and sustainability, our projects are not just about creating homes but building communities that foster a sense of belonging. With a commitment to integrity and reliability, Urbanrise ensures timely delivery, meeting and exceeding home buyer expectations.
        </p>

        
      </div>
    </div>
  );
};

export default StudyAbroad;
