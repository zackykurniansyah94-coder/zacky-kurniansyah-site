module.exports = {
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './lib/**/*.{js,jsx}'
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f7ff',
          100: '#dbefff',
          500: '#0b74d1', // main blue
          700: '#075a9b'
        }
      },
      fontFamily: {
        montserrat: ['Montserrat', 'ui-sans-serif', 'system-ui']
      }
    },
  },
  plugins: [],
}
