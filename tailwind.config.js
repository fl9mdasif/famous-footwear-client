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
      'base': '#4cdab9',
      'base1': '#155e4d',
      'body': '#f5f5f5',
      'white': '#fff',
      'red': '#cc3535',
      'blue': '#3535ca',
      'black': '#111111',
      'gold': '#fdda1b'
    },
    extend: {},
  },
  plugins: [
    require("daisyui"),
    require('tw-elements/dist/plugin')
  ],
}