import React from "react";
import NavatticEmbed from "./NavatticEmbed";

export default function NavatticFeatureSection() {
  return (
    <section
      id="navatticFeature"
      className="scroll-mt-[200px] flex flex-col lg:flex-row px-5 sm:px-8 md:px-16 lg:px-28 mb-10 mt-10 md:mb-24 md:mt-24 lg:mb-[200px] lg:mt-[200px] gap-8 md:gap-12 lg:gap-20"
    >
      {/* Navattic embed section */}
      <div className="w-full lg:w-2/3 flex justify-start items-center max-lg:order-2 ">
        <div className="w-full max-w-xl md:max-w-3xl lg:max-w-6xl flex items-start justify-center">
          <div className="w-full">
            <NavatticEmbed />
          </div>
        </div>
      </div>

      <div className="w-full lg:w-1/3 flex flex-col items-center lg:items-start justify-center mb-8 lg:mb-0 ">
        <div className="max-w-md w-full flex flex-col items-center lg:items-start text-center lg:text-left ">
          <h2 className="text-2xl md:text-3xl font-extrabold mb-2 md:mb-3 text-black font-primary w-full">
            Interaktiv produktgennemgang
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-700 max-w-md font-secondary">
            Oplev produktet i aktion med vores trin-for-trin gennemgang. Klik
            dig igennem for at udforske nøglefunktioner og se, hvordan det
            fungerer.
          </p>
        </div>
      </div>
    </section>
  );
}
