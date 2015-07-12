var StaticRenderPlugin = require('static-render-webpack-plugin');
var path = require('path');
var webpack = require('webpack');

var routes = [
  '/',
  '/test'
];

module.exports = {
  entry: {
    'bundle': ['./src/index.js'],
    'hot': [
      'webpack-dev-server/client?http://localhost:4000',
      'webpack/hot/only-dev-server',
      './src/index.js',
    ]
  },
  output: {
    path: path.join(__dirname, 'build'),
    filename: '[name].js',
    libraryTarget: 'umd'
  },
  devServer: {
    contentBase: path.join(__dirname, 'build'),
    historyApiFallback: true,
    port: 4000,
    hot: true
  },
  plugins: [
    new StaticRenderPlugin('bundle.js', routes),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [
      {test: /\.js$/, exclude: /node_modules/, loaders: ['babel']},
      {test: /\.jsx$/, exclude: /node_modules/, loader: 'react-hot!babel'}
    ]
  }
};
