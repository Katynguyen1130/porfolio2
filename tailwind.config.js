/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{html,js}", "./components/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        labrada: ['"Labrada", serif'],
        poppins: ['"Poppins"'],
      },
    },
  },
  plugins: [],
};
