const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: 'html-loader'
      }
    ]
  },
  plugins: [
    new UglifyJsPlugin({
      uglifyOptions: {
        compress: {
          drop_console: true
        }
      },
      sourceMap: false,
      parallel: true
    })
  ]
};
