/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        space: {
          dark: '#050505',
          darker: '#000000',
          card: 'rgba(25, 25, 40, 0.4)',
        },
        neon: {
          orange: 'var(--color-highlight-orange)',
          purple: 'var(--color-primary-light)',
          blue: 'var(--color-primary-dark)',
          yellow: 'var(--color-highlight-lime)',
          magenta: 'var(--color-highlight-orange)',
        }
      },
      fontFamily: {
        jakarta: ['"Plus Jakarta Sans"', 'sans-serif'],
        raela: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      animation: {
        'text-glow': 'text-glow 3s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'pop': 'pop 0.3s ease-out',
        'spin-slow': 'spin 30s linear infinite',
        'spin-reverse': 'spin 40s linear infinite reverse',
        'fade-in': 'fadeIn 0.5s ease-out both',
        'bounce-slow': 'bounce 2s infinite',
        'glow-breathe': 'glow-breathe 3s ease-in-out infinite',
      },
      keyframes: {
        'text-glow': {
          '0%, 100%': { textShadow: '0 0 10px rgba(168,86,238,0.3), 0 0 20px rgba(255,140,66,0.2)' },
          '50%': { textShadow: '0 0 20px rgba(168,86,238,0.6), 0 0 30px rgba(255,140,66,0.4)' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'pop': {
          '0%': { transform: 'scale(0.95)' },
          '40%': { transform: 'scale(1.02)' },
          '100%': { transform: 'scale(1)' },
        },
        'fadeIn': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'glow-breathe': {
          '0%, 100%': { opacity: '0.5' },
          '50%': { opacity: '1' },
        },
      }
    },
  },
  plugins: [],
};
