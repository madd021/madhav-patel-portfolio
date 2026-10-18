/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: {
          950: '#030712',
          900: '#060c1a',
          850: '#0a1224',
          800: '#0f1b33',
          700: '#17284d',
          600: '#233868',
        },
        electric: {
          blue: '#38bdf8',
          cyan: '#06b6d4',
          indigo: '#6366f1',
          violet: '#8b5cf6',
          purple: '#a855f7',
        },
        surface: {
          glass: 'rgba(10, 18, 36, 0.6)',
          border: 'rgba(56, 189, 248, 0.15)',
          'border-hover': 'rgba(56, 189, 248, 0.4)',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Space Grotesk', 'Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      boxShadow: {
        'glow-cyan': '0 0 25px -5px rgba(6, 182, 212, 0.4)',
        'glow-blue': '0 0 30px -5px rgba(56, 189, 248, 0.35)',
        'glow-violet': '0 0 25px -5px rgba(139, 92, 246, 0.3)',
        'card-subtle': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float-slow': 'float 6s ease-in-out infinite',
        'spin-slow': 'spin 12s linear infinite',
        'scanline': 'scanline 8s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        scanline: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(1000%)' },
        }
      }
    },
  },
  plugins: [],
}
