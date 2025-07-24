import React from "react";
import mobileFrame from "./assets/images/mobileFrame.png";

const MobileSection = () => (
  <section className="relative w-full bg-[#0B5CA8] min-h-[100vh] lg:min-h-[340px] mt-32 px-4 sm:px-8 md:px-16 lg:px-28 flex items-center">
    <div className="flex flex-col lg:flex-row items-center w-full h-full flex-1 justify-center items-center border border-red-500 ">
      {/* Left: Text */}
      <div className="flex-1 flex flex-col justify-center items-center lg:items-start text-white text-center lg:text-left mb-16 lg:mb-0 border border-green-500 ">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold mb-4 leading-tight">
          Registrér arbejdstimer direkte<br />fra mobilen
        </h2>
        <p className="mb-8 text-base md:text-lg font-normal">
          NOW virker på både iPhone og Android og gør det nemt at registrere arbejdstid – uanset om du er på farten, ude på en opgave eller arbejder hjemmefra.
        </p>
        <button className="bg-[#F26A1B] hover:bg-[#f25f1b] text-white px-6 py-3 rounded font-semibold text-lg transition">
          Prøv NOW
        </button>
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