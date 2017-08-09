const path = require('path');
const webpack = require('webpack');
const config = {
  entry: ['client.js'],
  output: {
    path: path.join(__dirname, 'built/'),
    filename: 'index.js',
    publicPath: '/built/'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
  resolve: {
    modules: [
      __dirname,
      "node_modules"
    ]
  }
};
module.exports = config;