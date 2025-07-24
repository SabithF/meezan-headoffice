/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        outfit: ["Outfit", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
        urbanist: ["Urbanist", "sans-serif"],
        lato: ["Lato", "sans-serif"],
        messiri: ["El Messiri", "sans-serif"],
        quicksand: ["Quicksand", "sans-serif"]

      },
      colors: {
        meezanGold: {
          DEFAULT: '#b69747',
          light: '#d5b874',
          dark: '#8c6e32',
        },
      }
    },
  },
  plugins: [],
};

