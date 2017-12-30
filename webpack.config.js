// WE HAVE TO: let webpack where the entry point is, where does the application kick off
// WE HAVE TO: where do we put our output file will be? the final bundle file, where do we put that?

// A LOADER: lets you to customize the behavior of webpack, anytime webpack sees a particular file
const path = require('path');

module.exports = {
  entry: './src/app.js',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      loader: 'babel-loader',
      test: /\.js$/,
      exclude: /node_modules/
    }, {
      test: /\.s?css$/,
      use: ['style-loader', 'css-loader', 'sass-loader']
    }]
  },
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'public')
  }
}