module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'spin-vslow': 'spin 25s linear infinite',
        'spin-slow': 'spin 15s linear infinite'
      },
      colors: {
        'theme-dark-pink': '#800f49',
        'theme-medium-pink': '#d52158',
        'theme-bright-pink': '#ed016a',
        'theme-cyan': '#05d5ba',
        'theme-orange': '#e6873f',
        'theme-dark-orange-yellow': '#f8c467',
        'theme-light-orange-yellow': '#ffd68e',
        'theme-bg-color': '#121212',
        'theme-black': '#000000',
        'theme-primary-font-color': '#DDDDDD',
      }
    },

  },
  plugins: [],
}
