import React from "react";
import NavBar from "./components/NavBar";
import HeroSection from "./components/HeroSection";
import FeatureSection from "./components/FeatureSection";
import PricingSection from "./components/PricingSection"
// import "./App.css";
import "./index.css";

function App() {
  return (
    <div>
      <NavBar />
      <HeroSection />
      <FeatureSection />
      <PricingSection/>
    </div>
  );
}

export default App;
