/** @type {import('tailwindcss').Config} */
import colors from 'tailwindcss/colors'

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        "bg-soft": "var(--bg-soft)",
        primary: "var(--primary)",
        cta: "var(--cta)",
        dark: "var(--dark)",
        muted: "var(--muted)",
        ivory: "var(--color-ivory)"
      },
      fontFamily: {
        heading: ["Quicksand", "sans-serif"],
        body: ["Nunito Sans", "sans-serif"],
      }
    },
  },
  plugins: [],
}
