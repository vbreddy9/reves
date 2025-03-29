import React, { useState, useEffect } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import mlogo from "./assets/vv-logo.png";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 flex items-center justify-between py-2 px-4 md:px-6 shadow-md transition-all duration-300 ${
          isScrolled ? "bg-white shadow-lg" : "bg-white"
        }`}
      >
        {/* Logo Section */}
        <div className="flex">
          <a href="/">
            <img
              src={mlogo}
              alt="vidhyavaaradi Logo"
              className="w-auto h-auto max-w-[120px] max-h-[60px] md:max-w-[140px] md:max-h-[70px]"
            />
          </a>
        </div>

        {/* Phone number button */}
        <a
          href="tel:+919100050502"
          className="flex items-center justify-center bg-white border border-black rounded-full hover:bg-gray-100 transition px-3 py-1 md:px-4 md:py-2"
        >
          {/* Desktop - Full Number */}
          <span className="hidden md:flex items-center text-black text-lg font-black">
            <FaPhoneAlt className="mr-2" /> +91-91000 50502
          </span>

          {/* Mobile - Shortened Version */}
          <span className="flex md:hidden items-center text-black font-semibold text-sm">
            <FaPhoneAlt className="mr-2" /> Call Us
          </span>
        </a>
      </header>

      {/* Adding margin below navbar to prevent overlapping */}
      <div className="mb-14"></div>
    </>
  );
};

export default Navbar;
