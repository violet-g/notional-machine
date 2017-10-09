var HTMLWebpackPlugin = require('html-webpack-plugin');
var HTMLWebackPluginConfig = new HTMLWebpackPlugin({
  template: __dirname + 'build/index.html'
  filename: 'index.html'
  injext: 'body'
});

module.exports = {
  entry: __dirname + 'src/index.js',
  module: {
    loaders: [
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel_loader'
    ]
  },
  output: {
    filename: 'transformed.js',
    path: __dirname + '/build'
  },
  plugins: [HTMLWebackPluginConfig]
};
