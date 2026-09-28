/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        console: {
          bg: "#14161C",
          panel: "#1E212B",
          panelLight: "#272B38",
          border: "#343947",
        },
        bar: {
          idle: "#4B5A78",
          compare: "#F5A623",
          swap: "#FF5D73",
          sorted: "#4ADE80",
        },
        action: {
          DEFAULT: "#8B5CF6",
          hover: "#7C3AED",
        },
        ink: {
          primary: "#F2F0EB",
          muted: "#9CA3B4",
        },
      },
      fontFamily: {
        display: ["Space Grotesk", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      borderRadius: {
        panel: "0.75rem",
      },
    },
  },
  plugins: [],
};