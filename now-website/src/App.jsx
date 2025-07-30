import React from "react";
import NavBar from "./components/NavBar";
import HeroSection from "./components/HeroSection";
// import FeatureSection from "./components/FeatureSection";
import FeatureSection from "./FeatureSection";
import PricingSection from "./components/PricingSection";
import MobileSection from "./MobileSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import BackToTopButton from "./components/BackToTopButton";
import ScrollProgressBar from "./components/ScrollProgressBar";
// import "./App.css";
import "./index.css";

function App() {
  return (
    <div className="bg-[#FCFBF4]">
      
      <NavBar />
      <ScrollProgressBar />
      <HeroSection />
      <FeatureSection />
      <PricingSection />
      <MobileSection />
      <ContactSection />
      <Footer />
      <BackToTopButton />
    </div>
  );
}

export default App;
