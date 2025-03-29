import React from "react";

// Imported Profile Images
import dp from "./assets/dp.png";
import cn from "./assets/cn.png";
import vp from "./assets/vp.png";
import deepthi from "./assets/dv.jpg";
import sai from "./assets/sm.avif";
import ak from "./assets/ak.png";

// Imported University Logos
import ruLogo from "./assets/ru.png";
import ubLogo from "./assets/ub.jpg";
import quLogo from "./assets/nc.svg";
import kLogo from "./assets/ku.avif";
import utLogo from "./assets/set.png";
import aLogo from "./assets/aru.jpg";
import cuLogo from "./assets/csu.webp";

const successStories = [
  {
    name: "Deepika Perangalla",
    location: "Hyderabad → United States",
    testimonial:
      "I truly trust Vidhyavaaradhi Overseas Consultancy for making my study abroad journey seamless. Their guidance and support made the entire process stress-free! I highly recommend them to anyone pursuing overseas education.",
    course: "Computer Information Systems",
    university: "Rivier University",
    image: dp,
    logo: ruLogo,
  },
  {
    name: "Nikil Chenagani",
    location: "Kodad → Canada",
    testimonial:
      "I am beyond grateful to Vidhyavaaradhi Overseas Consultancy for their exceptional guidance in making my dream of studying in Canada a reality! From university selection to visa approval, their support was stress-free",
    course: "Data Analytics",
    university: "University of Niagara falls",
    image: cn,
    logo: quLogo,
  },
  {
    name: "Puppala Vijayalakshmi",
    location: "Vijayawada → Ireland ",
    testimonial:
      "I’m deeply grateful to Vidhyavaaradhi Overseas Consultancy for making my dream of studying in Ireland a reality! Their seamless support, from university selection to visa approval, was truly exceptional.",
    course:"Cyber security",
    university: "South East Technological University",
    image: vp,
    logo: utLogo,
  },
  {
    name: "Ameeksha Kantam",
    location: "Hyderabad → Germany",
    testimonial:
      "I am beyond grateful to Vidhyavaaradhi Overseas Consultancy for making my dream of studying in the UK a reality! From the very beginning, their team has been incredibly supportive, guiding me through every step",
    course: "Master of Business Administration",
    university: "Central Michigan University",
    image: ak,
    logo: aLogo,
  },
  {
    name: "Deepti Devunuri",
    location: "Hyderabad → United States",
    testimonial:
      "I had an amazing experience with Vidhya Vaaradhi Overseas Consultancy while pursuing my dream of studying in the USA. Their guidance and assistance made the entire process smooth and stress-free.",
    course: "Computer Science",
    university: "Kennesaw University",
    image: deepthi,
    logo: kLogo,
  },
  {
    name: "Sai Manikanta Chaliganti",
    location: "Kodad → United States",
    testimonial:
      "I am incredibly grateful to Vidhya Vaaradhi Overseas Consultancy for making my study abroad dream a reality.A special thanks to Sateesh Sir for guiding students toward success, Srilatha Ma’am for her patience and mentorship.",
    course: "Civil Engineering",
    university: "Cleaveland State university",
    image: sai,
    logo: cuLogo,
  },
];

const SuccessStories = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center">
        5,000+ <span className="text-orange-400">Success Stories</span>
      </h2>
      <p className="text-gray-600 text-center mt-2">From Dreamers to Achievers</p>

      {/* Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {successStories.map((story, index) => (
          <div
            key={index}
            className="bg-white p-6 shadow-md rounded-lg transition-transform transform hover:scale-105"
          >
            {/* Profile Section */}
            <div className="flex items-center space-x-4">
              <img
                src={story.image}
                alt={story.name}
                className="w-16 h-16 rounded-full object-cover"
              />
              <div>
                <h3 className="font-semibold text-gray-900">{story.name}</h3>
                <p className="text-sm text-gray-600">{story.location}</p>
              </div>
            </div>

            {/* Testimonial */}
            <p className="text-gray-700 mt-4">{story.testimonial}</p>

            {/* Course Badge & University Logo (Aligned in the Same Row) */}
            <div className="flex justify-between items-center mt-4">
              <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm">
                {story.course}
              </span>
              <img src={story.logo} alt={story.university} className="h-8 w-auto md:h-8 md:w-auto" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};


export default SuccessStories;
