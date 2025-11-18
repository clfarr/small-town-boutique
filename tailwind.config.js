/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Boho pastel palette
        'sand': {
          50: '#fdfbf7',
          100: '#f8f3eb',
          200: '#f0e6d6',
          300: '#e6d5bb',
          400: '#d9c0a0',
          500: '#c9a87a',
        },
        'sage': {
          50: '#f7f9f7',
          100: '#e8ede8',
          200: '#d4dfd4',
          300: '#b8cbb8',
          400: '#97b497',
          500: '#6b8f6b',
        },
        'blush': {
          50: '#fef7f7',
          100: '#fceaea',
          200: '#f9d6d6',
          300: '#f5b8b8',
          400: '#f09595',
          500: '#e76f6f',
        },
        'lavender': {
          50: '#f9f7fc',
          100: '#f0ebf7',
          200: '#e3d8f0',
          300: '#d1bde6',
          400: '#bb9dd9',
          500: '#a078ca',
        },
        'cream': {
          50: '#fffef9',
          100: '#fffcf0',
          200: '#fff9e0',
          300: '#fff4cc',
          400: '#ffeeaa',
          500: '#ffe680',
        },
        'dusty-rose': {
          50: '#fdf7f8',
          100: '#f9ecee',
          200: '#f3d7db',
          300: '#e9b9c1',
          400: '#dc94a2',
          500: '#cc6d7f',
        },
        'terracotta': {
          50: '#fdf8f6',
          100: '#f9ede8',
          200: '#f2d8cd',
          300: '#e7baaa',
          400: '#d99680',
          500: '#c76f52',
        },
      },
      fontFamily: {
        'display': ['Playfair Display', 'serif'],
        'script': ['Dancing Script', 'cursive'],
        'body': ['Poppins', 'sans-serif'],
      },
      borderRadius: {
        'organic': '63% 37% 54% 46% / 55% 48% 52% 45%',
        'blob-1': '60% 40% 30% 70% / 60% 30% 70% 40%',
        'blob-2': '40% 60% 70% 30% / 40% 70% 30% 60%',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'blob': 'blob 7s infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'wave': 'wave 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        blob: {
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
          '100%': { transform: 'translate(0px, 0px) scale(1)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        wave: {
          '0%, 100%': { transform: 'rotate(0deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
      },
    },
  },
  plugins: [],
}
