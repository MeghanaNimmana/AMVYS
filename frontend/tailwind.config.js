/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          500: '#0284c7',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
        amazon: {
          yellow: '#FF9900',
          dark: '#131921',
          navy: '#232F3E',
          light: '#EAEDED'
        },
        flipkart: {
          blue: '#2874F0',
          yellow: '#FFE500'
        },
        blinkit: {
          yellow: '#F8CB46',
          green: '#0C831F'
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      backdropBlur: {
        xs: '2px',
      }
    },
  },
  plugins: [],
}
