/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'founder' :  ['Founders_Grotesk_X-Condensed', "sans-serif"],
        'neu' : ["'Neue_Montreal'", "sans-serif"]
      }
    },
  },
  plugins: [],
}