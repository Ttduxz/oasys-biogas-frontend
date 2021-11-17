const colors = require('tailwindcss/colors')

module.exports = {
    mode: 'jit',
    purge: [
    './src/**/*.{js,ts,jsx,tsx}', 
    './public/index.html',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './sections/**/*.{js,ts,jsx,tsx}',
    ],
    darkMode: false, // or 'media' or 'class'
    theme: {
        fontFamily: {
            sans: ['Roboto', 'sans-serif'],
            serif: ['"Roboto Slab"', 'serif'],
            body: ['Roboto', 'sans-serif'],
        },
        extend: {
            colors: {
                'regal-blue': '#243c5a',
              }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
