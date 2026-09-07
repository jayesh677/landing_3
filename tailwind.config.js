/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: 'var(--bg)',
        bg2: 'var(--bg2)',
        bg3: 'var(--bg3)',
        cyan: {
          DEFAULT: '#00c8ff',
          dim: '#0090bb',
          glow: 'rgba(0, 200, 255, 0.12)',
        },
        red: {
          DEFAULT: '#ff3b5c',
        },
        text: '#d8eaf8',
        muted: '#4a6580',
        border: 'var(--border)',
      },
      fontFamily: {
        display: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
        body: ['"Inter"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
