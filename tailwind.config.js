/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens:{
        "xl-xl": "1440px",
         "xxl" : "1366px"
   },
    },
  },
 
  plugins: [],
}

