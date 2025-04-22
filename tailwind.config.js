/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0b0b0b",
        foreground: "#f4f4f4",
        neon: "#ff7f11",
      },
    },
  },
  plugins: [],
};

export default config;
