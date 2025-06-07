/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        wave: "wave 5s ease-in-out infinite",
      },
      keyframes: {
        wave: {
          "0%, 100%": { backgroundPosition: "200% center" },
          "50%": { backgroundPosition: "0% center" },
        },
      },
    },
  },
  plugins: [],
};
