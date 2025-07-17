import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="min-h-screen bg-hero-gradient flex items-center justify-center relative overflow-hidden">
      <div className="container mx-auto px-6 py-20 pt-32">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Digital tidsregistrering og planlægning
          </h1>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-light mb-8 opacity-90">
            for teams og virksomheder
          </h2>
          
          <p className="text-lg md:text-xl mb-12 opacity-80 max-w-2xl mx-auto leading-relaxed">
            Optimer dit teams produktivitet med avanceret tidsregistrering og intelligent 
            planlægning. Få overblik over projekter, deadlines og ressourcer på én platform.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="xl" className="text-lg">
              Prøv nu
            </Button>
            <Button variant="white" size="xl" className="text-lg">
              Se demo
            </Button>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-white/5 rounded-full blur-2xl"></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white/10 rounded-full blur-lg"></div>
    </section>
  );
};

export default HeroSection;