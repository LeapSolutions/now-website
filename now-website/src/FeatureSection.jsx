import React, { useState } from "react";

const features = [
  {
    icon: "🕒",
    heading: "Tidsregistrering",
    description:
      "NOW gør det nemt at registrere arbejdstid, opgaver og fravær – alt samlet ét sted og tilgængeligt i realtid.",
  },
  {
    icon: "📝",
    heading: "Opgavestyring",
    description:
      "Effektiv styring af opgaver og projekter for teams og virksomheder.",
  },
  {
    icon: "💲",
    heading: "Lønberegning",
    description:
      "Automatisk lønberegning baseret på registrerede timer og satser.",
  },
  {
    icon: "👥",
    heading: "Teamhåndtering",
    description: "Administrer teams og medarbejdere nemt og overskueligt.",
  },
  {
    icon: "✨",
    heading: "Rapportering",
    description: "Få overblik med detaljerede rapporter og analyser.",
  },
  {
    icon: "📊",
    heading: "Statistik",
    description: "Se statistik og trends for arbejdstid og opgaver.",
  },
];

const featureImage = "src/assets/images/hoursReg.png";

const FeatureSection = () => {
  const [selected, setSelected] = useState(0);

  return (
    <section className="flex flex-col md:flex-row items-center justify-center gap-10 px-[5vw] py-16 max-w-7xl mx-auto">
      {/* Left: Icons, heading, description */}
      <div className="w-full md:w-1/2 flex flex-col items-start">
        <div className="grid grid-cols-3 grid-rows-2 gap-6 mb-8">
          {features.map((f, idx) => (
            <button
              key={f.heading}
              className={`w-20 h-20 flex items-center justify-center rounded-2xl border-2 text-3xl transition-all shadow-sm ${
                selected === idx
                  ? "border-blue-600 bg-blue-50 text-blue-600"
                  : "border-gray-300 bg-white text-gray-500 hover:border-blue-400 hover:bg-blue-50 hover:text-blue-600"
              }`}
              onClick={() => setSelected(idx)}
              aria-label={f.heading}
              type="button"
            >
              <span>{f.icon}</span>
            </button>
          ))}
        </div>
        <h2 className="text-3xl font-extrabold mb-3 text-black">
          {features[selected].heading}
        </h2>
        <p className="text-gray-700 text-lg max-w-md">
          {features[selected].description}
        </p>
      </div>
      {/* Right: Image */}
      <div className="w-full md:w-1/2 flex justify-center items-center">
        <img
          src={featureImage}
          alt={features[selected].heading}
          className="w-full max-w-2xl"
        />
      </div>
    </section>
  );
};

export default FeatureSection;
