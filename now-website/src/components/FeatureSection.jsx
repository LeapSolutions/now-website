import React, { useState } from "react";
import TimeIcon from "../assets/icons/types/time.svg";
import AbsenceIcon from "../assets/icons/types/absence.svg";
import AllowanceIcon from "../assets/icons/types/allowance.svg";
import DrivingIcon from "../assets/icons/types/driving.svg";
import ExpenseIcon from "../assets/icons/types/expense.svg";
import ReportIcon from "../assets/icons/types/report.svg";

import TimeImage from "../assets/images/hoursReg.png";
import DrivingImage from "../assets/images/drivingReg.png";
import ExpenseImage from "../assets/images/expenseReg.png";
import AllowanceImage from "../assets/images/dietReg.png";
import AbsenceImage from "../assets/images/absenceReg.png";
import ReportImage from "../assets/images/ReportExp.png";

const features = [
  {
    icon: TimeIcon,
    heading: "Tidsregistrering",
    description:
      "NOW gør det nemt at registrere arbejdstid, opgaver og fravær – alt samlet ét sted og tilgængeligt i realtid.",
    featureImage: TimeImage,
  },
  {
    icon: DrivingIcon,
    heading: "Kørselsudgifter",
    description:
      "NOW gør det nemt at tilføje kørte kilometer direkte til projekter. Systemet beregner afstand og kørselsgodtgørelse automatisk baseret på kortdata.",
    featureImage: DrivingImage,
  },
  {
    icon: ExpenseIcon,
    heading: "Projektudgifter",
    description:
      "NOW gør det nemt at knytte udgifter til specifikke projekter og kunder. Det giver gennemsigtighed i forbrug og letter faktureringen.",
    featureImage: ExpenseImage,
  },
  {
    icon: AllowanceIcon,
    heading: "Diæter",
    description:
      "NOW giver mulighed for at registrere og beregne diæter pr. projekt eller bruger. Systemet understøtter faste satser og beløbsgrænser for medarbejdere.",
    featureImage: AllowanceImage,
  },
  {
    icon: AbsenceIcon,
    heading: "Fravær og ferie",
    description:
      "NOW gør det nemt at holde styr på medarbejderes ferie og sygdom. Længere fraværsperioder kan registreres med få klik direkte i kalenderen.",
    featureImage: AbsenceImage,
  },
  {
    icon: ReportIcon,
    heading: "Rapportering",
    description:
      "NOW samler arbejdstimer, projektudgifter og opgavefremskridt i klare rapporter. Det giver ledelsen det nødvendige overblik til at evaluere ressourceforbrug og planlægning.",
    featureImage: ReportImage,
  },
];

const featureImage = "src/assets/images/hoursReg.png";

const FeatureSection = () => {
  const [selected, setSelected] = useState(0);

  return (
    <section className="flex flex-col lg:flex-row px-4 sm:px-8 lg:px-28 mt-20 mb-40 gap-12 lg:gap-20 items-center">
      {/* Icons + Text */}
      <div className="w-full lg:w-2/3 flex flex-col items-start justify-center gap-6 order-1 lg:order-2 lg:justify-center items-center max-lg:items-center ">
        <div className="grid grid-cols-3 grid-rows-2 gap-6 mb-8 ">
          {features.map((f, idx) => (
            <button
              key={f.heading}
              className={`w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center rounded-2xl border-2 text-2xl sm:text-3xl transition-all shadow-sm ${
                selected === idx
                  ? "border-[#0339a6] bg-blue-50"
                  : "border-gray-300 bg-white text-gray-500 hover:border-[#0468bf] hover:bg-blue-50 hover:text-blue-600"
              }`}
              onClick={() => setSelected(idx)}
              aria-label={f.heading}
              type="button"
            >
              <img
                src={f.icon}
                alt={f.heading}
                className={`w-8 h-8 sm:w-12 sm:h-12 object-contain transition-transform duration-200 ${
                  selected === idx
                    ? "scale-110 opacity-100"
                    : "opacity-75 hover:opacity-100"
                }`}
              />
            </button>
          ))}
        </div>
        <div className="min-h-[160px] text-center lg:text-left">
          <h2 className="text-2xl sm:text-3xl font-extrabold mb-3 text-black">
            {features[selected].heading}
          </h2>
          <p className="text-gray-700 text-base sm:text-lg max-w-md mx-auto lg:mx-0">
            {features[selected].description}
          </p>
        </div>
      </div>

      <div className="w-full lg:w-3/3 flex justify-center lg:justify-end items-start order-1 lg:order-2 lg:min-h-[750px]">
        <img
          src={features[selected].featureImage}
          alt={features[selected].heading}
          className="w-full max-w-md sm:max-w-lg lg:max-w-full h-auto object-contain"
        />
      </div>
    </section>
  );
};

export default FeatureSection;
