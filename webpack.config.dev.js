var path = require('path');
var webpack = require('webpack');

module.exports = {
  // or devtool: 'eval' to debug issues with compiled output:
  // devtool: 'cheap-module-eval-source-map',
  devtool: 'eval',
  // Entry, tells Webpack where to start building project's dependency tree.
  entry: [
    // necessary for hot reloading with IE:
    'eventsource-polyfill',
    // listen to code updates emitted by hot middleware:
    'webpack-hot-middleware/client',
    // your code:
    './src/index'
  ],
  // Output, tells Webpack where to put the result. This is what the index.html file loads.
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  // Plugins, tells Webpack which plugins to use when building the code.
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  resolve: {
    extensions: ['', '.js', 'jsx']
  },
  module: {
    // Loaders, tells Webpack about the different file loaders we'd like to use.
    loaders: [{
      test: /\.js|\.jsx$/,
      loaders: ['babel'],
      include: path.join(__dirname, 'src')
    },
    {
      test:/\.less$/,
      loader: 'style!css!less'
    }]
  }
};
