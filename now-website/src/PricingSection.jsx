import React from "react";
import bgPriceYellow from "./assets/images/pricingBG/bgPriceYellow.jpg";
import bgPriceBlue from "./assets/images/pricingBG/bgPriceBlue.jpg";

const featuresFree = [
  "Første bruger er gratis",
  "Sæt din virksomhed op",
  "Test alle funktioner",
  "Tilføj dit team når du er klar",
  "Ingen kortoplysninger nødvendig",
];

const featuresPaid = [
  "Ubegrænset antal brugere",
  "Fast lav pris",
  "Adgang til alle features",
];

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

const PricingSection = () => (
  <section className="w-full flex flex-col lg:flex-row md:flex-col items-center justify-center gap-8 py-16 px-4 bg-white border border-red-600">
    {/* Pricing Cards */}
    <div className="flex flex-col lg:flex-row gap-8 w-full max-w-5xl order-2 xl:order-1 items-center justify-center xl:justify-start ">
      {/* Free Card */}
      <div
        className="rounded-2xl p-8 relative overflow-hidden flex flex-col justify-between w-full md:w-[380px] lg:w-[400px] min-h-[520px] shadow-lg mx-auto lg:mx-0 "
        style={{ background: `url(${bgPriceYellow}) center/cover no-repeat` }}
      >
        <div>
          <h3 className="text-2xl md:text-3xl font-extrabold text-white text-center mb-4 tracking-wide">
            GRATIS
          </h3>
          <hr className="border-white/60 mb-4" />
          <p className="text-white text-lg font-semibold text-center mb-4">
            Test vores system uden konsekvenser
          </p>
          <ul className="space-y-3 mb-8">
            {featuresFree.map((f, i) => (
              <li
                key={i}
                className="flex items-center gap-3 text-white text-base md:text-lg"
              >
                <CheckIcon />
                <span>{f}</span>
              </li>
            ))}
          </ul>
        </div>
        <button className="w-full bg-[#1A3365] hover:bg-[#14244a] text-white font-semibold py-3 rounded-lg text-lg transition">
          Prøv det nu
        </button>
      </div>
      {/* Paid Card */}
      <div
        className="rounded-2xl p-8 relative overflow-hidden flex flex-col justify-between w-full md:w-[380px] lg:w-[400px] min-h-[520px] shadow-lg mx-auto lg:mx-0"
        style={{ background: `url(${bgPriceBlue}) center/cover no-repeat` }}
      >
        <div>
          <h3 className="text-2xl md:text-3xl font-extrabold text-white text-center mb-1 tracking-wide">
            30DKK
          </h3>
          <div className="text-white text-center text-xs mb-4">
            PER BRUGER/MÅNED
          </div>
          <hr className="border-white/60 mb-4" />
          <p className="text-white text-lg font-semibold text-center mb-4">
            Hvad du får
          </p>
          <ul className="space-y-3 mb-8">
            {featuresPaid.map((f, i) => (
              <li
                key={i}
                className="flex items-center gap-3 text-white text-base md:text-lg"
              >
                <CheckIcon />
                <span>{f}</span>
              </li>
            ))}
          </ul>
        </div>
        <button className="w-full bg-[#F6C16B] hover:bg-[#eab75e] text-[#1A3365] font-semibold py-3 rounded-lg text-lg transition">
          Køb større overblik
        </button>
      </div>
    </div>
    {/* Right Section */}
    <div className="flex flex-col items-center justify-center max-w-xl mt-12 lg:mt-0 xl:ml-12 order-1 xl:order-2 lg:items-center xl:items-start">
      <h2 className="text-3xl md:text-4xl font-extrabold text-black mb-4 leading-tight text-center lg:text-left ">
        Fuld adgang til tidsregistrering,
        <br className="hidden md:block" /> rapportering og planlægning
      </h2>
      <p className="text-gray-700 text-lg mb-6 w-full text-center lg:text-left">
        NOW samler tidsregistrering, ferieplanlægning, kørselsudgifter og
        projektudgifter i én løsning
      </p>
      <button className="bg-[#F26A1B] hover:bg-[#f25f1b] text-white px-8 py-3 rounded font-semibold text-lg transition ">
        Køb
      </button>
    </div>
  </section>
);

export default PricingSection;
