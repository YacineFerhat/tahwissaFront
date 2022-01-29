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
        'c-gray': '#C4C4C4',
        'c-g-green': '#D7F4ED',
        'c-g-blue': '#ABD2ED',
        'c-g-pink': '#EEA2EF',
        'c-g-orange': '#FAD7B6',
      },
      fontFamily: {
        merriweather: ['Merriweather', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
}
