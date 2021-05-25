const {merge} = require('webpack-merge');
const common = require('./webpack.common.js');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  plugins: [
    new CleanWebpackPlugin(),
  ],
  devServer: {
    contentBase: './dist',
    port: 8111,
    writeToDisk: true,
    historyApiFallback: true,
  },
});