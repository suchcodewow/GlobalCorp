/** @type {import('tailwindcss').Config} */
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
    },
  },
  plugins: [formsPlugin, headlessuiPlugin],
};
