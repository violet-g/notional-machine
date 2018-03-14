var path = require('path');
var webpack = require('webpack')
var HTMLWebpackPlugin = require('html-webpack-plugin');

var HTMLWebackPluginConfig = new HTMLWebpackPlugin({
  template: __dirname + '/src/index.html',
  filename: 'index.html',
  inject: 'body'
});

// TODO differentiate if running npm start and npm run build
// - npm start: API_URL = http://localhost:3000
// - npm run build: API_URL = <heroku URL>

// console.log('....', process.argv)

var EnvironmentPluginConfig = new webpack.EnvironmentPlugin({
  API_URL: 'http://localhost:3000'
});

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
