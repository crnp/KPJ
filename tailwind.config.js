/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    patterns: {
      opacities: {
        100: '1',
        80: '.80',
        60: '.60',
        40: '.40',
        20: '.20',
        10: '.10',
        5: '.05',
      },
      sizes: {
        1: '0.25rem',
        2: '0.5rem',
        4: '1rem',
        6: '1.5rem',
        8: '2rem',
        16: '4rem',
        20: '5rem',
        24: '6rem',
        32: '8rem',
      },
    },
    extend: {
      fontFamily: {
        sans: ['Poppins', 'Arial', 'sans-serif'],
        display: ['Sporta', 'Arial', 'sans-serif'],
      },
      colors: {
        kpj: {
          orange: '#E4572E',
          brown: '#2F272A',
          gray: '#413B3D',
          dots: 'rgba(217, 217, 217, 0.04)',
        },
      },
    },
  },
  plugins: [
    require('tailwindcss-bg-patterns'),
    plugin(function ({ addUtilities }) {
      const utils = {
        '.dots': {
          width: '34.08px',
          height: '33px',
          background: ' rgba(217, 217, 217, 0.04)',
          'border-radius': '2rem',
        },
      };

      addUtilities(utils);
    }),
  ],
};
