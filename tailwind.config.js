/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        'auto-fit': 'repeat(auto-fit, minmax(240px, 1fr))',
      },
      colors: {
        primaryc: '#ffffff', // white
        secondaryc: '#D32F2F', // red-500
        paralc: '#00000049',
      },
      keyframes: {
        spin: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        customPing: {
          '100%': { transform: 'scale(2)', opacity: '1' },
        },
        slowBounce: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        fadeIn: {
          '0%': { opacity: 0 },
          '20%': { opacity: 0.2 },
          '40%': { opacity: 0.4 },
          '60%': { opacity: 0.6 },
          '80%': { opacity: 0.8 },
          '100%': { opacity: 1 },
        },
      },
      animation: {
        'slow-spin': 'spin 50s linear infinite', // Slower spin animation
        'custom-ping-500': 'customPing 3000ms  cubic-bezier(0, 0, 0.2, 1) infinite',
        'fade-in': 'fadeIn 5000ms ease-in-out forwards',
        'slow-bounce': 'slowBounce 3s ease-in-out infinite',

      },
    },
  },
  plugins: [],
};
