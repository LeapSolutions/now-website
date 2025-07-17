import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check } from "lucide-react";

const PricingSection = () => {
  const freeFeatures = [
    "Op til 3 brugere",
    "Basis tidsregistrering",
    "Simple rapporter",
    "Email support",
    "Mobile app adgang"
  ];

  const premiumFeatures = [
    "Unlimited brugere",
    "Avanceret planlægning",
    "Detaljerede rapporter",
    "API integration",
    "Priority support",
    "Team collaboration tools",
    "Custom workflows",
    "Advanced analytics"
  ];

  return (
    <section id="priser" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Fuld adgang til tidsregistrering, rapportering og planlægning
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Vælg den plan der passer til dit teams størrelse og behov.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Free Plan */}
          <Card className="p-8 relative">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-primary mb-2">GRATIS</h3>
              <p className="text-muted-foreground mb-6">Til mindre teams der vil komme i gang</p>
              
              <div className="mb-6">
                <span className="text-4xl font-bold">0</span>
                <span className="text-muted-foreground ml-1">kr/måned</span>
              </div>
            </div>
            
            <ul className="space-y-4 mb-8">
              {freeFeatures.map((feature, index) => (
                <li key={index} className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            
            <Button variant="outline" size="lg" className="w-full">
              Start gratis
            </Button>
          </Card>

          {/* Premium Plan */}
          <Card className="p-8 relative border-primary shadow-medium">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <span className="bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-medium">
                Mest populær
              </span>
            </div>
            
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-primary mb-2">300KR</h3>
              <p className="text-muted-foreground mb-6">Til voksende teams med avancerede behov</p>
              
              <div className="mb-6">
                <span className="text-4xl font-bold">300</span>
                <span className="text-muted-foreground ml-1">kr/bruger/måned</span>
              </div>
            </div>
            
            <ul className="space-y-4 mb-8">
              {premiumFeatures.map((feature, index) => (
                <li key={index} className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            
            <Button variant="hero" size="lg" className="w-full">
              Start 14-dages gratis prøveperiode
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;