var StaticRenderPlugin = require('static-render-webpack-plugin');
var path = require('path');

module.exports = {
  entry: [
    // 'webpack-dev-server/client?http:///localhost:3000',
    // 'webpack/hot/only-dev-server',
    './src/index.js'
  ],
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js',
    libraryTarget: 'umd'
  },
  plugins: [
    new StaticRenderPlugin('bundle.js', ['/help']),
    // new webpack.HotModuleReplacementPlugin(),
    // new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [
      {test: /\.js$/, exclude: /node_modules/, loaders: ['babel']},
      {test: /\.jsx$/, exclude: /node_modules/, loaders: ['babel']}
    ]
  }
};
