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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Fuld adgang til tidsregistrering, rapportering og planlægning
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Vælg den plan der passer til dit teams størrelse og behov. Start gratis og opgrader når dit team vokser.
            </p>
            <Button variant="hero" size="xl" className="text-lg">
              Start gratis i dag
            </Button>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Free Plan */}
            <Card className="p-6 relative">
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-primary mb-2">GRATIS</h3>
                <p className="text-sm text-muted-foreground mb-4">Til mindre teams</p>
                
                <div className="mb-4">
                  <span className="text-3xl font-bold">0</span>
                  <span className="text-muted-foreground text-sm ml-1">kr/måned</span>
                </div>
              </div>
              
              <ul className="space-y-3 mb-6 text-sm">
                {freeFeatures.map((feature, index) => (
                  <li key={index} className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Button variant="outline" size="sm" className="w-full">
                Start gratis
              </Button>
            </Card>

            {/* Premium Plan */}
            <Card className="p-6 relative border-primary shadow-medium">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-medium">
                  Mest populær
                </span>
              </div>
              
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-primary mb-2">PREMIUM</h3>
                <p className="text-sm text-muted-foreground mb-4">Til voksende teams</p>
                
                <div className="mb-4">
                  <span className="text-3xl font-bold">300</span>
                  <span className="text-muted-foreground text-sm ml-1">kr/bruger/måned</span>
                </div>
              </div>
              
              <ul className="space-y-3 mb-6 text-sm">
                {premiumFeatures.slice(0, 5).map((feature, index) => (
                  <li key={index} className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Button variant="hero" size="sm" className="w-full">
                Start prøveperiode
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;