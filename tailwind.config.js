/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        xl: "0 0 8px 0 #909090; ",
        "2xl": "0 0px 12px 0 #505050; ",
        glass: "inset -5px 6px 0 #59ecd9; ",
        glass2: "inset -2px 4px 1px #59ecd9; ",
      },
      backgroundImage: {
        login: "url(/images/siuuu.webp)",
      },
    },
  },
  plugins: [],
};
