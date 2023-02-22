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
        caps: "#F4F1EB",
        notavailable: "#979797",
        coff: "#72522F"
      },

      fontFamily: {
        fraunces: "'Fraunces', serif",
        barlow: "'Barlow', sans-serif"
      },
      backgroundImage: {
        'createmob': 'url("assets/plan/mobile/image-hero-blackcup.jpg")',
        'createtablet': 'url("assets/plan/tablet/image-hero-blackcup.jpg")',
        'createdesktop': 'url("assets/plan/desktop/image-hero-blackcup.jpg")',
        'aboutdesktop' : 'url("assets/about/desktop/image-hero-whitecup.jpg")',
        'aboutmobile' : 'url("assets/about/mobile/image-hero-whitecup.jpg")',
        'abouttablet' : 'url("assets/about/tablet/image-hero-whitecup.jpg")',
      },
    },
  },
  plugins: [],
}
