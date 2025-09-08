
import React, { useEffect, useRef, useState, useCallback, useMemo } from "react";


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
  intervalMs = 8000,
}) {
  const [isLarge, setIsLarge] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
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

  useEffect(() => {
  
  const mql = window.matchMedia('(min-width: 1024px)');
  const onChange = (e) => setIsLarge(e.matches);

  setIsLarge(mql.matches);
 
  if (mql.addEventListener) mql.addEventListener('change', onChange);
  else mql.addListener(onChange);

  return () => {
    if (mql.removeEventListener) mql.removeEventListener('change', onChange);
    else mql.removeListener(onChange);
  };
}, []);

useEffect(() => {
  if (isOpen && !isLarge) {
    setIsOpen(false);
    setPaused(false);
  }
}, [isOpen, isLarge]);

  const onKeyDown = (e) => {
    if (e.key === "ArrowRight") next();
    if (e.key === "ArrowLeft") prev();
  };



  const [galleryIndex, setGalleryIndex] = useState(0);
  const closeBtnRef = useRef(null);

  const images = useMemo(
    () => slides.map((s) => ({ src: s.image, alt: s.alt || s.title })),
    [slides]
  );

  const openLightbox = useCallback(
    (idx) => {
      if (!isLarge) return;
      setGalleryIndex(idx);
      setIsOpen(true);
      setPaused(true); 
    },
    [isLarge]
  );

  const closeLightbox = useCallback(() => {
    setIsOpen(false);
    setPaused(false); 
    setIndex(galleryIndex); 
  }, [galleryIndex]);

  const lbPrev = useCallback(() => {
    setGalleryIndex((i) => (i - 1 + images.length) % images.length);
  }, [images.length]);

  const lbNext = useCallback(() => {
    setGalleryIndex((i) => (i + 1) % images.length);
  }, [images.length]);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") lbPrev();
      if (e.key === "ArrowRight") lbNext();
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
  }, [isOpen, closeLightbox, lbPrev, lbNext]);
 

  return (
    <section
      id="adminOverview"
      className="scroll-mt-[200px] flex flex-col lg:flex-row px-5 sm:px-8 md:px-16 lg:px-28 mb-28 mt-28 lg:mb-[200px] lg:mt-[200px] gap-8 md:gap-12 lg:gap-20 "
      onKeyDown={onKeyDown}
    >
      <div className="w-full lg:w-2/3 flex justify-start items-center max-lg:order-2">
        <div className="w-full max-w-xl md:max-w-3xl lg:max-w-6xl ">
<div
  className="relative aspect-[16/9] w-full rounded-2xl bg-gray-50 shadow-sm group"
  onMouseEnter={() => setPaused(true)}
  onMouseLeave={() => setPaused(false)}
>
 
  <button
    type="button"
    aria-label="Åbn galleri"
    onClick={() => openLightbox(index)}
    className="absolute inset-0 z-10 cursor-zoom-in"
    title="Klik for at åbne galleri"
  />

  {slides.map((s, i) => (
    <img
      key={i}
      src={s.image}
      alt={s.alt || s.title}
     className={`absolute inset-0 h-full w-full object-contain
            transform-gpu will-change-transform transition-transform
                             duration-400 ease-[cubic-bezier(0.22,0.61,0.36,1)]
                             group-hover:scale-[1.015]
            ${i === index ? "opacity-100" : ""}`}
      aria-hidden={i === index ? "false" : "true"}
      draggable={false}
      style={{ pointerEvents: "none" }}  
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
                <p className="text-lg sm:text-lg md:text-xl text-gray-700 font-secondary">
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
                className="bg-primary-orange hover:bg-primary-orange-hover text-white px-6 py-3 rounded font-semibold transition-colors duration-400 ease-in-out cursor-pointer font-secondary text-base "
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
                     h-10 px-4 rounded-full bg-white/95 hover:bg-white shadow
                     focus:outline-none focus-visible:ring-2 focus-visible:ring-white cursor-pointer
                     select-none touch-manipulation transition-none"
        >
          Luk
        </button>

     
        <div className="grid grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] items-center gap-3 sm:gap-4">
 
          <button
            onClick={lbPrev}
            aria-label="Forrige"
            className="justify-self-end inline-flex items-center justify-center
                       w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/90 hover:bg-white shadow
                       focus:outline-none focus-visible:ring-2 focus-visible:ring-white cursor-pointer
                       select-none touch-manipulation transition-none"
          >
           
            <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
              <path d="M15 18l-6-6 6-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          {}
          <div className="rounded-2xl overflow-hidden">
            <div className="h-[85vh] sm:h-[90vh] w-[80vw] sm:w-[85vw] max-w-[1600px]">
              <img
                src={images[galleryIndex].src}
                alt={images[galleryIndex].alt}
                className="h-full w-full object-contain select-none "
                draggable={false}
              />
            </div>
          </div>

      
          <button
            onClick={lbNext}
            aria-label="Næste"
            className="justify-self-start inline-flex items-center justify-center
                       w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/90 hover:bg-white shadow
                       focus:outline-none focus-visible:ring-2 focus-visible:ring-white cursor-pointer
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

  
    </section>
  );
}
