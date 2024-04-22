/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class"
  ,
  theme: {
    extend: {
      fontFamily: {
        fira: ['Fira Sans', 'sans-serif'],
        karla: ['Karla', 'sans-serif'],
        monts: ['Montserrat', 'sans-serif']
      }
    },
  },
  plugins: [],
}