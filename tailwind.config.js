/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: "#0F0F1A",
        card: "#1A1A2E",
        primary: "#6C63FF",
        secondary: "#4ECDC4",
        accent: "#FF6B9D",
        muted: "#9999CC",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

