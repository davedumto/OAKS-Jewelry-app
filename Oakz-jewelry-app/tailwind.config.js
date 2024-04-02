/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily:{
        bienvenido: ["Bienvenido", "sans-serif"],
      },

      colors:{
        'brownbg' : '#D76F30',
        'beige' : '#EFEFD0',
        'green' : '#172D13',
        'brownish' : '#D76F3033',
      },
      width: {
        '577': '577px',
      },
      height :{
        '433': '433px',
      },
    },
  },
  plugins: [],
};



