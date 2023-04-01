/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'Arial', 'sans-serif'],
      },
      colors: {
        kpj: {
          orange: '#EF8B47',
        },
      },
    },
  },
  // plugins: [
  //   plugin(function({ addUtilities }){
  //     const utils = {
  //       '.bg-hero': {
  //         'background-image': "linear-gradient(rgba(248, 247, 238, 0.9), rgba(248, 247, 238, 0.9)), url(/assets/hero.png)",
  //         'background-size': "cover",
  //         'background-position': "center center"
  //       }
  //     };

  //     addUtilities(utils)
  //   })
  // ],
};
