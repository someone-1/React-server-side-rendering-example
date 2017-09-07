const { publicPath, assetsPath, commonRules } = require('./common.config');
const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  devtool: 'source-map',
  name: 'SSR',
  context: path.join(__dirname, '..', 'app'),
  entry: './SSR.js',  
  output: {
    path: assetsPath,
    filename: 'SSR.js',
    libraryTarget: 'commonjs2',
    publicPath,
  },
  target: 'node',
  externals: nodeExternals(),
  module: {
    
    rules: commonRules.concat([
      {
        test: /\.css$/,
        use: [
          {
            loader:'css-loader/locals?module&localIdentName=[name]'
          },
        ]
      }
    ])
  },
};