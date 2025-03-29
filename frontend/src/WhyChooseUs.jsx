import React from "react";

const WhyChooseUs = () => {
  return (
    <section className="bg-gray-100 py-10">
      <div className="max-w-5xl mx-auto text-center px-4">
        {/* Title */}
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
          Why Choose <span className="text-orange-300">Vidhyavaaradhi?</span>
        </h2>

        {/* Features Grid */}
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {/* University Partners */}
          <div className="flex flex-col items-center text-center">
            <span className="text-3xl flex-shrink-0">🤝</span>
            <p className="text-lg font-bold text-gray-900">550+</p>
            <p className="text-gray-700">University Partners</p>
          </div>

          {/* Success Stories */}
          <div className="flex flex-col items-center text-center">
            <span className="text-3xl flex-shrink-0">🏆</span>
            <p className="text-lg font-bold text-gray-900">5,000+</p>
            <p className="text-gray-700">Success Stories</p>
          </div>

          {/* Scholarships */}
          <div className="flex flex-col items-center text-center">
            <span className="text-3xl flex-shrink-0">🎓</span>
            <p className="text-gray-700 break-words">
              Scholarship up to <span className="text-lg font-bold text-gray-900">50%*</span> & more
            </p>
          </div>

          {/* Courses */}
          <div className="flex flex-col items-center text-center">
            <span className="text-3xl flex-shrink-0">📜</span>
            <p className="text-gray-700 break-words">
              Courses starting @ <span className="font-bold">₹ 14 Lakhs*</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
