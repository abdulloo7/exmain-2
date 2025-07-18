/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
    screens:{
      'mx':{max: '510px'},
      'mn':{min: '510px'},  
    }
  },
  plugins: [],
}

