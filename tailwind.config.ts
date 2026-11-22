import type { Config } from "tailwindcss";
const config: Config = {
  darkMode: "class",
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#4F46E5",
        accent: "#06B6D4",
        ink: "#0B1020",
        paper: "#F8FAFC",
      },
    },
  },
  plugins: [],
};
export default config;
