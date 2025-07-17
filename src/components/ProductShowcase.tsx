import { Card } from "@/components/ui/card";

const ProductShowcase = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Tidsregistrering
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Nem og intuitiv tidsregistrering der gør det nemt for dit team 
            at tracke arbejdstid på projekter og opgaver.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-white text-sm font-bold">1</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Start timer med ét klik</h3>
                <p className="text-muted-foreground">
                  Simpel og hurtig tidsregistrering direkte fra din desktop eller mobil.
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-white text-sm font-bold">2</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Automatisk kategorisering</h3>
                <p className="text-muted-foreground">
                  AI-drevet kategorisering af opgaver baseret på tidligere aktiviteter.
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-white text-sm font-bold">3</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Detaljerede rapporter</h3>
                <p className="text-muted-foreground">
                  Få indsigt i produktivitet og tidsforbrug med avancerede analyser.
                </p>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <Card className="p-8 shadow-strong bg-white">
              <div className="space-y-6">
                {/* Mock interface */}
                <div className="flex items-center justify-between">
                  <h4 className="font-semibold">Aktive timers</h4>
                  <div className="text-sm text-muted-foreground">I dag: 6t 32m</div>
                </div>
                
                <div className="space-y-4">
                  {[
                    { project: "Website Redesign", time: "2t 15m", color: "bg-primary" },
                    { project: "Marketing Campaign", time: "1t 45m", color: "bg-accent" },
                    { project: "Client Meeting", time: "45m", color: "bg-green-500" }
                  ].map((item, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <div className={`w-3 h-3 rounded-full ${item.color}`}></div>
                        <span className="font-medium">{item.project}</span>
                      </div>
                      <span className="text-sm font-mono">{item.time}</span>
                    </div>
                  ))}
                </div>
                
                <div className="flex space-x-3">
                  <div className="flex-1 h-10 bg-primary rounded-lg flex items-center justify-center text-white font-medium">
                    Stop timer
                  </div>
                  <div className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center">
                    <div className="w-2 h-2 bg-muted-foreground rounded-full"></div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;