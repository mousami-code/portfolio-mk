/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        girly: {
          black: '#1a1625',
          dark: '#2a1f3d',
          pink: '#ff6b9d',
          purple: '#c084fc',
          lavender: '#e0b3ff',
          mint: '#b4f8c8',
          peach: '#ffd6e8',
          glow: '#ff89c2',
        },
      },
      fontFamily: {
        orbitron: ['Orbitron', 'sans-serif'],
        mono: ['"Share Tech Mono"', 'monospace'],
        sans: ['Inter', 'sans-serif'],
      },
      animation: {
        'flicker': 'flicker 3s infinite',
        'glow': 'glow 2s ease-in-out infinite',
        'spark': 'spark 4s ease-in-out infinite',
        'slide-up': 'slideUp 0.6s ease-out',
      },
      keyframes: {
        flicker: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.8' },
        },
        glow: {
          '0%, 100%': { 
            boxShadow: '0 0 20px rgba(232, 106, 51, 0.5)',
          },
          '50%': { 
            boxShadow: '0 0 40px rgba(232, 106, 51, 0.8), 0 0 60px rgba(232, 106, 51, 0.4)',
          },
        },
        spark: {
          '0%, 100%': { transform: 'translateY(0) scale(1)', opacity: '0.5' },
          '50%': { transform: 'translateY(-10px) scale(1.2)', opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(100px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '33%': { transform: 'translate(30px, -30px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
      },
      backgroundImage: {
        'rust-gradient': 'linear-gradient(135deg, #1E1E1E 0%, #0A0A0A 100%)',
        'metal-texture': 'linear-gradient(180deg, #3A3A3A 0%, #1E1E1E 100%)',
      },
    },
  },
  plugins: [],
}

