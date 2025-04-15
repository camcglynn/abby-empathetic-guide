// Modified tailwind.config.ts with sage green colors
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px'
      }
    },
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
        display: ['Playfair Display', 'serif'],
      },
      colors: {
        abby: {
          50: '#F0F2EC',  // Lightest sage
          100: '#E1E5DA', // Very light sage
          200: '#D1D9CE', // Light sage
          300: '#B6C2AF', // Medium-light sage
          400: '#9CAF88', // Sage green
          500: '#87A078', // Medium sage
          600: '#768C61', // Medium-deep sage
          700: '#5B6E4B', // Deep sage
          800: '#4A593D', // Deeper sage
          900: '#2D3524', // Darkest sage
          950: '#222918', // Almost black sage
          
          // Add these direct references to make text-abby-primary work
          primary: '#4A593D',    // Deeper sage for primary text
          secondary: '#5B6E4B',  // Deep sage for secondary text
          muted: '#87A078'       // Medium sage for muted text
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: {
          DEFAULT: '#F0F2EC', // Lighter sage background
          foreground: '#2D3524' // Darker sage for text on background
        },
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))'
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))'
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))'
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))'
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))'
        },
        abby: {
          50: '#F0F2EC',  // Lightest sage
          100: '#E1E5DA', // Very light sage
          200: '#D1D9CE', // Light sage
          300: '#B6C2AF', // Medium-light sage
          400: '#9CAF88', // Sage green
          500: '#87A078', // Medium sage
          600: '#768C61', // Medium-deep sage
          700: '#5B6E4B', // Deep sage
          800: '#4A593D', // Deeper sage
          900: '#2D3524', // Darkest sage
          950: '#222918'  // Almost black sage
        },
        slate: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
          950: '#020617',
        },
        sidebar: {
          DEFAULT: 'hsl(var(--sidebar-background))',
          foreground: 'hsl(var(--sidebar-foreground))',
          primary: 'hsl(var(--sidebar-primary))',
          'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
          accent: 'hsl(var(--sidebar-accent))',
          'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
          border: 'hsl(var(--sidebar-border))',
          ring: 'hsl(var(--sidebar-ring))'
        },
        textColor: {
          'abby': {
            'primary': '#4A593D',    // Deeper sage for primary text
            'secondary': '#5B6E4B',  // Deep sage for secondary text
            'muted': '#87A078'       // Medium sage for muted text
          }
        }
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' }
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' }
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        'fade-down': {
          '0%': { opacity: '0', transform: 'translateY(-10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        'pulse-subtle': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.8' }
        }
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'fade-in': 'fade-in 0.6s ease-out',
        'fade-up': 'fade-up 0.5s ease-out',
        'fade-down': 'fade-down 0.5s ease-out',
        'pulse-subtle': 'pulse-subtle 3s ease-in-out infinite'
      },
      boxShadow: {
        'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
        'glow': '0 0 20px rgba(135, 160, 120, 0.15)', // Changed to sage glow
        'soft-light': '0 2px 10px rgba(156, 175, 136, 0.1)', // Changed to sage
        'soft-medium': '0 4px 15px rgba(156, 175, 136, 0.15)', // Changed to sage
      },
      backdropBlur: {
        xs: '2px',
      },
      transitionProperty: {
        'soft-all': 'all 300ms ease-in-out'
      },
      ringColor: {
        'abby': '#87A078' // Changed to medium sage
      }
    }
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
