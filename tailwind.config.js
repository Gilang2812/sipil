/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem", // padding default untuk semua layar
        sm: "2rem", // padding untuk layar small (640px ke atas)
        md: "4rem", // padding untuk layar medium (768px ke atas)
        lg: "6rem", // padding untuk layar large (1024px ke atas)
        xl: "8rem",
      },
    },
    extend: {
      gridTemplateColumns: {
        header: "minmax(50px,100px) auto 100px",
      },
      animation: {
        fade: "fade 1s ease-in-out",
        slideInLeft: "fadeLeft 1s ease-in-out",
        slideInRight: "fadeRight 1s ease-in-out",
      },
      keyframes: {
        fade: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        fadeLeft: {
          "0%": { opacity: 0, transform: "translateX(-10%)" },
          "80":{opacity: 0.8},
          "100%": { opacity: 0.8, transform: "translateX(0)" },
        },
        fadeRight: {
          "0%": { opacity: 0, transform: "translateX(10%)" },
          "100%": { opacity: 1, transform: "translateX(0)" },
        },
      },
    },
  },
  plugins: [],
};
