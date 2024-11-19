import defaultTheme from "tailwindcss/defaultTheme";
import forms from "@tailwindcss/forms";
// import flowbite from "flowbite-react/tailwind";

const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
    "./storage/framework/views/*.php",
    "./resources/views/**/*.blade.php",
    "./resources/js/**/*.jsx",
    flowbite.content(),
  ],

  darkMode: "class",

  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
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
      },
    },
  },

  plugins: [forms, flowbite.plugin()],
};
