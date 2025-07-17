import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="absolute top-0 w-full z-10 bg-white/10 backdrop-blur-sm border-b border-white/20">
      <div className="container mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
              <span className="text-primary font-bold text-lg">N</span>
            </div>
            <span className="text-white font-bold text-xl">NOW</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#funktioner" className="text-white hover:text-white/80 transition-colors">
              Funktionsoverview
            </a>
            <a href="#priser" className="text-white hover:text-white/80 transition-colors">
              Priser
            </a>
            <a href="#kontakt" className="text-white hover:text-white/80 transition-colors">
              Kontakt
            </a>
          </div>
          
          <div className="flex items-center space-x-4">
            <Button variant="white" size="sm">
              Log ind
            </Button>
            <Button variant="accent" size="sm">
              Kom i gang
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;