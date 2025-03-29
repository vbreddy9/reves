import React, { useState } from "react";
import "react-phone-input-2/lib/style.css";
import Flag from "react-world-flags";

import ncLogo from "./assets/nc.svg";
import nytLogo from "./assets/nyt.png";
import nuLogo from "./assets/nu.png";
import aLogo from "./assets/aru.jpg";
import umLogo from "./assets/um.png";
import ubLogo from "./assets/ub.svg";
import auLogo from "./assets/fdu.svg";
import fuLogo from "./assets/fu.png";
import ruLogo from "./assets/ru.png";
import luLogo from "./assets/lu.png";
import tumLogo from "./assets/tum.png";
import thmLogo from "./assets/thm.png";
import quLogo from "./assets/aub.svg";
import nLogo from "./assets/nj.png";
import fcLogo from "./assets/fc.jpg";
import buLogo from "./assets/bu.png";
import kLogo from "./assets/ku.avif";
import fLogo from "./assets/fa.png";
import asuLogo from "./assets/asu.png";
import udLogo from "./assets/ud.png";
import ccLogo from "./assets/cc.png";
import dcuLogo from "./assets/dcu.png";
import dbsLogo from "./assets/dbs.webp";
import uotLogo from "./assets/uot.webp";
import dkiLogo from "./assets/dki.jpg";
import gcLogo from "./assets/gc.jpg";
import mtuLogo from "./assets/mtu.png";
import nciLogo from "./assets/nci.png";
import setLogo from "./assets/set.jpg";
import ugLogo from "./assets/ug.png";
import nwuLogo from "./assets/nwu.png";
import twuLogo from "./assets/twu.png";
import ulLogo from "./assets/ul.svg";
import hubLogo from "./assets/hub.svg";
import luhLogo from "./assets/luh.jpg";
import puLogo from "./assets/pu.jpg";
import ubgLogo from "./assets/ubg.png";
import augLogo from "./assets/aug.jpg";
import uauLogo from "./assets/uau.svg";
import upLogo from "./assets/up.svg";
import nuoLogo from "./assets/NULogo.png";
import deLogo from "./assets/de.png";
import mLogo from "./assets/mxu.png";
import niLogo from "./assets/nun.png";
import shuLogo from "./assets/shu.jpg";
import supLogo from "./assets/sup.png";
import tuLogo from "./assets/tu.png";
import cqLogo from "./assets/cq.svg";
import uowLogo from "./assets/uow.svg";
import vuLogo from "./assets/vu.svg";
import tuaLogo from "./assets/tua.png";
import scuLogo from "./assets/scu.png";
import deaLogo from "./assets/deakin.png";
import wLogo from "./assets/w.png";

const countries = [
  { name: "United Kingdom", code: "GB" },
  { name: "USA", code: "US" },
  { name: "Germany", code: "DE" },
  { name: "Canada", code: "CA" },
  { name: "Australia", code: "AU" },
  { name: "Ireland", code: "IE" },
];

