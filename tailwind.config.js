/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'noto-sans': ['Noto Sans', 'sans-serif'],
      },

      colors: {
        hijau: '#709A08',
        'hijau-gelap': '#416100',
        merah: '#FF0000',
      },
    },
  },
  plugins: [],
};
