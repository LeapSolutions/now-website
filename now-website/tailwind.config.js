// tailwind.config.js
/** @type {import('tailwindcss').Config} */

const config = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        spartan: ['"League Spartan"', "sans-serif"],
        montserrat: ['"Montserrat"', "sans-serif"],
        sans: ['"Montserrat"', "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
