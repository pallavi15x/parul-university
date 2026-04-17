/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        pu: {
          gold: '#FFD700',
          dark: '#0a0a0a',
          gray: '#161616',
        }
      }
    },
  },
  plugins: [],
}