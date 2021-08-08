const plugin = require("tailwindcss/plugin");

module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        inter: "Inter",
        lexend: "Lexend Deca"
      },
      colors: {
        primary: {
          "very-dark-blue": "hsl(233, 47%, 7%)",
          "dark-desaturated-blue": "hsl(244, 38%, 16%)",
          "soft-violet": "hsl(277, 64%, 61%)"
        },
        neutral: {
          "white": "hsl(0, 0%, 100%)",
          "slightly-1": "hsla(0, 0%, 100%, 0.75)",
          "slightly-2": "hsla(0, 0%, 100%, 0.6)"
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    plugin(function({addUtilities}){
      const utilities = {
        ".bg-desktop" : {
          "background-image": "url(/desktop.jpg)"
        },
        "bg-mobile": {
          "background-image": "url(/mobile.jpg)"
        }
      };
      addUtilities(utilities);
    })
    
  ]
}
