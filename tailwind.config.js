/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        mountains: "url('/public/mountains.png')",
        stars: "url('/public/stars.png')",
        planets: "url('/public/planets.png')",
        sun: "url('/public/sun.png')",
        "footer-texture": "url('/img/footer-texture.png')",
      },
    },
    fontFamily: {
      sans: ["DM Sans", "sans-serif"],
    },
  },
  plugins: [],
};
