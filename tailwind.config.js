const path = require('path');
const colors = require('tailwindcss/colors');
const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
    mode: 'jit',
    purge: [
// './docs/public/index.html',
// './docs/src/*.{vue,js,ts,jsx,tsx}',
        path.resolve(__dirname, './node_modules/attic-datepicker/**/*.js')
    ],
    darkMode: 'class', // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                'attic-primary': colors.emerald,
                'attic-secondary': colors.gray
            },
            fontFamily: {
                sans: ['Inter', ...fontFamily.sans]
            },
            transitionProperty: {
                width: 'width',
                height: 'height',
            },
            opacity: {
                85: '0.85'
            }
        }
    },
    variants: {
        extend: {
            cursor: ['disabled'],
            textOpacity: ['disabled'],
            textColor: ['disabled']
        }
    },
    plugins: []
};
