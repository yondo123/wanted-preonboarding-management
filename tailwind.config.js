module.exports = {
  content: ['./src/pages/**/*.{js,jsx,ts,tsx}', './src/components/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#192a56',
        secondary: '#f5f6fa',
        tertiary: '#f5f6fa',
        font: '#2f3640',
        fontSub: '#dfe4ea',
        hover: '#64748b',
      },
      spacing: {
        128: '32rem',
        256: '64rem',
      },
    },
  },
  plugins: [],
};
