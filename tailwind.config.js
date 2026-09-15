/** @type {import('tailwindcss').Config} */

export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'bookmark-purple': '#ed1941',
        'bookmark-red': '#ed1941',
        'bookmark-blue': '#1d1714',
        'bookmark-grey': '#615b58',
        'bookmark-white': '#f0f1f5',
        'hover-colour': '#c90e32'
      },
      scale: {
        175: '1.75',
        98: '0.98'
      }
    },
    fontFamily: {
      Poppins: ['Inter, sans-serif'],
      Lucky: ['Inter, sans-serif']
    },
    container: {
      center: true,
      padding: '1rem',
      screens: {
        lg: '1124px',
        xl: '1124px',
        '2xl': '1124px'
      }
    }
  },
  variants: {
    extend: {}
  }
};
