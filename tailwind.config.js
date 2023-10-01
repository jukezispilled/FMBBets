/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        custom: ['CustomFont', 'sans-serif'], // Replace 'FontName' with your actual font name
      },
      animation: {
        text: 'text 2.5s ease infinite',
        fadeIn: 'fadeIn 0.3s ease-in',
      },
      transitions: {
        'fade-in': 'opacity 0.5s ease-in',
      },
      keyframes: {
        text: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center',
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center',
          },
        },
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },
    },
  },
  plugins: [],
}

