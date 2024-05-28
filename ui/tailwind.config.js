/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
const headlessuiPlugin = require("@headlessui/tailwindcss");
const formsPlugin = require("@tailwindcss/forms");
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter, ...defaultTheme.fontFamily.sans"],
      },
      colors: {
        primary: colors.sky,
        secondary: colors.emerald,
        buttons: colors.indigo,
        typography: colors.slate,
      },
    }
  },
  plugins: [formsPlugin, headlessuiPlugin],
};
