/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      "2xl": { max: "1535px" },
      // => @media (max-width: 1535px) { ... }

      xl: { max: "1279px" },
      // => @media (max-width: 1279px) { ... }

      lg: { max: "1023px" },
      // => @media (max-width: 1023px) { ... }

      md: { max: "767px" },
      // => @media (max-width: 767px) { ... }

      sm: { max: "639px" },
      // => @media (max-width: 639px) { ... }

      xlsm: { max: "320px" },
      // => @media (max-width: 320px) { ... }
    },
    extend: {
      colors: {
        "darky-col": "#0b2b45",
        // "darky-col": "#0A4D68",
        "dark-col": "#088395",
        "light-col": "#0077d6",
        // "light-col": "#05BFDB",
        "extra-col": "#3c97e0",
        // "extra-col": "#00FFCA",
      },
    },
  },
  plugins: [
    require("tailwind-scrollbar-hide"),
    require("tailwind-scrollbar")({ nocompatible: true }),
    // ...
  ],
};
