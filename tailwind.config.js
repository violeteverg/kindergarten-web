/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        body: ["Poppins", "sans-serif"],
      },
      backgroundColor: {
        rosehip: "#F6C3AE",
        brick: "#F0743E",
        viola: "#CDBCDB",
        sunshine: "#FDD848",
        apple: "#AAD59E",
        clearday: "#9AB2D4",
      },
    },
  },
  plugins: [],
};
