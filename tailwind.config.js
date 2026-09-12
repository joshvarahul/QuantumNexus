/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          950: '#030712', // Deepest background midnight black
          900: '#070b19', // Card background / section bg
          850: '#0d1326', // Floating card surface
          800: '#141c33', // Border / subtle highlight
        },
        quantum: {
          purple: '#a855f7',
          'purple-light': '#d8b4fe',
          'purple-glow': '#8b5cf6',
          blue: '#3b82f6',
          cyan: '#06b6d4',
          'cyan-light': '#67e8f9',
          magenta: '#ec4899',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Space Grotesk', 'Inter', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out 3s infinite',
        'glow-pulse': 'glowPulse 3s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        glowPulse: {
          '0%, 100%': { opacity: 0.4, filter: 'blur(20px)' },
          '50%': { opacity: 0.8, filter: 'blur(30px)' },
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'cyber-grid': 'radial-gradient(circle at 50% 50%, rgba(168, 85, 247, 0.08) 0%, transparent 60%)',
      }
    },
  },
  plugins: [],
}
