/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        twinkle: {
          "0%, 100%": {
            color: "yellow",
            opacity: 1,
          },
          "50%": {
            color: "white",
            opacity: 0.5,
          },
        },
      },
      animation: {
        twinkle: "twinkle 3s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
