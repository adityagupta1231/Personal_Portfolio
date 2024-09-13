/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        // Hover color utility
        '.red': {
          
            color: 'rgb(11, 96, 176)',
        },
        // Static shadow utility
        '.shadow-red': {
          textShadow: '0 0 70px rgb(64, 162, 216)',
        },
        // Hover shadow utility
        '.hover-shadow-red': {
          '&:hover': {
            textShadow: '0 0 10px rgb(64, 162, 216)',
          },
        },
      });
    },
  ],
}
