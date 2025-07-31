import React, { useEffect } from "react";

const NavatticEmbed = () => {
  useEffect(() => {
    // Prevent duplicate script injection
    if (!window.__navatticScriptLoaded) {
      const script = document.createElement("script");
      script.src = "https://js.navattic.com/embeds.js";
      script.async = true;
      script.onload = () => {
        if (window.NavatticEmbed) {
          window.NavatticEmbed.loadEmbeds();
        }
      };
      document.body.appendChild(script);
      window.__navatticScriptLoaded = true;
    } else {
      // Script already exists — still try to load embeds again just in case
      if (window.NavatticEmbed) {
        window.NavatticEmbed.loadEmbeds();
      }
    }
  }, []);

  return (
    <div>
      <iframe
        data-navattic-src="https://capture.navattic.com/cmdradgg2000004kz6bjq0310"
        data-navattic-placeholder-src="https://app.navattic.com/api/poster/cmdradgg2000004kz6bjq0310"
        data-navattic-button-text="Try a demo"
        style={{
          border: "none",
          width: "100%",
          height: "600px",
          position: "relative",
          borderRadius: "10px",
          boxShadow: "0 10px 20px rgba(0, 0, 0, 0.3)",
        }}
        data-navattic-demo-id="cmdradgg2000004kz6bjq0310"
        allow="fullscreen"
      ></iframe>
    </div>
  );
};

export default NavatticEmbed;
