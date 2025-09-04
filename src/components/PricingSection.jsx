import React from "react";
import YellowBG from "../assets/images/pricingBg/bgPriceYellow.jpg";
import BlueBG from "../assets/images/pricingBg/bgPriceBlue.jpg";

const CheckIcon = () => (
  <svg width="22" height="22" fill="none" viewBox="0 0 22 22">
    <circle cx="11" cy="11" r="11" fill="#fff" />
    <path
      d="M6.5 11.5l3 3 6-6"
      stroke="#1A3365"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const CheckItem = ({ children }) => (
  <li className="flex items-center">
    <span className="pr-2">
      <CheckIcon />
    </span>
    <span>{children}</span>
  </li>
);

const PricingSection = () => {
  return (
    <section
      id="priser"
      className=" scroll-mt-[15px] lg:scroll-mt-[100px] relative bg-cover bg-center bg-no-repeat py-20 px-6 lg:px-28 mt-28 mb-28 lg:mb-[200px] lg:mt-[200px] "
    >
      <div className="w-full flex flex-col min-[1360px]:flex-row min-[1360px]:items-start justify-between gap-12 min-[1360px]:gap-x-12">
        <div className="w-full min-[1360px]:max-w-[800px] text-black text-center min-[1360px]:text-left flex-shrink min-[1360px]:self-center">
          <h2 className="text-3xl w-full lg:w-xl sm:text-4xl font-primary font-bold mb-4 lg:text-4xl ">
            Alt-i-én løsning til tidsregistrering, rapportering og planlægning
          </h2>
          <p className="text-gray-800 mb-6 text-lg sm:text-xl max-w-lg mx-auto min-[1360px]:mx-0 font-secondary">
            NOW samler tidsregistrering, ferieplanlægning, kørselsudgifter og
            projektudgifter i én løsning
          </p>
          <button className="bg-primary-orange hover:bg-primary-orange-hover text-white px-6 py-2 max-md:px-5 max-md:py-2 rounded font-semibold text-lg transition-colors duration-400 ease-in-out cursor-pointer">
            Køb
          </button>
        </div>

        <div className="flex flex-col gap-6 w-full min-[780px]:flex-row min-[640px]:gap-6 min-[1360px]:w-auto flex-shrink-0">
          <div
            className="flex-1 min-w-[250px] sm:min-w-[350px] min-h-[550px] bg-no-repeat bg-cover rounded-2xl text-white shadow-md p-6 sm:p-8 flex flex-col"
            style={{ backgroundImage: `url(${YellowBG})` }}
          >
            <div>
              <h3 className="text-center text-3xl font-bold mb-1">GRATIS</h3>
              <p className="text-center text-sm uppercase mb-4 border-b border-white/50 pb-6"></p>
            </div>
            <ul className="mt-8 space-y-5 lg:text-sm font-semibold sm:text-sm font-secondary">
              <CheckItem>Første bruger er gratis</CheckItem>
              <CheckItem>Sæt din virksomhed op</CheckItem>
              <CheckItem>Test alle funktioner</CheckItem>
              <CheckItem>Tilføj dit team når du er klar</CheckItem>
              <CheckItem>Ingen kortoplysninger nødvendig</CheckItem>
            </ul>
            <div className="mt-auto pt-8">
              <button className="w-full bg-[#034C8C] text-white hover:bg-[#023864] font-semibold py-2 rounded-lg font-secondary lg:text-sm transition-colors duration-400 ease-in-out cursor-pointer">
                Prøv det nu
              </button>
            </div>
          </div>

          <div
            className="flex-1 min-w-[250px] sm:min-w-[350px] min-h-[550px] bg-no-repeat bg-cover rounded-2xl text-white shadow-md p-6 sm:p-8 flex flex-col"
            style={{ backgroundImage: `url(${BlueBG})` }}
          >
            <div>
              <h3 className="text-center text-3xl font-bold mb-1 font-secondary">
                30DKK
              </h3>
              <p className="text-center text-sm uppercase mb-4 border-b border-white/50 pb-2 font-secondary">
                per bruger / måned
              </p>
            </div>
            <ul className="mt-7 space-y-5 lg:text-sm font-semibold sm:text-sm font-secondary">
              <CheckItem>Ubegrænset antal brugere</CheckItem>
              <CheckItem>Fast lav pris</CheckItem>
              <CheckItem>Adgang til alle features</CheckItem>
            </ul>
            <div className="mt-auto pt-8">
              <button className="w-full bg-[#F2B441] hover:bg-[#f29f41] text-[#034C8C] font-semibold py-2 rounded-lg font-secondary lg:text-sm transition-colors duration-400 ease-in-out cursor-pointer">
                Køb større overblik
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
