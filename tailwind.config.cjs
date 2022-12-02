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
        snowFall: {
          "0%": {
            transform: "translateY(-2000%)",
          },
          "100%": {
            transform: "translateY(0%)",
          },
        },
      },
      animation: {
        twinkle: "twinkle 3s ease-in-out infinite",
        snowFall: "snowFall 10s linear",
      },
    },
  },
  plugins: [],
};
