/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1E40AF',
        secondary: '#1D4ED8',
        accent: '#F43F5E',
        neutral: '#64748B',
        background: '#F3F4F6'
      },
    },
  },
  plugins: [],
}
