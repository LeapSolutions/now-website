import React from "react";
import WeeklyRegistrationOverview from "../assets/images/UserAndAdmin//userView.png";

/**
 * Static feature section (no icons, no interaction)
 * - Fixed image, heading and description
 * - Responsive layout, optimized for the NOW site style
 */
export default function UserOverview() {
  const heading = "Brugervenligt for brugere";
  const description =
    "NOW giver dig et hurtigt overblik over dine registrerede timer, flextid og dagens arbejdstid. Projekterne vises i egne farver, så du nemt kan skelne mellem opgaver og kunder. Du kan planlægge dine kommende dage direkte i oversigten, så du altid har styr på både registrering og planlægning af timer.";

  return (
    <section className="flex flex-col lg:flex-row px-4 sm:px-8 lg:px-28 mt-20 mb-40 gap-12 lg:gap-20 items-center ">
     
      <div className="w-full lg:w-2/3 flex flex-col items-start justify-center gap-6 order-1 lg:order-2 lg:justify-center items-center max-lg:items-center ">
        <h2 className="text-2xl sm:text-3xl font-extrabold mb-3 text-black">
          {heading}
        </h2>
        <p className="text-base sm:text-lg md:text-xl text-gray-700 max-w-xl font-secondary">
          {description}
        </p>
      </div>

    
    <div className="w-full lg:w-3/3 flex justify-center lg:justify-end items-center order-1 lg:order-2 lg:min-h-[750px]">
  <img
    src={WeeklyRegistrationOverview}
    alt="User Overview"
    className="w-full flex max-w-full sm:max-w-full lg:max-w-full h-auto object-contain"
  />
</div>
    </section>
  );
}
