// WE HAVE TO: let webpack where the entry point is, where does the application kick off
// WE HAVE TO: where do we put our output file will be? the final bundle file, where do we put that?

// A LOADER: lets you to customize the behavior of webpack, anytime webpack sees a particular file
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = (env) => {
  const isProduction = env === 'production';
  const CSSExtract = new ExtractTextPlugin('styles.css');

  return {
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
        use: CSSExtract.extract({
          use: [
            {
              loader: 'css-loader',
              options: { sourceMap: true }
            }, {
              loader: 'sass-loader',
              options: { sourceMap: true }
            }]
        })
      }]
    },
    plugins: [ CSSExtract ],
    devtool: isProduction ? 'source-map' : 'inline-source-map',
    devServer: {
      contentBase: path.join(__dirname, 'public'),
      historyApiFallback: true
    }
  }
};