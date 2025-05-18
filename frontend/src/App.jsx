import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import StudyAbroadForm from "./StudyAbroadForm";
import AdvantageSection from "./AdvantageSection";
import StudyAbroad from "./StudyAbroad";
import PrivacyPolicy from "./PrivacyPolicy";
import TermsAndConditions from "./TermsAndConditions";
import ProjectOverview from "./ProjectOverview";
import AmenitiesSection from "./AmenitiesSection";
import Banner from "./Banner";
import ConnectivitySection from "./ConnectivitySection";
import PricingSection from "./PricingSection";
import WhatsAppButton from "./WhatsAppButton";

const Home = () => (
  <>
    <StudyAbroadForm />
    <div id="project-overview">
      <h2 className="section-heading"></h2>
      <ProjectOverview />
    </div>
    <div id="amenities">
      <h2 className="section-heading"></h2>
      <AmenitiesSection />
    </div>
    <div id="pricing">
      <h2 className="section-heading"></h2>
      <PricingSection />
    </div>
    <div id="nri-support">
      <h2 className="section-heading"></h2>
      <AdvantageSection />
    </div>
    <div id="banner-section">
      <Banner />
    </div>
    <div id="connectivity">
      <h2 className="section-heading"></h2>
      <ConnectivitySection />
    </div>
    <div id="about">
      <h2 className="section-heading"></h2>
      <StudyAbroad />
    </div>
    <WhatsAppButton/>
  </>
);

// This wrapper allows useLocation to work at the top level
const AppContent = () => {
  const location = useLocation();

  // Define routes where navbar should be hidden
  const hideNavbarOn = ["/privacy-policy", "/terms-conditions"];
  const shouldHideNavbar = hideNavbarOn.includes(location.pathname);

  return (
    <>
      {!shouldHideNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-conditions" element={<TermsAndConditions />} />
      </Routes>
      <Footer />
    </>
  );
};

const App = () => (
  <Router>
    <AppContent />
  </Router>
);

export default App;
