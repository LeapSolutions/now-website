import React from "react";
import NavBar from "./NavBar";
import HeroSection from "./HeroSection";
import FeatureSection from "./FeatureSection";
import PricingSection from "./PricingSection";
import MobileSection from "./MobileSection";
// import "./App.css";
import "./index.css";

function App() {
  return (
    <div>
      <NavBar />
      <HeroSection />
      <FeatureSection />
      <PricingSection />
      <MobileSection />
    </div>
  );
}

export default App;
