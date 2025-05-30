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
        Established in 2021, <strong>MSN Realty</strong> harnesses the legacy of MSN's success in the pharmaceutical industry. MSN brings robust financial strength and expertise to the real estate sector.<br></br><br></br> MSN Realty is poised to develop a remarkable 20 million square feet of residential and commercial spaces over the next five years. This expansive portfolio will offer a diverse range of options, from luxury residences to thriving commercial establishments, all meticulously crafted to exceed expectations. <br></br><br></br>Our passion lies in creating exceptional spaces that transcend mere architecture. We curate homes where every detail matters-the interplay of light, the harmony of materials and the seamless fusion of form and function. Our commitment to craftsmanship and innovation ensures that each residence is not just a dwelling but an experience-an ode to refined living.
        </p>

        
      </div>
    </div>
  );
};

export default StudyAbroad;
