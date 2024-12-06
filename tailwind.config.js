/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#00A19B',
          dark: '#008B86',
          light: '#00B8B1'
        },
        secondary: {
          DEFAULT: '#2C3E50',
          dark: '#1a252f',
          light: '#34495e'
        }
      }
    },
  },
  plugins: [],
};