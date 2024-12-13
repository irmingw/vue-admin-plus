// Generated using webpack-cli https://github.com/webpack/webpack-cli
const common = require('./webpack.common');
const { merge } = require('webpack-merge');
const WorkboxWebpackPlugin = require('workbox-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = merge(common, {
  mode: 'production',
  plugins: [
    new WorkboxWebpackPlugin.GenerateSW(),
    // new BundleAnalyzerPlugin()
  ]
});


