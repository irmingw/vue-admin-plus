// Generated using webpack-cli https://github.com/webpack/webpack-cli
const common = require('./webpack.common');
const { merge } = require('webpack-merge');
const WorkboxWebpackPlugin = require('workbox-webpack-plugin');

module.exports = merge(common, {
  mode: 'production',
  plugins: [
    new WorkboxWebpackPlugin.GenerateSW()
  ]
});


