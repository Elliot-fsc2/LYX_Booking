import forms from "@tailwindcss/forms";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
    "./storage/framework/views/*.php",
    "./resources/views/**/*.blade.php",
    "./resources/js/**/*.jsx",
  ],

  darkMode: "class",

  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },

      height: {
        hero: "38rem",
        smhero: "35rem",
      },

      colors: {
        gold: {
          100: "#fff8e1",
          200: "#ffd700",
          300: "#ffc400",
          400: "#ffa07a",
          500: "#ff9900",
          600: "#ff8c00",
          700: "#ff7f00",
          800: "#ff6f00",
          900: "#ff5f00",
        },
        hero: "#F2B934",
      },
    },
  },
};
