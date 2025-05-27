import React from "react";
import { MapPin, Building2, Ruler, Layers, CalendarDays, IndianRupee } from "lucide-react";

const projectDetails = [
  { label: "Type of Project", value: "Apartments", icon: <Building2 className="w-4 h-4" style={{ color: '#4f1021' }}/> },
  { label: "Location", value: "Rai Durgum, Gachibowli, Hyderabad - 500032.", icon: <MapPin className="w-4 h-4" style={{ color: '#4f1021' }}/> },
  { label: "Land Area", value: "7 Acres", icon: <Ruler className="w-4 h-4" style={{ color: '#4f1021' }} /> },
  { label: "No. of Towers", value: "03 Towers", icon: <Layers className="w-4 h-4" style={{ color: '#4f1021' }}/> },
  { label: "Structure", value: "45 Floors" },
  { label: "Unit Variants", value: "Luxury 4 BHK Residences" },
  { label: "Size Range", value: "5430 - 6605 Sq.Ft." },
  { label: "Amenities", value: "150+ World-Class Amenities." },
  
];

const ProjectOverview = () => {
  return (
    <div className="max-w-3xl mx-auto mt-10 px-1 p-6">
      <div className="bg-white rounded-xl shadow-lg p-4 border">
        <h2 className="text-2xl font-bold text-center mb-6">Project <span style={{ color: '#cb8904' }}>Overview</span></h2>
        <div className="space-y-4">
          {projectDetails.map((item, index) => (
            <div
              key={index}
              className="flex flex-col sm:flex-row sm:justify-between items-start sm:items-center bg-gray-50 hover:bg-green-50 p-3 rounded-lg transition"
            >
              <div className="flex items-center font-semibold text-gray-700 gap-2">
                {item.icon && item.icon}
                {item.label}:
              </div>
              <div className="text-gray-900 text-sm sm:text-base mt-1 sm:mt-0">{item.value}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectOverview;
