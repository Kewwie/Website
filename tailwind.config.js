import colors from "tailwindcss/colors"

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        default: ['Arial', 'sans-serif'],
      },
    },
    colors: {
      transparent: 'transparent',
      white: colors.white,
      primary: "#2d2f33",
      secondary: "#232428"
    },
  },
  plugins: [],
}

