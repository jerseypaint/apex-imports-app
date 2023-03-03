/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1.5rem',
        xl: '2.5rem',
        '2xl': '0rem',
      },
    },
    extend: {
      colors: {
        'ai-darkGrey': '#1B1B1B',
        'ai-gold': '#C38402'
      },
      fontFamily: {
        'exo-2': ['"Exo 2"', 'Arial'],
        'montserrat': ['Montserrat', 'Helvetica', 'Arial']
      }
    },
  },
  plugins: [],
}