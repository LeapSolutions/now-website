import React, { useRef, useEffect } from "react";

const HeroSection = () => {
  const contentRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (contentRef.current) {
        contentRef.current.style.transform = `translateY(${scrollY * 0.4}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="relative w-full h-[94vh] flex items-center overflow-hidden">
      <video
        ref={contentRef}
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/videos/hero-animation-NOW.webm" type="video/webm" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute top-0 left-0 w-full h-full  z-10" />
      <div className="relative z-20 text-white max-w-3xl ml-28">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 font-primary">
          Digital tidsregistrering og planlægning for teams og virksomheder
        </h1>
        <p className="text-base md:text-lg mb-8 font-secondary">
          NOW er et danskudviklet webbaseret system til planlægning,
          tidsregistrering og styring af arbejdstid.
        </p>
        <div className="flex gap-4">
          <button className="bg-[#F26A1B] hover:bg-[#f25f1b] items-center justify-center text-white px-6 py-3 rounded font-semibold transition font-primary text-lg">
            Prøv nu
          </button>
          <button className=" border border-white text-white px-6 py-2 items-center justify-center rounded font-semibold hover:bg-white hover:text-orange-500 transition font-primary text-lg">
            Kontakt os
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
