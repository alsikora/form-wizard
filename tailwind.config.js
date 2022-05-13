module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        '2': 'repeat(2, minmax(0, 150px));'
      }
    },
  },
  plugins: [],
}
