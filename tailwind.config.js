module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'rubik': ['"Rubik Mono One"']
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
