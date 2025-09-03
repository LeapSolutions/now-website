import React, { useState } from "react";
import timeIcon from "../assets/icons/types/time.svg";
import drivingIcon from "../assets/icons/types/driving.svg";
import expenseIcon from "../assets/icons/types/expense.svg";
import absenceIcon from "../assets/icons/types/absence.svg";
import allowanceIcon from "../assets/icons/types/allowance.svg";
import reportIcon from "../assets/icons/types/report.svg";


const iconMap = {
  "time.svg": timeIcon,
  "driving.svg": drivingIcon,
  "expense.svg": expenseIcon,
  "absence.svg": absenceIcon,
  "allowance.svg": allowanceIcon,
  "report.svg": reportIcon,
};

const features = [
  {
    icon: "time.svg",
    heading: "Tidsregistrering",
    description:
      "NOW gør det nemt at registrere arbejdstid, opgaver og fravær – alt samlet ét sted og tilgængeligt i realtid.",
    image: "src/assets/images/features/timeFeature.png",
  },
  {
    icon: "driving.svg",
    heading: "Kørselsudgifter",
    description:
      "NOW gør det nemt at tilføje kørte kilometer direkte til projekter. Systemet beregner afstand og kørselsgodtgørelse automatisk baseret på kortdata.",
    image: "src/assets/images/features/drivingFeature.png",
  },
  {
    icon: "expense.svg",
    heading: "Projektudgifter",
    description:
      "NOW gør det nemt at knytte udgifter til specifikke projekter og kunder. Det giver gennemsigtighed i forbrug og letter faktureringen.",
    image: "src/assets/images/features/expenseFeature.png",
  },
  {
    icon: "allowance.svg",
    heading: "Diæter",
    description:
      "NOW giver mulighed for at registrere og beregne diæter pr. projekt eller bruger. Systemet understøtter faste satser og beløbsgrænser for medarbejdere.",
    image: "src/assets/images/features/allowanceFeature.png",
  },
  {
    icon: "absence.svg",
    heading: "Fravær og ferie",
    description:
      "NOW gør det nemt at holde styr på medarbejderes ferie og sygdom. Længere fraværsperioder kan registreres med få klik direkte i kalenderen.",
    image: "src/assets/images/features/absenceFeature.png",
  },
  {
    icon: "report.svg",
    heading: "Rapportering",
    description:
      "NOW samler arbejdstimer, projektudgifter og opgavefremskridt i klare rapporter. Det giver ledelsen det nødvendige overblik til at evaluere ressourceforbrug og planlægning.",
    image: "src/assets/images/features/reportFeature.png",
  },
];

const FeatureSection = () => {
  const [selected, setSelected] = useState(0);

  return (

   
<>



 
    <section

    
      id="funktionsOversigt"
      className="scroll-mt-[200px] flex flex-col lg:flex-row px-5 sm:px-8 md:px-16 lg:px-28 mb-10 mt-10 md:mb-24 md:mt-24 lg:mb-[200px] lg:mt-[200px] gap-8 md:gap-12 lg:gap-20"
    >
      <div className="w-full lg:w-1/3 flex flex-col items-center lg:items-start justify-center mb-8 lg:mb-0 ">
        <div className="max-w-md w-full flex flex-col items-center lg:items-start ">
          <div className="grid grid-cols-3 grid-rows-2 gap-4 md:gap-6 mb-6 md:mb-8 w-full justify-items-center lg:justify-items-start">
            {features.map((f, idx) => (
              <button
                key={f.heading}
                className={`w-16 h-16 md:w-20 md:h-20 flex items-center justify-center rounded-2xl border-2 text-2xl md:text-3xl transition-colors duration-400 ease-in-out shadow-sm  hover:cursor-pointer ${
                  selected === idx
                    ? "border-[#206178] bg-[#256B84]/10 "
                    : "border-gray-300 bg-white text-gray-500 hover:border-[#256B84] hover:bg-[#256B84]/10  "
                }`}
                onClick={() => setSelected(idx)}
                aria-label={f.heading}
                type="button"
              >
                <span>
                  {iconMap[f.icon] ? (
                    <img
                      src={iconMap[f.icon]}
                      alt={f.heading}
                      className="w-8 h-8 md:w-12 md:h-12"
                    />
                  ) : (
                    <span className="text-gray-400 text-2xl">?</span>
                  )}
                </span>
              </button>
            ))}
          </div>
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left w-full">
            <h2 className="text-2xl md:text-4xl font-extrabold mb-2 md:mb-3 text-black w-full font-primary ">
              {features[selected].heading}
            </h2>
            <p className=" text-base sm:text-lg md:text-xl text-gray-700 max-w-md lg:min-h-[120px] font-secondary">
              {features[selected].description}
            </p>
          </div>
        </div>
      </div>

      <div className="w-full lg:w-2/3 flex justify-center items-start">
        <div className="w-full flex justify-end items-center min-h-[220px] md:min-h-[320px] lg:min-h-[400px]">
          <img
            src={features[selected].image}
            alt={features[selected].heading}
            className="w-full aspect-[4/3] max-w-xl md:max-w-3xl lg:max-w-6xl max-h-80 md:max-h-[500px] lg:max-h-[650px] object-contain"
          />
        </div>
      </div>
    </section>
    </>

    
  );
};

export default FeatureSection;
