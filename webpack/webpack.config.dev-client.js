const { publicPath, assetsPath, commonRules } = require('./common.config');
const webpack = require('webpack');
const path = require('path');

var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  devtool: 'source-map',
  name: 'client',
  context: path.join(__dirname, '..', 'app'),  
  entry: './client.js',
  output: {
    path: assetsPath,
    publicPath,
    filename: 'bundle.js',
  },
  module: {
    // loaders: commonLoaders.concat([
    rules: commonRules.concat([
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader?module&localIdentName=[name]"
        })
      }
    ])
  },
  plugins: [
		new ExtractTextPlugin("styles.css")
	]
};