import React, { useEffect, useState } from "react";
 



const ScrollProgressBar = () => {
  const [scrollWidth, setScrollWidth] = useState(0);

  const updateScrollProgress = () => {
    const scrollTop = window.scrollY;
    const docHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scrolled = (scrollTop / docHeight) * 100;
    setScrollWidth(scrolled);
  };

  useEffect(() => {
    window.addEventListener("scroll", updateScrollProgress);
    return () => window.removeEventListener("scroll", updateScrollProgress);
  }, []);

  return (
    <div className="scroll-progress-bar" style={{ width: `${scrollWidth}%` }} />
  );
};

export default ScrollProgressBar;
