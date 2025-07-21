import React from "react";
import PricingCard1 from "../assets/images/pricingCard1.png";

const PricingSection = () => {
  return (
    <section className="relative bg-cover bg-center bg-no-repeat py-20 px-6 lg:px-28 border border-red-700">
      <div className="full-w flex flex-col lg:flex-row items-start justify-between gap-12 lg:gap-20 border border-blue-500">
        {/* Pricing Cards */}
        <div className="flex flex-col sm:flex-row gap-6 w-full lg:w-1/3 border border-pink-500">
          {/* Free Card */}
          <div
            className="flex-1 min-h-[550px] bg-no-repeat bg-cover w-full rounded-2xl text-white shadow-md p-6 sm:p-8 flex flex-col"
            style={{ backgroundImage: `url(${PricingCard1})` }}
          >
          <div>
              <h3 className="text-center text-3xl font-bold mb-1 ">30DKK</h3>
              <p className="text-center text-sm uppercase mb-4 border-b border-white/50 pb-6">
              
              </p>
            </div>
            <ul className="mt-8 space-y-3 lg:text-base font-semibold sm:text-base">
              <li>✔ Første bruger er gratis</li>
              <li>✔ Sæt din virksomhed op</li>
              <li>✔ Test alle funktioner</li>
              <li>✔ Tilføj dit team når du er klar</li>
              <li>✔ Ingen kortoplysninger nødvendig</li>
            </ul>

            <div className="mt-auto pt-8">
              <button className="w-full bg-blue-800 text-white font-semibold py-2 rounded-lg">
                Prøv det nu
              </button>
            </div>
          </div>

          {/* Paid Card */}
          <div className="flex-1 min-h-[550px] bg-gradient-to-b from-blue-500 to-blue-800 rounded-2xl text-white shadow-md p-6 sm:p-8 flex flex-col">
            <div>
              <h3 className="text-center text-3xl font-bold mb-1 ">30DKK</h3>
              <p className="text-center text-sm uppercase mb-4 border-b border-white/50 pb-2">
                per bruger / måned
              </p>
            </div>

            <ul className="space-y-3 mt-7 text-sm sm:text-base">
              <li>✔ Ubegrænset antal brugere</li>
              <li>✔ Fast lav pris</li>
              <li>✔ Adgang til alle features</li>
            </ul>

            <div className="mt-auto pt-8">
              <button className="w-full bg-orange-400 text-blue-900 font-semibold py-2 rounded-lg">
                Køb større overblik
              </button>
            </div>
          </div>
        </div>

        {/* Info & CTA */}
        <div className="w-full lg:w-1/3 text-black text-center lg:text-left">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            Fuld adgang til tidsregistrering, rapportering og planlægning
          </h2>
          <p className="text-gray-800 mb-6 text-sm sm:text-base max-w-sm mx-auto lg:mx-0">
            NOW samler tidsregistrering, ferieplanlægning, kørselsudgifter og
            projektudgifter i én løsning
          </p>
          <button className="bg-orange-500 text-white font-semibold px-6 py-2 rounded-lg">
            Køb
          </button>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
