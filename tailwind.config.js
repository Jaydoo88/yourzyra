/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        zyra: {
          bg: "#0b1016",
          card: "#111827",
          text: "#e5e7eb",
          muted: "#9ca3af",
          brand: "#7c3aed",
          brandSoft: "#a78bfa"
        }
      },
      borderRadius: { xl: "14px", "2xl": "18px" }
    },
  },
  plugins: [],
};