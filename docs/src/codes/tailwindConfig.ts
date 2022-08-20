const tailwindConfig = `//tailwind.config.js
const path = require('path');
const colors = require('tailwindcss/colors');

module.exports = {
  purge: [
    path.resolve(__dirname, './node_modules/attic-datepicker/**/*.js')
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Change with you want it
        'attic-primary': colors.red',
        'attic-secondary': colors.yellow,
        'attic-thirdly': colors.orange,
        'attic-fourth': colors.purple
      }
    }
  },
  variants: {
    extend: {
    }
  },
  plugins: []
};`;

export default tailwindConfig