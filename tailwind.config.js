/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        cinzel: ['Cinzel', 'serif'],
        raleway: ['Raleway', 'sans-serif'],
      },
      colors: {
        void:    '#07060d',
        deep:    '#0d0b18',
        surface: '#13112280',
        violet: {
          DEFAULT: '#7c3aed',
          bright:  '#9d5cf5',
          dim:     '#4c1d95',
        },
        lilac: '#c4b5fd',
        ghost: '#e8e4ff',
        muted: '#6b6490',
      },
      boxShadow: {
        glow:    '0 0 30px rgba(124,58,237,0.35)',
        'glow-lg':'0 0 60px rgba(124,58,237,0.25)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
      },
      keyframes: {
        float: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%':     { transform: 'translateY(-12px)' },
        },
      },
      backgroundImage: {
        'radial-void': 'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(124,58,237,0.12) 0%, transparent 70%)',
      },
    },
  },
  plugins: [],
}
