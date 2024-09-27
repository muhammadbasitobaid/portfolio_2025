/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FFFFFF', // Example primary color (blue)
        secondary: 'rgba(182, 180, 189, 0.2)', // Example secondary color (orange)
        gray: {
          light: '#F3F4F6', // Light gray
          DEFAULT: '#9CA3AF', // Default gray
          dark: '#4B5563', // Dark gray
        }
      }
    },
  },
  plugins: [],
}
