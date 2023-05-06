/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'cta-home' : "url('../public/bg-cta.jpg')",
        'pillars' : "url('../public/pillars.jpg')",
        'silas' : "url('../public/bg-silas.jpg')",
      },
      colors: {
        'blue': '#00112d',
        'gray': '#6c6869',
        'winne': '#5a1c21',
      }
    },
  },
  plugins: [],
}
