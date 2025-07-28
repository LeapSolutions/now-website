import React, { useState } from "react";
import logo from "../assets/icons/Now.svg";


const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 w-full bg-white shadow-sm py-3 px-4 md:px-10 lg:px-28 ">
      <div className="flex w-full items-center justify-between">
     
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="h-7 w-auto object-contain" />
        </div>


        <nav className="hidden md:flex justify-end items-center gap-6 w-1/2">
          <a
            href="#funktionsOversigt"
            className="text-gray-700 hover:text-orange-500 font-medium transition"
          >
            Funktionsoversigt
          </a>
          <a
            href="#priser"
            className="text-gray-700 hover:text-orange-500 font-medium transition"
          >
            Priser
          </a>
          <a
            href="#kontakt"
            className="text-gray-700 hover:text-orange-500 font-medium transition"
          >
            Kontakt
          </a>
          <a
            href="#signup"
            className="ml-2 bg-orange-400 hover:bg-orange-500 text-white px-4 py-2 rounded font-semibold transition"
          >
            Prøv gratis
          </a>
          <a
            href="#login"
            className="ml-2 border border-orange-400 text-orange-500 px-4 py-2 rounded font-semibold hover:bg-orange-50 transition"
          >
            Login
          </a>
        </nav>

       
        <button
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 focus:outline-none z-40"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label="Åbn menu"
        >
          <span className={`block h-0.5 w-6 bg-gray-800 transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`}></span>
          <span className={`block h-0.5 w-6 bg-gray-800 my-1 transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}></span>
          <span className={`block h-0.5 w-6 bg-gray-800 transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}></span>
        </button>

  
        <div
          className={`fixed inset-0 bg-black/75 z-30 transition-opacity duration-300 ${menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
          onClick={() => setMenuOpen(false)}
        />


        <nav
          className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-40 transform transition-transform duration-300 ${menuOpen ? "translate-x-0" : "translate-x-full"}`}
        >

          {menuOpen && (
            <button
              className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center text-gray-700 hover:text-orange-500 focus:outline-none"
              onClick={() => setMenuOpen(false)}
              aria-label="Luk menu"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
            </button>
          )}
          <div className="flex flex-col gap-6 p-8 pt-24">
            <a
              href="#features"
              className="text-gray-700 hover:text-orange-500 font-medium transition"
              onClick={() => setMenuOpen(false)}
            >
              Funktionsoversigt
            </a>
            <a
              href="#pricing"
              className="text-gray-700 hover:text-orange-500 font-medium transition"
              onClick={() => setMenuOpen(false)}
            >
              Priser
            </a>
            <a
              href="#contact"
              className="text-gray-700 hover:text-orange-500 font-medium transition"
              onClick={() => setMenuOpen(false)}
            >
              Kontakt
            </a>
            <a
              href="#signup"
              className="bg-orange-400 hover:bg-orange-500 text-white px-4 py-2 rounded font-semibold transition"
              onClick={() => setMenuOpen(false)}
            >
              Prøv gratis
            </a>
            <a
              href="#login"
              className="border border-orange-400 text-orange-500 px-4 py-2 rounded font-semibold hover:bg-orange-50 transition"
              onClick={() => setMenuOpen(false)}
            >
              Login
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
