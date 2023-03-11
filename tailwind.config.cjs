/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{html,ts,tsx}"],
  theme: {
    extend: {},
    colors: {
      "primary-50": "#fce9e5",
      "primary-100": "#ffcbb7",
      "primary-200": "#ffaa89",
      "primary-300": "#ff8958",
      primary: "#ff6e31",
      "primary-500": "#fe5600",
      "primary-600": "#f35000",
      "primary-700": "#e64900",
      "primary-800": "#d84100",
      "primary-900": "#bf3300",
      complementary: "#31c1ff",
      analogous: "#ffd631",
      "sub-analogous": "#ff315a",
      black: {
        500: "#333333",
      },
      white: {
        500: "#fefefe",
      },
    },
  },
  plugins: [],
};
