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
      'base': '#7863FF',
      'white': '#ffffff',
      'head': '#3ab7bf',
      'green': '#339966',
      'black': '#111111',
      'gold': '#ffd700'
    },
    extend: {},
  },
  plugins: [
    require("daisyui"),
    require('tw-elements/dist/plugin')
  ],
}