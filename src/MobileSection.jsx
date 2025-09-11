import React from "react";
import mobileFrame from "./assets/images/mobileFrame.png";
import graphicElement from "../src/assets/icons/NOW-graphicElement.svg"

const MobileSection = () => (
  <section className="relative w-full bg-[#034C8C] min-h-[125vh] lg:min-h-[340px] mt-32 px-6 sm:px-8 md:px-16 lg:px-28 flex items-center lg:mt-[400px]">
    <div className="absolute inset-0 overflow-hidden block max-lg:hidden z-0">
      <img
        src={graphicElement}
        alt=""
        className="absolute left-0 top-1/2 transform -translate-y-1/2 max-sm:w-full  opacity-7 pointer-events-none select-none"
        style={{ zIndex: 0 }}
      />
    </div>

    <div className="flex flex-col lg:flex-row w-full h-full flex-1 justify-center items-center">
      <div className="flex-1 flex flex-col justify-center items-center lg:items-start text-white text-center lg:text-left mb-16 lg:mb-0 ">
        <h2 className="text-3xl md:text-3xl lg:text-4xl font-extrabold mb-4 leading-tight font-primary">
          Registrér arbejdstimer direkte fra mobilen
        </h2>
        <p className="mb-8 text-lg sm:text-lg md:text-xl font-secondary max-w-4xl ">
          NOW virker på både iPhone og Android og gør det nemt at registrere
          arbejdstid  – uanset om du er på farten, ude på en opgave eller
          arbejder hjemmefra.
        </p>
        {/* <button
          onClick={() =>
            window.open(
              "https://gonow.dk/register",
              "_blank",
              "noopener,noreferrer"
            )
          }
          className="bg-primary-orange hover:bg-primary-orange-hover text-white px-6 py-2 max-md:px-5 max-md:py-2 rounded font-semibold text-lg transition-colors duration-400 ease-in-out cursor-pointer z-20"
        >
          Prøv NOW
        </button> */}
      </div>
      {/* Right: Mobile Frame */}
      <div className="flex-1 flex justify-center lg:justify-end items-end relative h-full">
        <img
          src={mobileFrame}
          alt="Mobil app preview"
          className="w-56 md:w-60 lg:w-[320px] drop-shadow-2xl mt-0 lg:-mt-24"
          style={{ zIndex: 2 }}
        />
      </div>
    </div>
  </section>
);

export default MobileSection; 