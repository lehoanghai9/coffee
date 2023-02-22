/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cyan: "#0E8784",
        greyblue: "#333D4B",
        pale: "#FDD6BA",
        cream: "#FEFCF7",
        grey: "#83888F",
        hoverbutton: "#66D2CF",
      },

      fontFamily: {
        fraunces: "'Fraunces', serif",
        barlow: "'Barlow', sans-serif"
      }
      
    },
  },
  plugins: [],
}
