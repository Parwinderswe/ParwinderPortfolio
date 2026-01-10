/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors:{
        'muted-foreground':'#6B7280',
        'brand-teal': '#5b968b',
        'brand-teal-dark': '#3a6f66',
        'brand-gold': '#c39a4b',
        'brand-gold-dark': '#9e7632',
        'brand-ink': '#2b2c2c',
        'brand-cream': '#f5f1e8'
      }
    },
  },
  plugins: [],
}

