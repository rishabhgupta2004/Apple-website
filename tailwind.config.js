/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        blue: '#2997FF',
        gray:{
          default:"#86868b",
          100:"#94948d",
          200:"#afafaf",
          300:"#42424578"
        },
        zinc:"#101010",
      }
    },
  },
  plugins: [],
}