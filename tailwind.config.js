/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
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
      backgroundImage: {
        bgblue: "url('../public/bg1.png')",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
