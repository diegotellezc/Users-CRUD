/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-color": "#D85D5D",
        "secondary-color": "#3C486B"
      }
    },
  },
  plugins: [],
}
