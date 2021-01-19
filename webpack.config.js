var webpack = require('webpack');
var path = require('path');

let music = {
  APP_DIR: path.resolve(__dirname, ''),
  APP_FILE: path.resolve(__dirname, '')
}

let soundboard = {
  APP_DIR: path.resolve(__dirname, ''),
  APP_FILE: path.resolve(__dirname, '')
}

var config = {
  devtool: 'source-map',
  entry: {
    '': .APP_FILE,
    '': .APP_FILE
  },
  output: {
    path: path.resolve('./'),
    filename: '[name]'
  },
  module: {
    loaders: [
      {
        test: /\.js?/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      }
    ]
  }
};

module.exports = config;