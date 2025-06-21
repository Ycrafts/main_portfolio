/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': 'rgb(var(--color-primary) / <alpha-value>)', // A warm, brownish off-white
        'secondary': 'rgb(var(--color-secondary) / <alpha-value>)', // White for card backgrounds or accents
        'accent': {
          'orange': 'rgb(var(--color-accent-orange) / <alpha-value>)',
        },
        'text': {
          'primary': 'rgb(var(--color-text-primary) / <alpha-value>)', // Dark gray for main text
          'secondary': 'rgb(var(--color-text-secondary) / <alpha-value>)', // Lighter gray for less important text
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'Avenir', 'Helvetica', 'Arial', 'sans-serif'],
        fun: ['Caveat', 'cursive'],
      },
      keyframes: {
        jelly: {
          '0%, 100%': { transform: 'scale(1, 1)' },
          '25%': { transform: 'scale(0.95, 1.05) rotate(-2deg)' },
          '50%': { transform: 'scale(1.05, 0.95) rotate(2deg)' },
          '75%': { transform: 'scale(0.98, 1.02) rotate(0deg)' },
        },
        blob: {
          '0%, 100%': {
            borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%',
          },
          '50%': {
            borderRadius: '30% 60% 70% 40% / 50% 60% 30% 60%',
          },
        },
      },
      animation: {
        jelly: 'jelly 15s ease-in-out infinite',
        'jelly-slow': 'jelly 25s ease-in-out infinite',
        blob: 'blob 8s ease-in-out infinite',
        'blob-slow': 'blob 12s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}

