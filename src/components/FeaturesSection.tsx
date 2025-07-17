import { Clock, Users, BarChart3, Calendar, Shield, Smartphone } from "lucide-react";

const features = [
  {
    icon: Clock,
    title: "Tidsregistrering",
    description: "Nøjagtig tracking af arbejdstid med automatisk rapportering og analyse."
  },
  {
    icon: Users,
    title: "Team Koordination",
    description: "Koordiner dit team effektivt med delte kalendre og opgavestyring."
  },
  {
    icon: BarChart3,
    title: "Analyse & Rapporter",
    description: "Detaljerede rapporter og indsigter til bedre forretningsbeslutninger."
  },
  {
    icon: Calendar,
    title: "Planlægning",
    description: "Avanceret planlægning med ressourcestyring og deadline tracking."
  },
  {
    icon: Shield,
    title: "Sikkerhed",
    description: "Enterprise-niveau sikkerhed med data kryptering og backup."
  },
  {
    icon: Smartphone,
    title: "Mobil App",
    description: "Fuld funktionalitet på mobil og tablet med offline support."
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Alt hvad dit team har brug for
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            En komplet løsning til tidsregistrering, planlægning og teamwork 
            der vokser med din virksomhed.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-card p-8 rounded-xl shadow-soft hover:shadow-medium transition-all duration-300 group hover:-translate-y-1"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;