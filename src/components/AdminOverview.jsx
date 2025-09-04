// src/components/AdminOverview.jsx
import React, { useEffect, useRef, useState, useCallback } from "react";

// Udskift med dine egne billeder
import shot1 from "../assets/images/AdminOverview/projectAdmin.png";
import shot2 from "../assets/images/AdminOverview/membersAdmin.png";
import shot3 from "../assets/images/AdminOverview/logAdmin.png";
import shot4 from "../assets/images/AdminOverview/adminResourceOverview.png";
import shot5 from "../assets/images/AdminOverview/adminProjectOverview.png";

export default function AdminOverview({
  staticTitle = "Nemt og overskueligt for administratorer",
  slides = [
    {
      title: "Hold styr på projekter",
      description:
        "Få overblik over alle projekter – navne, titler, registreringer og mulighed for sygdomsregistrering. Tildel egne farver for et hurtigt visuelt overblik.",
      image: shot1,
      alt: "Projekter",
    },
    {
      title: "Administrer brugere",
      description:
        "Se navn, initialer, e-mail, rolle, oprettelsesdato samt flextid. Tilføj nye, redigér eksisterende, og opdater flextid for alle med ét klik.",
      image: shot2,
      alt: "Brugere",
    },
    {
      title: "Aktivitetslog",
      description:
        "Fuld sporbarhed: se hvem der gjorde hvad og hvornår – fx oprettede eller opdaterede timer. Søg og blad for hurtigt at finde hændelser.",
      image: shot3,
      alt: "Aktivitetslog",
    },
    {
      title: "Ressourceoversigt",
      description:
        "Følg registrerede timer pr. medarbejder med normtimer og afvigelser. Se ugens total og projektfordeling. Filtrér eller søg efter personer.",
      image: shot4,
      alt: "Ressourcer",
    },
    {
      title: "Projektoversigt",
      description:
        "Se registrerede timer pr. projekt fordelt på ugedage og samlet for ugen. Farvekoder giver overblik; mouse-over viser fordeling pr. medarbejder.",
      image: shot5,
      alt: "Projektoversigt",
    },
  ],
  intervalMs = 12000,
}) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const total = slides.length;
  const timerRef = useRef(null);

  const next = useCallback(() => setIndex((i) => (i + 1) % total), [total]); 
  const prev = useCallback(() => setIndex((i) => (i - 1 + total) % total), [total]);

  
  useEffect(() => {
    if (total < 2 || paused) return;
    timerRef.current = setInterval(next, intervalMs); 
    return () => clearInterval(timerRef.current); 
  }, [total, intervalMs, paused, next]);


  const onKeyDown = (e) => {
    if (e.key === "ArrowRight") next();
    if (e.key === "ArrowLeft") prev();
  };

  return (
    <section
      id="adminOverview"
      className="scroll-mt-[200px] flex flex-col lg:flex-row px-5 sm:px-8 md:px-16 lg:px-28 mb-28 mt-28 lg:mb-[200px] lg:mt-[200px] gap-8 md:gap-12 lg:gap-20 "
      onKeyDown={onKeyDown}
    >
      <div className="w-full lg:w-2/3 flex justify-start items-center max-lg:order-2">
        <div className="w-full max-w-xl md:max-w-3xl lg:max-w-6xl ">
          <div
            className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl bg-gray-50 shadow-sm"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            {slides.map((s, i) => (
              <img
                key={i}
                src={s.image}
                alt={s.alt || s.title}
                className={`absolute inset-0 h-full w-full object-contain transition-opacity duration-700 ease-out motion-reduce:transition-none ${
                  i === index ? "opacity-100" : "opacity-0"
                }`}
                aria-hidden={i === index ? "false" : "true"}
                draggable={false}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="w-full lg:w-1/3 flex flex-col items-center lg:items-start justify-center mb-8 lg:mb-0 ">
        <div className="max-w-xl w-full text-center lg:text-left">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-5 md:mb-6 w-full text-black font-primary">
            {staticTitle}
          </h2>

          <div
            className="relative min-h-[150px] max-w-xl"
            aria-live="polite"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            {slides.map((s, i) => (
              <div
                key={i}
                className={`absolute inset-0 transition-opacity duration-500 ease-out motion-reduce:transition-none ${
                  i === index ? "opacity-100" : "opacity-0 pointer-events-none"
                }`}
                aria-hidden={i === index ? "false" : "true"}
              >
                <h3 className="text-lg sm:text-2xl md:text-2xl font-bold mb-2 md:mb-2 text-black font-secondary">
                  {s.title}
                </h3>
                <p className="text-base sm:text-lg md:text-xl text-gray-700 font-secondary">
                  {s.description}
                </p>
              </div>
            ))}
          </div>

          {total > 1 && (
            <div className="mt-5 flex justify-center gap-3 lg:justify-start ">
              <button
                type="button"
                onClick={prev}
                className="bg-primary-orange hover:bg-primary-orange-hover text-white px-6 py-3 rounded font-semibold transition-colors duration-400 ease-in-out cursor-pointer font-secondary text-base"
              >
                Forrige
              </button>
              <button
                type="button"
                onClick={next}
                className="bg-primary-orange hover:bg-primary-orange-hover text-white px-6 py-3 rounded font-semibold transition-colors duration-400 ease-in-out cursor-pointer font-secondary text-base"
              >
                Næste
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
