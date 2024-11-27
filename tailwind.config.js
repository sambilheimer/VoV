/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./dist/**/*.{html,js}",
    "./pages/**/*.{html,js}",
    "./index.html",
  ],
  theme: {
    extend: {
      screens: {
        print: { raw: "print" },
        screen: { raw: "screen" },
      },
      fontFamily: {
        logo: "half",
        base: "JetBrainsMonoNL", // Adds a new `font-display` class
      },
      backgroundImage: {
        main: "url('/assets/bg_copy.jpg')",
      },
    },
  },
  plugins: [],
};
