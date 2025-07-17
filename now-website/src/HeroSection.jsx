import React from 'react';

const HeroSection = () => (
  <section className="relative w-full h-[60vh] flex items-center overflow-hidden">
    <video className="absolute top-0 left-0 w-full h-full object-cover z-0" autoPlay loop muted playsInline>
      <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-orange-400/80 to-orange-600/70 z-10" />
    <div className="relative z-20 text-white max-w-xl ml-10">
      <h1 className="text-3xl md:text-4xl font-bold mb-4">Digital tidsregistrering og planlægning for teams og virksomheder</h1>
      <p className="text-base md:text-lg mb-8">NOW er et danskudviklet webbaseret system til planlægning, tidsregistrering og styring af arbejdstid.</p>
      <div className="flex gap-4">
        <button className="bg-orange-400 hover:bg-orange-500 text-white px-6 py-3 rounded font-semibold transition">Prøv nu</button>
        <button className="border border-white text-white px-6 py-3 rounded font-semibold hover:bg-white hover:text-orange-500 transition">Kontakt os</button>
      </div>
    </div>
  </section>
);

export default HeroSection; 