const universities = {
  "United Kingdom": [
    { name: "Anglia Ruskin University", location: "Cambridge, United Kingdom", courses: "213+", logo: aLogo },
    { name: "Aston University", location: "England, United Kingdom", courses: "242+", logo: quLogo },
    { name: "BPP University", location: "Greater London, United Kingdom", courses: "33+", logo: buLogo },
    { name: "De Montfort University", location: "England, United Kingdom", courses: "300+", logo: deLogo },
    { name: "Middlesex University", location: "England, United Kingdom", courses: "112+", logo: mLogo },
    { name: "Northumbria University London Campus", location: "London, United Kingdom", courses: "39+", logo: niLogo },
    { name: "Sheffield Hallam University", location: "South Yorkshire, United Kingdom", courses: "463+", logo: shuLogo },
    { name: "Swansea University", location: "Wales, United Kingdom", courses: "273+", logo: supLogo },
    { name: "Teesside University", location: "North Yorkshire, United Kingdom", courses: "210+", logo: tuLogo },
  ],
  "USA": [
    { name: "University of Alabama Birmingham", location: "Alabama, USA", courses: "204+", logo: luLogo },
    { name: "Dayton university", location: "Ohio, USA", courses: "204+", logo: udLogo },
    { name: "University of Memphis", location: "Tennessee, USA", courses: "129+", logo: umLogo },
    { name: "New Jersey Institute of Technology", location: "New Jersey, USA", courses: "104+", logo: nLogo },
    { name: "Florida  Atlantic University", location: "California, USA", courses: "94+", logo: fLogo },
    { name: "Arizona state university", location: "Arizona, USA", courses: "278+", logo: asuLogo },
    { name: "University of Massachusetts Boston", location: "Massachusetts, USA", courses: "146+", logo: ubLogo },
    { name: "Kennesaw University", location: "Georgia, USA", courses: "780+", logo: kLogo },
    { name: "Rivier university", location: "New Hampshire, USA", courses: "23+", logo: ruLogo },
  ],
  "Germany": [
    { name: "Humboldt-Universität zu Berlin", location: "Berlin, Germany", courses: "186+", logo: hubLogo },
    { name: "Leibniz Universität Hannover", location: "Lower Saxony, Germany", courses: "87+", logo: luhLogo },
    { name: "Paderborn University", location: "North Rhine-Westphalia, Germany", courses: "62+", logo: puLogo },
    { name: "Technical University Munich", location: "Bavaria, Germany", courses: "178+", logo: tumLogo },
    { name: "THM University of Göttingen", location: "Lower Saxony, Germany", courses: "59+", logo: thmLogo },
    { name: "Allensbach Hochschule", location: "Baden-Württemberg, Germany", courses: "87+", logo: augLogo },
    { name: "University of Augsburg", location: "Bavaria, Germany", courses: "33+", logo: uauLogo },
    { name: "University of Bremen", location: "Bremen, Germany", courses: "122+", logo: ubgLogo },
    { name: "University of Potsdam", location: "Brandenburg, Germany", courses: "8+", logo:upLogo },
  ],
  "Canada": [
    { name: "University of Niagara Falls", location: "Ontario, Canada", courses: "200+", logo: ncLogo },
    { name: "Fairleigh Dickinson university ", location: "Vancouver, Canada", courses: "100+", logo: auLogo },
    { name: "Niagara University ", location: "Ontario, Canada", courses: "112+", logo: nuoLogo },
    { name: "New York Institute of Technology ", location: "British Columbia, Canada", courses: "100+", logo: nytLogo },
    { name: "Nipissing University ", location: "Ontario, Canada", courses: "100+", logo: nuLogo },
    { name: "Northeastern University ", location: "Toronto, Canada", courses: "160+", logo: nwuLogo },
    { name: "Trinity western university ", location: "British Columbia, Canada", courses: "66+", logo: twuLogo },
    { name: "Conestoga College ", location: "Ontario, Canada", courses: "230+", logo: ccLogo },
    { name: "Fanshawe College ", location: "Ontario, Canada", courses: "200+", logo: fcLogo },
  ],
  "Australia": [
    { name: "CQ University", location: "Rockhampton, Sydney, Melbourne, Brisbane, Australia", courses: "409+", logo: cqLogo },
    { name: "Flinders University", location: "South Australia, Australia", courses: "500+", logo: fuLogo },
    { name: "Southern Cross University", location: "New South Wales, Queensland, New South Wales, Australia", courses: "16+", logo: scuLogo },
    { name: "Victoria University", location: "Victoria, Australia", courses: "22+", logo: vuLogo },
    { name: "Torrens University Australia", location: "Adelaide, Sydney, Melbourne, Brisbane, Australia", courses: "88+", logo: tuaLogo },
    { name: "Deakin University", location: "Victoria, Australia", courses: "196+", logo: deaLogo },
    { name: "University of Tasmania", location: "Tasmania, Australia", courses: "60+", logo: uotLogo },
    { name: "University of Wollongong", location: "New South Wales, Australia", courses: "292+", logo: uowLogo },
    { name: "Western Sydney University", location: "New South Wales, Australia", courses: "175+", logo: wLogo },
  ],
  "Ireland": [
    { name: "University of Limerick", location: "Munster, Ireland", courses: "143+", logo: ulLogo },
    { name: "Dublin City University", location: "Dublin, Ireland", courses: "90+", logo: dcuLogo },
    { name: "Dublin Business School - DBS", location: "Dublin, Ireland", courses: "100+", logo: dbsLogo },
    { name: "Dundalk Institute of Technology (DKIT)", location: "Dundalk, Ireland", courses: "70+", logo: dkiLogo },
    { name: "Griffith College", location: "Dublin, Limerick, Cork, Ireland", courses: "79+", logo: gcLogo },
    { name: "Munster Technological University (CIT)", location: "Cork, Kerry, Ireland", courses: "146+", logo: mtuLogo },
    { name: "National College of Ireland (NCI)", location: "Dublin, Ireland", courses: "59+", logo: nciLogo },
    { name: "South East Technological University", location: "Waterford, Ireland", courses: "57+", logo: setLogo },
    { name: "University of Galway", location: "Connacht, Ireland", courses: "52+", logo: ugLogo },
  ],
};

const UniversitySection = () => {
  const [selectedCountry, setSelectedCountry] = useState("United Kingdom");

  return (
    <section className="bg-blue-50 py-8 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6">
          Top Universities to <span className="text-orange-300">Study Abroad</span>
        </h2>

        {/* Country Selection Tabs */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-6 mb-6">
          {countries.map((country) => (
            <button
              key={country.name}
              className={`flex items-center space-x-2 text-sm sm:text-lg font-medium px-2 sm:px-3 py-1 sm:py-2 rounded-lg ${
                selectedCountry === country.name ? "text-orange-300 border-b-2 border-blue-600" : "text-gray-500 hover:text-orange-300"
              }`}
              onClick={() => setSelectedCountry(country.name)}
            >
              <Flag code={country.code} className="w-6 h-6" />
              <span>{country.name}</span>
            </button>
          ))}
        </div>
        {/* University Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {universities[selectedCountry]?.map((uni, index) => (
            <div
              key={index}
              className="flex items-center space-x-3 p-3 sm:p-4 bg-white rounded-lg shadow-md 
              transition-transform transform hover:scale-105 duration-300 border"
            >
              {/* University Logo */}
              <div className="w-12 h-12 sm:w-16 sm:h-16 flex-shrink-0">
                {uni.logo.includes("/assets/") ? (
                  <img src={uni.logo} alt={uni.name} className="w-full h-full object-contain rounded-md" />
                ) : (
                  <span className="text-3xl sm:text-4xl">{uni.logo}</span>
                )}
              </div>

              {/* University Details */}
              <div className="text-left">
                <h3 className="text-sm sm:text-lg font-semibold text-gray-900">{uni.name}</h3>
                <p className="text-xs sm:text-sm text-gray-600">{uni.location}</p>
                <span className="bg-yellow-200 text-yellow-800 text-xs sm:text-sm px-2 py-1 rounded">
                  {uni.courses} Courses
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UniversitySection;