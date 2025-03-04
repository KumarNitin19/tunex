/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0468D7",
        background: {
          light: "#FFFFFF",
          dark: "#121212",
        },
        "main-text": {
          light: "#1A1A1A",
          dark: "#FFFFFF",
        },
        card: {
          light: "#E3E8EF",
          dark: "#191919",
        },
        border: {
          light: "#A0AEC0",
          dark: "#535353",
        },
        "sub-text": {
          // Muted text
          light: "#6B7280",
          dark: "#A1A1A1",
        },
      },
      fontFamily: {
        sans: ["Montserrat", "sans-serif"], // Default sans font
      },
    },
  },
  darkMode: "class",
  plugins: [],
};
