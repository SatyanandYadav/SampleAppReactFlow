/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        nunito: ["var(--font-nunito)"],
      },
    },
  },
  plugins: [],
};
