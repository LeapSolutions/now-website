import React from 'react';

const Header = () => (
  <header className="sticky top-0 z-30 w-full bg-white shadow-sm">
    <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
      {/* Logo */}
      <div className="flex items-center gap-2 text-2xl font-bold text-black">
        <span className="text-orange-500">N</span>
        <span className="text-black">O</span>
        <span className="text-blue-600">W</span>
      </div>
      {/* Navigation */}
      <nav className="flex items-center gap-4">
        <a href="#features" className="text-gray-700 hover:text-orange-500 font-medium transition">Funktionsoversigt</a>
        <a href="#pricing" className="text-gray-700 hover:text-orange-500 font-medium transition">Priser</a>
        <a href="#contact" className="text-gray-700 hover:text-orange-500 font-medium transition">Kontakt</a>
        <a href="#signup" className="ml-2 bg-orange-400 hover:bg-orange-500 text-white px-4 py-2 rounded font-semibold transition">Prøv gratis</a>
        <a href="#login" className="ml-2 border border-orange-400 text-orange-500 px-4 py-2 rounded font-semibold hover:bg-orange-50 transition">Login</a>
      </nav>
    </div>
  </header>
);

export default Header; 