/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0f172a",
        muted: "#475569",
        soft: "#94a3b8",
        line: "#e2e8f0",
        surface: "#f5f8ff",
        accent: "#5eead4",
      },
      fontFamily: {
        sans: ["Plus Jakarta Sans", "system-ui", "-apple-system", "Segoe UI", "Roboto", "sans-serif"],
        display: ["Sora", "Plus Jakarta Sans", "system-ui", "sans-serif"],
      },
      maxWidth: {
        site: "1180px",
      },
    },
  },
  plugins: [],
};
