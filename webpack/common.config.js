const path = require('path');

module.exports = {
  publicPath: '/assets/',
  assetsPath: path.resolve(__dirname, '..', 'dist', 'assets'),
  commonRules: [
    {
      test: /\.js$/,
      use: 'babel-loader',
      include: path.resolve(__dirname, '..', 'app'),
      exclude: path.resolve(__dirname, '..', 'node_modules'),
    },
  ],
};
