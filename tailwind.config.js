/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container:{
      center:true,
      padding:{
        DEFAULT: '1rem', // padding default untuk semua layar
        sm: '2rem',      // padding untuk layar small (640px ke atas)
        md: '4rem',      // padding untuk layar medium (768px ke atas)
        lg: '6rem',      // padding untuk layar large (1024px ke atas)
        xl: '8rem',     
      }
    },
    extend: {
      gridTemplateColumns: {
        'header':  'minmax(50px,100px) auto 100px',
      }
    },
  },
  plugins: [],
}

