import React from 'react';

const advantages = [
  { icon: "🎓", text: "Finding the Program That’s Right for You" },
  { icon: "👤", text: "Curated Expert-led Application Assistance" },
  { icon: "📖", text: "English Assessment Test Prep On-the-go" },
  { icon: "📂", text: "Hacking the Interviews & the All-important VISA" },
  { icon: "💰", text: "Solving for Money Money Money!" },
  { icon: "🏡", text: "Making Sure You Stay Right, And Stay Well" }
];

const AdvantageSection = () => {
  return (
    <section className="bg-gray-50 py-10 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">
          <span className="text-black">Vidhyavaaradhi </span>
          <span className="text-orange-300">Advantage</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {advantages.map((item, index) => (
            <div key={index} className="flex items-start space-x-3 p-4 bg-white rounded-lg shadow-md 
            transition-transform transform hover:scale-105 duration-300">
              <span className="text-3xl">{item.icon}</span>
              <p className="text-gray-800 text-lg">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdvantageSection;