/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      mobile: { min: "0", max: "620px" },
    },

    extend: {},
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
};
