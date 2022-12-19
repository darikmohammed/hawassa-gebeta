/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      poppin: ['Poppins', 'sans-serif'],
    },

    extend: {
      dropShadow: {
        nav: '0px 4px 32px rgba(142,142,142,0.25)',
      },
      colors: {
        body: '#F5F5F5',
        primary_light: '#FAA613',
        primary: '#D08706',
        black: '#171717',
        black_1: '#B5B6BA',
        black_light: '#F7F7F7',
      },
      fontSize: {
        h1: ['64px', '72px'],
        h2: ['56px', '64px'],
        h3: ['48px', '56px'],
        h4: ['40px', '48px'],
        h5: ['32px', '40px'],
        h6: ['24px', '32px'],
      },
    },
  },
  plugins: [],
};
