module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      opacity: {
        15: '0.15',
      },
      fontFamily: {
        display: ['"Newsreader"', 'Georgia', 'serif'],
        body: ['"IBM Plex Sans"', 'system-ui', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'monospace'],
      },
      colors: {
        surface: {
          DEFAULT: '#0b0f10',
          raised: '#111513',
          subtle: '#161a1b',
        },
        accent: {
          DEFAULT: '#4ade80',
          hover: '#22c55e',
        },
      },
    },
  },
  plugins: [],
};
