/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    './node_modules/tw-elements/dist/js/**/*.js'
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'base': '#06102d',
      'white': '#ffffff',
      'head': '#3ab7bf',
      'green': '#339966',
      'red': '#cc0000',
      'gold': '#ffd700'
    },
    extend: {},
  },
  plugins: [
    require("daisyui"),
    require('tw-elements/dist/plugin')
  ],
}