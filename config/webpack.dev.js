// Generated using webpack-cli https://github.com/webpack/webpack-cli
const common = require('./webpack.common');
const { merge } = require('webpack-merge');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    open: false,
    host: '0.0.0.0',
    port: 9000,
    hot: true,
    static: './dist',
  },
});


