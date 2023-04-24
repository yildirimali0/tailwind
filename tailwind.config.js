/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}","./public/index.html"],
  theme: {
    container:{
      center:true,
      screens:{
        lg:"1140px",
        xl:"1140px",
        "2xl":"1140px",
      }
    },
    extend: {
      fontFamily: {
        gemunu:["Gemunu Libre", "sans-serif"],
        open:["Open Sans", "sans-serif"]
      },

      colors:{
        "p-red":"#BC1A45",
        "p-melon":"#FFD369",
        "p-gray":"#DDDDDD",
        "p-white":"F7F7F7",
      },
      spacing:{
        "128":"32rem"
      }
    },
  },
  plugins: [],
}

