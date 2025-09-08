import React, { useState, useMemo, useRef, useEffect, useCallback } from "react";
import timeIcon from "../assets/icons/types/time.svg";
import drivingIcon from "../assets/icons/types/driving.svg";
import expenseIcon from "../assets/icons/types/expense.svg";
import absenceIcon from "../assets/icons/types/absence.svg";
import allowanceIcon from "../assets/icons/types/allowance.svg";
import reportIcon from "../assets/icons/types/report.svg";

// IMPORT FEATURE IMAGES
import timeFeature from "../assets/images/features/timeFeature.png";
import drivingFeature from "../assets/images/features/drivingFeature.png";
import expenseFeature from "../assets/images/features/expenseFeature.png";
import absenceFeature from "../assets/images/features/absenceFeature.png";
import allowanceFeature from "../assets/images/features/allowanceFeature.png";
import reportFeature from "../assets/images/features/reportFeature.png";

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
    image: timeFeature,
  },
  {
    icon: "driving.svg",
    heading: "Kørselsudgifter",
    description:
      "NOW gør det nemt at tilføje kørte kilometer direkte til projekter. Systemet beregner afstand og kørselsgodtgørelse automatisk baseret på kortdata.",
    image: drivingFeature,
  },
  {
    icon: "expense.svg",
    heading: "Projektudgifter",
    description:
      "NOW gør det nemt at knytte udgifter til specifikke projekter og kunder. Det giver gennemsigtighed i forbrug og letter faktureringen.",
    image: expenseFeature,
  },
  {
    icon: "allowance.svg",
    heading: "Diæter",
    description:
      "NOW giver mulighed for at registrere og beregne diæter pr. projekt eller bruger. Systemet understøtter faste satser og beløbsgrænser for medarbejdere.",
    image: allowanceFeature,
  },
  {
    icon: "absence.svg",
    heading: "Fravær og ferie",
    description:
      "NOW gør det nemt at holde styr på medarbejderes ferie og sygdom. Længere fraværsperioder kan registreres med få klik direkte i kalenderen.",
    image: absenceFeature,
  },
  {
    icon: "report.svg",
    heading: "Rapportering",
    description:
      "NOW samler arbejdstimer, projektudgifter og opgavefremskridt i klare rapporter. Det giver ledelsen det nødvendige overblik til at evaluere ressourceforbrug og planlægning.",
    image: reportFeature,
  },
];

