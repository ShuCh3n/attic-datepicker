/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'attic-primary': '#FFB3B3',
        'attic-secondary': '#FFDBA4',
        'attic-thirdly': '#FFE9AE',
        'attic-fourth': '#C1EFFF'
      },
    },
  },
  plugins: [],
}
