import React from "react";
import { FaBookOpen, FaGlobe, FaGraduationCap, FaLanguage, FaMicroscope, FaUserMd } from "react-icons/fa";

const courses = [
  { name: "IELTS", description: "English proficiency test for study and work.", icon: <FaGlobe className="text-blue-500 text-2xl sm:text-3xl" /> },
  { name: "GRE", description: "Graduate admissions test for higher education.", icon: <FaGraduationCap className="text-green-500 text-2xl sm:text-3xl" /> },
  { name: "TOEFL", description: "English language test widely accepted by universities.", icon: <FaBookOpen className="text-yellow-500 text-2xl sm:text-3xl" /> },
  { name: "PTE", description: "Pearson's English test for study, work, and visas.", icon: <FaLanguage className="text-purple-500 text-2xl sm:text-3xl" /> },
  { name: "Duolingo English Test", description: "Quick and affordable English certification test.", icon: <FaMicroscope className="text-red-500 text-2xl sm:text-3xl" /> },
  { name: "OET", description: "English test for healthcare professionals.", icon: <FaUserMd className="text-teal-500 text-2xl sm:text-3xl" /> },
];

const TrainingPrograms = () => {
  return (
    <section className="bg-gray-50 py-10 px-4 sm:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-lg sm:text-2xl md:text-3xl font-bold mb-6 text-gray-800">
          Our Training Programs
        </h2>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-6">
          {courses.map((course, index) => (
            <div
              key={index}
              className="flex items-center space-x-3 sm:space-x-4 bg-white p-3 sm:p-4 rounded-lg shadow-md 
              transition-transform transform hover:scale-105 hover:shadow-lg"
            >
              {/* Icon Section */}
              <div className="p-2 sm:p-3 bg-gray-100 rounded-lg flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12">
                {course.icon}
              </div>

              {/* Course Details */}
              <div className="text-left">
                <h3 className="text-sm sm:text-lg font-semibold text-gray-900">{course.name}</h3>
                <p className="text-xs sm:text-sm text-gray-600">{course.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrainingPrograms;
