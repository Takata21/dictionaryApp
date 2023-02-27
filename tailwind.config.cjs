/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    fontFamily: {
      sans: ["Inter"],
      serif: ["Noto Serif"],
      mono: ["Roboto Mono"],
    },
    extend: {},
  },
  plugins: [],
}