const FeatureSection = () => {
  const [selected, setSelected] = useState(0);

  
  const [isLarge, setIsLarge] = useState(false);


  const [isOpen, setIsOpen] = useState(false);
  const [galleryIndex, setGalleryIndex] = useState(0);
  const closeBtnRef = useRef(null);

  const images = useMemo(
    () => features.map((f) => ({ src: f.image, alt: f.heading })),
    []
  );

  
  useEffect(() => {
    const mql = window.matchMedia("(min-width: 1024px)");
    const onChange = (e) => setIsLarge(e.matches);

    setIsLarge(mql.matches);
    if (mql.addEventListener) mql.addEventListener("change", onChange);
    else mql.addListener(onChange);

    return () => {
      if (mql.removeEventListener) mql.removeEventListener("change", onChange);
      else mql.removeListener(onChange);
    };
  }, []);


  useEffect(() => {
    if (isOpen && !isLarge) setIsOpen(false);
  }, [isOpen, isLarge]);

  const openLightbox = useCallback(
    (index) => {
      if (!isLarge) return; 
      setGalleryIndex(index);
      setIsOpen(true);
    },
    [isLarge]
  );

  const closeLightbox = useCallback(() => {
    setIsOpen(false);
  }, []);

  const prev = useCallback(() => {
    setGalleryIndex((i) => (i - 1 + images.length) % images.length);
  }, [images.length]);

  const next = useCallback(() => {
    setGalleryIndex((i) => (i + 1) % images.length);
  }, [images.length]);

 
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };

    document.addEventListener("keydown", onKey);
    const t = setTimeout(() => closeBtnRef.current?.focus(), 0);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKey);
      clearTimeout(t);
      document.body.style.overflow = prevOverflow;
    };
  }, [isOpen, closeLightbox, prev, next]);

  return (
    <>
      <section
        id="funktionsOversigt"
        className="scroll-mt-[200px] flex flex-col lg:flex-row px-5 sm:px-8 md:px-16 lg:px-28 mb-10 mt-10 md:mb-24 md:mt-24 lg:mb-[200px] lg:mt-[200px] gap-0 md:gap-12 lg:gap-20 "
      >
        <div className="w-full lg:w-1/3 flex flex-ms-col  lg:items-center justify-start mb-8 lg:mb-0">
          <div className="max-w-lg w-full flex flex-col items-center lg:items-start">
            <div className="grid grid-cols-3 grid-rows-2 gap-4 md:gap-6 mb-10 md:mb-8 w-full justify-items-center lg:justify-items-start">
              {features.map((f, idx) => (
                <button
                  key={f.heading}
                  className={`w-16 h-16 md:w-20 md:h-20 flex items-center justify-center rounded-2xl border-2 text-2xl md:text-3xl transition-colors duration-400 ease-in-out shadow-sm hover:cursor-pointer ${
                    selected === idx
                      ? "border-[#206178] bg-[#256B84]/10"
                      : "border-gray-300 bg-white text-gray-500 hover:border-[#256B84] hover:bg-[#256B84]/10"
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
              <h2 className="text-3xl md:text-4xl font-extrabold mb-2 md:mb-3 text-black w-full font-primary">
                {features[selected].heading}
              </h2>
              <p className="text-lg sm:text-lg md:text-xl text-gray-700 max-w-md lg:min-h-[120px] font-secondary">
                {features[selected].description}
              </p>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-2/3 flex justify-center items-start">
          <div className="w-full flex justify-end items-center min-h-[220px] md:min-h-[320px] lg:min-h-[400px]">
           
            {isLarge && (
              <button
                type="button"
                aria-label="Åbn galleri"
                onClick={() => openLightbox(selected)}
                className="relative w-full aspect-[4/3] max-w-xl md:max-w-3xl lg:max-w-6xl
                           max-h-80 md:max-h-[500px] lg:max-h-[650px] group cursor-zoom-in 
                          "
                title="Klik for at åbne galleri"
              >
                <img
                  src={features[selected].image}
                  alt={features[selected].heading}
                  className="absolute inset-0 w-full h-full object-contain
                             transform-gpu will-change-transform transition-transform
                             duration-400 ease-[cubic-bezier(0.22,0.61,0.36,1)]
                             group-hover:scale-[1.015]"
                  draggable={false}
                  style={{ pointerEvents: "none" }}
                />
              </button>
            )}

          
            {!isLarge && (
              <div
                className="relative w-full aspect-[4/3] max-w-xl md:max-w-3xl lg:max-w-6xl
                           max-h-80 md:max-h-[500px] lg:max-h-[650px] rounded-2xl"
              >
                <img
                  src={features[selected].image}
                  alt={features[selected].heading}
                  className="absolute inset-0 w-full h-full object-contain"
                  draggable={false}
                />
              </div>
            )}
          </div>
        </div>
      </section>


      {isOpen && isLarge && (
        <div
          className="fixed inset-0 z-[9999]"
          aria-modal="true"
          role="dialog"
          aria-label="Billedgalleri"
        >
        
          <div
            className="absolute inset-0 bg-black/80 backdrop-blur-[1px]"
            onClick={closeLightbox}
          />

      
          <div className="absolute inset-0 flex items-center justify-center p-4 sm:p-8">
            <div className="relative w-full max-w-[90vw]">
              <button
                ref={closeBtnRef}
                onClick={closeLightbox}
                aria-label="Luk galleri"
                className="absolute -top-3 -right-3 sm:-top-0 sm:-right-6
                           inline-flex items-center justify-center
                           h-10 px-4 rounded-full bg-white/95 hover:bg-white hover:cursor-pointer shadow
                           focus:outline-none focus-visible:ring-2 focus-visible:ring-white
                           select-none touch-manipulation transition-none"
              >
                Luk
              </button>

              <div className="grid grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] items-center gap-3 sm:gap-4">
                <button
                  onClick={prev}
                  aria-label="Forrige"
                  className="justify-self-end inline-flex items-center justify-center
                             w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/90 hover:bg-white cursor-pointer shadow
                             focus:outline-none focus-visible:ring-2 focus-visible:ring-white
                             select-none touch-manipulation transition-none"
                >
                  <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
                    <path d="M15 18l-6-6 6-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>

                <div className="rounded-2xl overflow-hidden">
                  <div className="h-[85vh] sm:h-[90vh] w-[80vw] sm:w-[85vw] max-w-[1600px]">
                    <img
                      src={images[galleryIndex].src}
                      alt={images[galleryIndex].alt}
                      className="h-full w-full object-contain select-none"
                      draggable={false}
                    />
                  </div>
                </div>

                <button
                  onClick={next}
                  aria-label="Næste"
                  className="justify-self-start inline-flex items-center justify-center
                             w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/90 hover:bg-white cursor-pointer shadow
                             focus:outline-none focus-visible:ring-2 focus-visible:ring-white
                             select-none touch-manipulation transition-none"
                >
                  <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
                    <path d="M9 6l6 6-6 6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>

              <div className="mt-3 text-center text-white/90 text-sm min-h-[1.5rem]">
                {galleryIndex + 1} / {images.length} · {images[galleryIndex].alt}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FeatureSection;
