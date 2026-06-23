export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"]
      },
      colors: {
        brand: {
          50: "#eef6ff",
          100: "#d8eaff",
          500: "#2563eb",
          600: "#1d4ed8",
          700: "#1e40af"
        }
      }
    }
  },
  plugins: []
};
