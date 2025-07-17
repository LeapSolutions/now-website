const Footer = () => {
  return (
    <footer id="kontakt" className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">N</span>
              </div>
              <span className="text-white font-bold text-xl">NOW</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              NOW er en avanceret platform til tidsregistrering og planlægning 
              der hjælper teams med at optimere deres produktivitet.
            </p>
            <div className="text-sm text-gray-400">
              <p>© 2024 - copyright NOW</p>
            </div>
          </div>
          
          {/* Navigation */}
          <div>
            <h4 className="font-semibold mb-4">Hurtig navigation</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#funktioner" className="text-gray-400 hover:text-white transition-colors">Funktioner</a></li>
              <li><a href="#priser" className="text-gray-400 hover:text-white transition-colors">Priser</a></li>
              <li><a href="#support" className="text-gray-400 hover:text-white transition-colors">Support</a></li>
              <li><a href="#blog" className="text-gray-400 hover:text-white transition-colors">Blog</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">Om os</a></li>
              <li><a href="#careers" className="text-gray-400 hover:text-white transition-colors">Karriere</a></li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Kontakt os</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>📞 +45 12 34 56 78</li>
              <li>✉️ info@now.dk</li>
              <li>📍 Aalborg, Danmark</li>
            </ul>
          </div>
          
          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4">Politikker & Betingelser</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#privacy" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#terms" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#cookies" className="text-gray-400 hover:text-white transition-colors">Cookie Policy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            Udviklet med ❤️ i Danmark | Alle priser er ekskl. moms
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;