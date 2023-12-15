/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT ({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        raleway:['Raleway', 'sans-serif'],
        playfair: ['Playfair Display', 'serif'],
      },
      colors: {
        'primary': "#526D82",
        'accent': "#404040",
        'divider': "#CBDAE7",
        'background': "#F2F2F2",
        'secondary-text': "#51575D"
      }
    },
  },
  plugins: [],
});