/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#686736",
        secondary: "#3E332C",
        orange: "#BD5A08",
        timberwolf: "#D9D4C9",
        gray2: "#050505",
      },
      backgroundImage: {
        Hero: "url('assets/Hero.png')",
      },
      gridTemplateColumns: {
        'category': "2fr 1fr",
        'story': "1fr 2fr"
      }
    },
  },
  plugins: [],
};
