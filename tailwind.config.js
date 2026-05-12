/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        green: '#3CC84A',
        dark: '#0D0F1A',
        bg: '#F4F6F8',
        tint: '#DCFCE7',
      },
      keyframes: {
        'marquee-left': {
          '0%':   { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-right': {
          '0%':   { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
      animation: {
        'marquee-left':  'marquee-left 35s linear infinite',
        'marquee-right': 'marquee-right 35s linear infinite',
      },
      fontFamily: {
        sans: [
          '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto',
          'Helvetica', 'Arial', 'sans-serif',
        ],
      },
    },
  },
  plugins: [],
}
