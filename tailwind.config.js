/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/pages/**/*.{html,js,jsx,tsx,ts}", "./src/components/**/*.{html,js,jsx,tsx,ts}"],
  theme: {
    extend: {
      fontFamily: {
        labrada: ['"Labrada", serif'],
        monterat: ['"Montserrat"'],
        audio: ["Audiowide"],
      },
    },

    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      xxl: "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    colors: {
      transparent: "transparent",
      white: "#ffffff",
      purple: "#3f3cbb",
      darkGray: "#121212",
      lightGray: "#292929",
      extraLightGray: "#454545",
      orange: "#FE5301",
      offWhite: "#f2f2f2",
      neonGreen: "#B6FF75",
      violet: "#490CA6",
      red: "#ff6363",
      pink: "#FF7BD6",
      lightPink: "#F6c9df",
      yellow: "#f1ec40",
    },
  },
  darkMode: "class",
  plugins: [],
};
