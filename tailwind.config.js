/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        dark: {
          DEFAULT: '#0A0A0A',
          100: '#1a1a1a',
          200: '#2a2a2a'
        }
      },
      boxShadow: {
        'glow': '0 0 20px rgba(37, 99, 235, 0.2)',
      }
    },
  },
  plugins: [],
};