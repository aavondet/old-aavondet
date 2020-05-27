var webpack = require('webpack');
var path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'src'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      { test: /\.vue$/, use: 'vue-loader' },
      { test: /\.js$/, use: 'babel-loader',},
      { test: /\.css$/, use: [ 'vue-style-loader', 'css-loader' ]},
      { test: /\.(gif|png|jpe?g|svg)$/i, use: [ 'file-loader', { loader: 'image-webpack-loader'}] }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
  ]
};
