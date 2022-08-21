/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx,html}",
    "./docs/**/*.{vue,js,ts,jsx,tsx,html}",
  ],
  theme: {
    extend: {
      colors: {
        'attic-primary': '#A66CFF',
        'attic-secondary': '#9C9EFE',
        'attic-thirdly': '#AFB4FF',
        'attic-fourth': '#B1E1FF'
      },
    },
  },
  plugins: [],
}
