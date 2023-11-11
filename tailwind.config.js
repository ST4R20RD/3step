/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Poppins", "sans-serif"],
    },
    extend: {
      colors: { primary: "#00CB7A", Charcoal: "#02444E", Teal: "#03635F", Midnight: "#1F2937" },
    },
  },
  plugins: [],
};
