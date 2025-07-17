import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import ProductShowcase from "@/components/ProductShowcase";
import PricingSection from "@/components/PricingSection";
import MobileSection from "@/components/MobileSection";
import TeamSection from "@/components/TeamSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <FeaturesSection />
      <ProductShowcase />
      <PricingSection />
      <MobileSection />
      <TeamSection />
      <Footer />
    </div>
  );
};

export default Index;
