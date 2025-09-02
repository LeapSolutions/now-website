import React, { useState, useEffect } from "react";

const BackToTopButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.pageYOffset > 300);
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    visible && (
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 z-50 bg-primary-orange hover:bg-primary-orange-hover text-white p-3 rounded-full shadow-lg transition-colors duration-400 ease-in-out cursor-pointer"
      >
        ↑
      </button>
    )
  );
};

export default BackToTopButton;
