import type { Config } from 'tailwindcss'
// eslint-disable-next-line @typescript-eslint/no-require-imports
const flattenColorPalette = require('tailwindcss/lib/util/flattenColorPalette').default

function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );
  addBase({
    ":root": newVars,
  });
}

const config: Config = {
  darkMode: "class",
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      animation: {
        spotlight: "spotlight 2s ease .75s 1 forwards",
        aurora: "aurora 60s linear infinite",
        'laser-scan': 'laserScan 4s ease-in-out infinite',
        'laser-pulse': 'laserPulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spark-float': 'sparkFloat 3s ease-in-out infinite',
      },
      keyframes: {
        spotlight: {
          "0%": {
            opacity: "0",
            transform: "translate(-72%, -62%) scale(0.5)",
          },
          "100%": {
            opacity: "1",
            transform: "translate(-50%,-40%) scale(1)",
          },
        },
        aurora: {
          from: { backgroundPosition: "50% 50%, 50% 50%" },
          to: { backgroundPosition: "350% 50%, 350% 50%" },
        },
        laserScan: {
          '0%, 100%': { transform: 'translateY(-100%)', opacity: '0.1' },
          '50%': { transform: 'translateY(100%)', opacity: '0.8' },
        },
        laserPulse: {
          '0%, 100%': { opacity: '1', filter: 'drop-shadow(0 0 12px rgba(0,240,255,0.8))' },
          '50%': { opacity: '0.6', filter: 'drop-shadow(0 0 4px rgba(0,240,255,0.4))' },
        },
        sparkFloat: {
          '0%, 100%': { transform: 'translateY(0) scale(1)', opacity: '0.8' },
          '50%': { transform: 'translateY(-10px) scale(1.2)', opacity: '1' },
        },
      },
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        laser: {
          cyan: '#00f0ff',
          blue: '#0ea5e9',
          deep: '#0369a1',
          spark: '#f59e0b',
          amber: '#ff5500',
          dark: '#030712',
          card: '#080d1a',
          border: 'rgba(0, 240, 255, 0.15)',
        },
      },
      backgroundImage: {
        'metal-gradient': 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.01) 100%)',
        'laser-gradient': 'linear-gradient(90deg, #00f0ff 0%, #3b82f6 50%, #00f0ff 100%)',
      },
    },
  },
  plugins: [addVariablesForColors],
}
export default config
