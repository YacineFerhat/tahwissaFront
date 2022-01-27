module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'c-blue': '#014F86',
        'c-orange': '#FFA034',
        'c-dark': '#101725',
        'c-white': '#FFFFFF',
      },
      fontFamily: {
        merriweather: ['Merriweather', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
