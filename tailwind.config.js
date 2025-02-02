/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors:{
        primary: '#1a1a1a',
        secondary: '#2d2d2d',
        accent: '#6366f1',
        slate: {
          750: '#2a3441'
        }
      },
    },
  },
  plugins: [],
}

