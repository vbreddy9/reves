import React, { useState, useEffect } from "react";
import { FaPhoneAlt, FaBars, FaTimes } from "react-icons/fa";
import mlogo from "./assets/logo.jpeg";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false); // Close mobile menu after click
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 flex items-center justify-between py-2 px-4 md:px-12 shadow-md transition-all duration-300 ${
        isScrolled ? "bg-white shadow-lg" : "bg-white"
      }`}
    >
      <div className="flex items-center">
        <a href="/">
          <img
            src={mlogo}
            alt="Cinq Logo"
            className="w-auto h-auto max-w-[120px] max-h-[60px] md:max-w-[160px] md:max-h-[70px]"
          />
        </a>
      </div>

      {/* Mobile Menu Toggle */}
      <div className="md:hidden">
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="text-2xl focus:outline-none"
        >
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Desktop Menu */}
      <nav
        className={`hidden md:flex items-center space-x-4 ${
          isScrolled ? "text-black" : "text-black"
        }`}
      >
        <button onClick={() => scrollToSection("project-overview")} className="px-4 py-2 border border-transparent border rounded hover:border-green-700 transition duration-300">Project Overview</button>
        <button onClick={() => scrollToSection("amenities")}  className="px-4 py-2 border border-transparent border rounded hover:border-green-700 transition duration-300">Highlights</button>
        <button onClick={() => scrollToSection("pricing")}className="px-4 py-2 border border-transparent border rounded hover:border-green-700 transition duration-300">Pricing</button>
        <button onClick={() => scrollToSection("nri-support")} className="px-4 py-2 border border-transparent border rounded hover:border-green-700 transition duration-300">NRI Support</button>
        <button onClick={() => scrollToSection("connectivity")} className="px-4 py-2 border border-transparent border rounded hover:border-green-700 transition duration-300">Connectivity</button>
        <button onClick={() => scrollToSection("about")} className="px-4 py-2 border border-transparent border rounded hover:border-green-700 transition duration-300">About</button>
        <a
            href="tel:+919100298446"
            className="blinking-button px-4 py-2 text-white rounded-full shadow-md hover:opacity-90 transition duration-300"
            style={{ background: 'linear-gradient(to right, #fa6a04, #ff0000)' }}
          >
            +91-9100298446
          </a>

        
      

      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed top-16 left-0 w-full bg-white shadow-md md:hidden flex flex-col items-center space-y-4 py-4">
          <button onClick={() => scrollToSection("project-overview")}>Project Overview</button>
          <button onClick={() => scrollToSection("amenities")}>Highlights</button>
          <button onClick={() => scrollToSection("pricing")}>Pricing</button>
          <button onClick={() => scrollToSection("nri-support")}>NRI Support</button>
          <button onClick={() => scrollToSection("connectivity")}>Connectivity</button>
          <button onClick={() => scrollToSection("about")}>About</button>
          <a
            href="callto:+919392925831"
            className="blinking-button px-4 py-2 text-white rounded-full shadow-md hover:opacity-90 transition duration-300"
            style={{ backgroundColor: '#4f1021' }}
          >
            Call +91-9392925831
          </a>

        </div>
      )}

      {/* Blinking animation style */}
      <style jsx>{`
        .blinking-button {
          animation: blinker 1.2s linear infinite;
        }
        @keyframes blinker {
          50% {
            opacity: 0.5;
          }
        }
      `}</style>
    </header>
  );
};

export default Navbar;
