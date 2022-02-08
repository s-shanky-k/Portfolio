module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'spin-vslow': 'spin 25s linear infinite',
        'spin-slow': 'spin 15s linear infinite'
      }
    },
  },
  plugins: [],
}
