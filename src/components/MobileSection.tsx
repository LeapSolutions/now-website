import { Button } from "@/components/ui/button";
import { Smartphone, Download } from "lucide-react";

const MobileSection = () => {
  return (
    <section className="py-20 bg-blue-gradient relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Registrer arbejdstimer direkte fra mobilen
            </h2>
            <p className="text-xl mb-8 opacity-90 leading-relaxed">
              Med vores mobile app kan dit team registrere tid, se projekter og 
              holde styr på deadlines - uanset hvor de befinder sig.
            </p>
            
            <ul className="space-y-4 mb-8">
              <li className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <span>Offline funktionalitet</span>
              </li>
              <li className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <span>Push notifikationer</span>
              </li>
              <li className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <span>Sync på tværs af enheder</span>
              </li>
            </ul>
            
            <Button variant="white" size="xl" className="text-lg">
              <Download className="w-5 h-5 mr-2" />
              Download app
            </Button>
          </div>
          
          <div className="relative flex justify-center">
            <div className="relative">
              {/* Phone mockup */}
              <div className="w-64 h-128 bg-gray-900 rounded-3xl p-2 shadow-strong">
                <div className="w-full h-full bg-white rounded-2xl p-4 relative overflow-hidden">
                  {/* Phone screen content */}
                  <div className="text-center mb-6">
                    <div className="w-12 h-12 bg-primary rounded-xl mx-auto mb-3 flex items-center justify-center">
                      <Smartphone className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">Tidsregistrering</h3>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="bg-gray-100 rounded-lg p-3">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-gray-900">Website Projekt</span>
                        <span className="text-sm text-gray-600">2t 15m</span>
                      </div>
                    </div>
                    <div className="bg-gray-100 rounded-lg p-3">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-gray-900">Meeting</span>
                        <span className="text-sm text-gray-600">45m</span>
                      </div>
                    </div>
                    <div className="bg-primary/10 rounded-lg p-3 border border-primary/20">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-primary">Aktiv: Marketing</span>
                        <span className="text-sm text-primary font-mono">1t 23m</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="bg-primary rounded-lg p-3 text-center">
                      <span className="text-white font-medium">Stop timer</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-white/10 rounded-full blur-lg"></div>
              <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-white/5 rounded-full blur-xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MobileSection;