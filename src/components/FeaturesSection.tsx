import { Clock, Users, BarChart3, Calendar, Shield, Smartphone } from "lucide-react";
import { useState } from "react";

const features = [
  {
    icon: Clock,
    title: "Tidsregistrering",
    description: "Nøjagtig tracking af arbejdstid med automatisk rapportering og analyse.",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600&h=400&fit=crop"
  },
  {
    icon: Users,
    title: "Team Koordination", 
    description: "Koordiner dit team effektivt med delte kalendre og opgavestyring.",
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=600&h=400&fit=crop"
  },
  {
    icon: BarChart3,
    title: "Analyse & Rapporter",
    description: "Detaljerede rapporter og indsigter til bedre forretningsbeslutninger.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop"
  },
  {
    icon: Calendar,
    title: "Planlægning",
    description: "Avanceret planlægning med ressourcestyring og deadline tracking.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop"
  },
  {
    icon: Shield,
    title: "Sikkerhed",
    description: "Enterprise-niveau sikkerhed med data kryptering og backup.",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=400&fit=crop"
  },
  {
    icon: Smartphone,
    title: "Mobil App",
    description: "Fuld funktionalitet på mobil og tablet med offline support.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop"
  }
];

const FeaturesSection = () => {
  const [activeFeature, setActiveFeature] = useState(0);

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <div className="grid grid-cols-3 gap-6 mb-12">
              {features.map((feature, index) => (
                <button
                  key={index}
                  onClick={() => setActiveFeature(index)}
                  className={`p-6 rounded-xl transition-all duration-300 ${
                    activeFeature === index 
                      ? 'bg-primary/10 border-2 border-primary' 
                      : 'bg-card hover:bg-card/80 border-2 border-transparent'
                  }`}
                >
                  <feature.icon className={`w-8 h-8 mx-auto ${
                    activeFeature === index ? 'text-primary' : 'text-muted-foreground'
                  }`} />
                </button>
              ))}
            </div>
            
            <div>
              <h3 className="text-3xl font-bold mb-4">
                {features[activeFeature].title}
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {features[activeFeature].description}
              </p>
            </div>
          </div>
          
          <div className="relative">
            <img 
              src={features[activeFeature].image}
              alt={features[activeFeature].title}
              className="w-full h-96 object-cover rounded-xl shadow-medium transition-opacity duration-300"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;