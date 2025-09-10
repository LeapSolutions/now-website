import React from "react";
import NavBar from "./components/NavBar";
import HeroSection from "./components/HeroSection";
import FeatureSection from "./components/FeatureSection";
import PricingSection from "./components/PricingSection";
import MobileSection from "./MobileSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import BackToTopButton from "./components/BackToTopButton";
import ScrollProgressBar from "./components/ScrollProgressBar";
import NavatticFeatureSection from "./components/NavatticFeatureSection";
import UserOverview from "./components/UserOverview";
import AdminOverview from "./components/AdminOverview";
import GbtContactSection from "./components/ContactSectionn"

// import "./App.css";
import "./index.css";


function App() {
  return (
    <div className="bg-[#FCFBF4]">
      <NavBar />
      <ScrollProgressBar />
      <HeroSection />
      <FeatureSection />
      <NavatticFeatureSection />
      <MobileSection />
      <UserOverview />
      <AdminOverview />
      <PricingSection />
      {/* <ContactSection /> */}
      <GbtContactSection/>
      <Footer/>
      <BackToTopButton />
    </div>
  );
}

export default App;
