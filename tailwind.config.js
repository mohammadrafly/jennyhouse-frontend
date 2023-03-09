/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        '16rem': '16rem',
        '800px': '800px',
        '75px': '75px',
        '90px': '90px',
        '352px': '352px',
        '240px': '240px'
      }
    },
  },
  plugins: [],
}
