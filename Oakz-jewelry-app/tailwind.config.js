/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors:{
        'brownbg' : '#D76F30',
        'beige' : '#EFEFD0'
      }
    },
  },
  plugins: [],
};
