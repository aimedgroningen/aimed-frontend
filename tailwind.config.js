/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    fontFamily: {
      display: ["Montserrat", "sans-serif"],
      body: ['"Source Sans Pro"', "sans-serif"],
    },
    extend: {
      colors: {
        primary: "#003DCE",
        accent: "#FF7D00",
      },
    },
  },
  plugins: [],
};
