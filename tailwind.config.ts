// Simplified tailwind.config.ts with sage green colors
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  safelist: [
    'ring-abby-500/30',
    'text-abby-primary',
    'text-abby-secondary',
    'text-abby-muted'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
        display: ['Playfair Display', 'serif'],
      },
      colors: {
        abby: {
          50: '#F0F2EC',
          100: '#E1E5DA',
          200: '#D1D9CE',
          300: '#B6C2AF',
          400: '#9CAF88',
          500: '#87A078',
          600: '#768C61',
          700: '#5B6E4B',
          800: '#4A593D',
          900: '#2D3524',
          950: '#222918',
          primary: '#4A593D',
          secondary: '#5B6E4B',
          muted: '#87A078'
        },
        background: '#F0F2EC',
        foreground: '#2D3524',
      },
      boxShadow: {
        'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
        'soft-light': '0 2px 10px rgba(156, 175, 136, 0.1)',
        'soft-medium': '0 4px 15px rgba(156, 175, 136, 0.15)',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
