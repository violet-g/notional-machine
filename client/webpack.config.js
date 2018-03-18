var path = require('path');
var webpack = require('webpack')
var HTMLWebpackPlugin = require('html-webpack-plugin');

var HTMLWebackPluginConfig = new HTMLWebpackPlugin({
  template: __dirname + '/src/index.html',
  filename: 'index.html',
  inject: 'body'
});

let API_URL = 'http://localhost:3000'
if (process.env.NODE_ENV === 'production') {
  API_URL = 'https://notional-machine.herokuapp.com'
}

var EnvironmentPluginConfig = new webpack.EnvironmentPlugin({ API_URL });

module.exports = {
  entry: [
    'babel-polyfill',
    __dirname + '/src/index.js'
  ],
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        loader: ['style-loader', 'css-loader']
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      src: path.resolve(__dirname, './src/')
    }
  },
  output: {
    filename: 'transformed.js',
    path: __dirname + '/build'
  },
  devtool: 'source-map',
  plugins: [
    HTMLWebackPluginConfig,
    EnvironmentPluginConfig
  ]
};
