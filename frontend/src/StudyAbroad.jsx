import React, { useState } from "react";

const StudyAbroad = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="bg-gray-100 py-10 w-full">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Why Study Abroad with <span className="text-orange-300">Vidhyavaraadhi?</span>
        </h2>

        {/* Main Content */}
        <p className="text-gray-700 mt-4">
          Vidhyavaaradi is the most trusted study abroad consultant in Hyderabad, India. Our team of experts conducts over{" "}
          <strong>2,00,000 counselling sessions</strong> every month and our student-first approach sets us apart from the competition.
        </p>

        {/* Additional Content (Visible when expanded) */}
        {expanded && (
          <div className="mt-4 text-gray-700">
            <h3 className="text-2xl font-semibold">Why Choose Vidhyavaaradi?</h3>
            <ul className="list-disc pl-5 mt-2 space-y-2">
              <li><strong>Vast Experience:</strong> We have a proven record of sending <strong>5,000+</strong> students to their dream universities abroad.</li>
              <li><strong>Wide Network:</strong> Partnerships with <strong>550+ top universities</strong> in the UK, USA, Canada, Germany, Australia, Ireland, and Australia. <strong>95% of students</strong> get admits within <strong>4 weeks</strong>.</li>
              <li><strong>End-to-End Support:</strong> From shortlisting universities to getting a SIM card, we take care of everything.</li>
              <li><strong>Student-first Approach:</strong> We prioritize student success in every decision.</li>
            </ul>

            <h3 className="text-2xl font-semibold mt-6">Top Countries to Study Abroad</h3>
            <ul className="list-disc pl-5 mt-2 space-y-2">
              <li><strong>UK:</strong> Shorter degrees save costs and help students get job-ready faster.</li>
              <li><strong>USA:</strong> Home to 4 of the world’s top 10 universities (QS rankings) and a hub for IT and Computer Science.</li>
              <li><strong>Germany:</strong> Affordable education, scholarships, and excellent post-study work opportunities.</li>
              <li><strong>Canada:</strong> Despite visa challenges, Canada remains a top choice due to affordability and job opportunities.</li>
              <li><strong>Australia:</strong> The fastest-growing destination with top international universities opening campuses.</li>
              <li><strong>Ireland:</strong> A rising destination with over <strong>3,000 Indian students</strong> currently enrolled.</li>
            </ul>

            <h3 className="text-2xl font-semibold mt-6">How to Apply?</h3>
            <p className="mt-2">
              Start your study abroad journey with Vidhyavaaradi in just a few steps:
            </p>
            <ol className="list-decimal pl-5 mt-2 space-y-2">
              <li>Visit <a href="https://vidhyavaaradhi.com/" className="text-blue-500 font-semibold hover:underline">www.vidhyavaaradhi.com</a></li>
              <li>Click on <strong>Talk to an Expert</strong></li>
              <li>Fill in your details.</li>
              <li>Our experts will reach out to you in no time!</li>
            </ol>
          </div>
        )}

        {/* Read More / Read Less Button */}
        <button
          onClick={() => setExpanded(!expanded)}
          className="text-blue-400 font-semibold mt-4 inline-block hover:underline focus:outline-none"
        >
          {expanded ? "Read Less …" : "Read More …"}
        </button>
      </div>
    </div>
  );
};

export default StudyAbroad;
