import React, { useState, useEffect } from "react";
import "react-phone-input-2/lib/style.css";
import logo1 from "./assets/Elevation_2.webp";
import { MapPin } from "lucide-react";

const StudyAbroadForm = () => {
  
    
  return (
    <div
      className="relative w-full min-h-screen flex items-center justify-center bg-cover bg-center px-4 sm:px-6 lg:px-12 py-6"
      style={{ backgroundImage: `url(${logo1})` }}
    >
      <div className="absolute inset-0 bg-black/70"></div>
      <div className="relative w-full max-w-6xl flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0 md:space-x-6">
        <div className="p-4 md:p-6 lg:p-8 text-white max-w-md md:w-1/2 z-10 text-center md:text-left border border-solid bg-black">
          <h1 className="text-2xl md:text-4xl font-bold leading-snug">
            SKY HABITAT by Urbanrise <br />
            <span className="inline-flex items-center text-green-500 text-sm">
            <MapPin className="w-4 h-4 mr-1 -mt-px" />
            Miyapur, Hyderabad
          </span>
          <hr></hr>
          </h1>
          <ul className="mt-4 space-y-3 text-md">
            {["PAY only 10% NOW", "Luxury 3 BHK Residences", "Surrounded by Top MNCs", "Sky Amenities", "Terrace Amenities", "90% On Possession*"].map((item, index) => (
              <li key={index} className="flex items-center justify-center md:justify-start">
                <span className="text-green-400 text-xl md:text-2xl mr-2">✔</span> {item}
              </li>
            ))}
          </ul>
          <hr></hr>
          <div className="mt-6 flex">
            <div className="bg-green-100 text-green-600 px-4 py-2 rounded-full shadow-sm border border-green-300">
              <h2 className="text-sm font-semibold whitespace-nowrap">
                Price Starting from ₹1.24 Cr* Onwards
              </h2>
            </div>
          </div>

        </div>

        
      </div>
    </div>
  );
};

export default StudyAbroadForm;
