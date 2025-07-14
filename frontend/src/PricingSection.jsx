import React from "react";

const PricingSection = () => {
  const scrollToBanner = () => {
    const bannerSection = document.getElementById("banner-section");
    if (bannerSection) {
      bannerSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="bg-white py-12 px-4 md:px-16 lg:px-24 text-center">
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold mb-3 text-gray-900">
        Pricing & <span style={{ background: "linear-gradient(to right, #cb8904, #fa6a04)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              display: "inline-block", }}>Plans</span>
      </h2>
      <hr className="border-t-2 border-yellow-800 w-24 mx-auto mb-8" />

      <div className="bg-white rounded-lg shadow-md p-6 max-w-3xl mx-auto border border-gray-200">
        <div className="flex justify-between items-center border-b border-yellow-800 pb-3 text-left">
          <p className="font-semibold text-black">Plot Area:</p>
          
          <p className="font-semibold text-black">Base Price:</p>
        </div>
        <div className="flex justify-between pt-4 text-left">
          <p className="text-black">134-167 SQ.YRDS</p>
          
          <p className="text-black">Starting ₹29 Lacs*</p>
        </div>
       </div>

      <div className="mt-6 py-3 font-semibold text-black text-lg">
        For Presentations & Site Visit, Contact - {""}
        <a href="tel:+919100298446" className="text-blue-600 underline">
          +91-9100298446
        </a>
      </div>

      <button
        onClick={scrollToBanner}
        className="mt-6 bg-green-400 text-white px-6 py-3 rounded shadow blinking-button bg-blue-600 hover:bg-blue-500 transition"
      >
        Price Breakup & Payment Plan
      </button>
    </section>
  );
};

export default PricingSection;
