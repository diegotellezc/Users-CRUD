/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-color": "#555A88",
        "delete-color": "#D85D5D",
        "text-color": "#000000"
      }
    },
  },
  plugins: [],
}
