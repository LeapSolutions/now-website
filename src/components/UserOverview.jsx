import React from "react";
import WeeklyRegistrationOverview from "../assets/images/UserAndAdmin//userView.png";


export default function UserOverview() {
  const heading = "Brugervenligt for brugere";
  const description =
    "NOW giver dig et hurtigt overblik over dine registrerede timer, flextid og dagens arbejdstid. Projekterne vises i egne farver, så du nemt kan skelne mellem opgaver og kunder. Du kan planlægge dine kommende dage direkte i oversigten, så du altid har styr på både registrering og planlægning af timer.";

  return (
    <section className="flex flex-col lg:flex-row px-5 sm:px-8 md:px-16 lg:px-28 mb-28 mt-28 lg:mb-[200px] lg:mt-[200px] gap-8 md:gap-12 lg:gap-20 ">
      <div className="w-full lg:w-1/3 flex flex-ms-col  lg:items-center justify-start mb-8 lg:mb-0 ">
        <div className="lg:max-w-lg w-full flex flex-col items-center lg:items-start text-center lg:text-left ">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-3 text-black font-primary">
            {heading}
          </h2>
          <p className="text-lg sm:text-lg md:text-xl text-gray-700 max-w-xl font-secondary">
            {description}
          </p>
        </div>
      </div>


<div className="w-full lg:w-2/3 flex justify-center items-start">
      <div className="w-full flex justify-center lg:justify-end items-center order-1 lg:order-2 lg:min-h-[750px]">
        <img
          src={WeeklyRegistrationOverview}
          alt="User Overview"
          className="w-full flex max-w-full sm:max-w-full lg:max-w-full  h-auto object-contain"
        />
      </div>
      </div>
    </section>
  );
}
