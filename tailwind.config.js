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
        'attic-primary': colors.emerald,
        'attic-secondary': colors.gray
      },
    },
  },
  plugins: [],
}
