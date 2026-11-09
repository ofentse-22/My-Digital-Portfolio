/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#10141e",
        panel: "#171d29",
        mint: "#9ce5c0",
      },
    },
  },
  plugins: [],
};
