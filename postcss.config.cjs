// CSS-переменные, nesting и т.п. разворачиваются в статику — WebView 37 их не знает.
module.exports = {
  plugins: {
    'postcss-preset-env': {
      browsers: ['chrome >= 37', 'android >= 5'],
      features: { 'custom-properties': { preserve: false } },
    },
  },
};
