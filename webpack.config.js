const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const precss = require('precss')
const autoprefixer = require('autoprefixer')

// noinspection JSUnusedGlobalSymbols
module.exports = {
  entry: path.resolve(__dirname, './src/main.js'),
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'main.js?[hash:8]',
    publicPath: 'http://127.0.0.1:4010/',
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        test: /\.js|jsx$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
      },
      { test: /\.css$/, loader: 'style!css!postcss' },
      { test: /\.(png|jpg)$/, loader: 'url?limit=25000' }
    ]
  },
  babel: {
    presets: ['es2015', 'react', 'react-hmre'],
    plugins: ['transform-runtime']
  },
  postcss: function () {
    return [precss, autoprefixer]
  },
  plugins: [new HtmlWebpackPlugin({
    filename: 'index.html',
    template: 'src/index.html'
  })]
}
if (process.env.NODE_ENV === 'production') {
  // noinspection JSUnresolvedFunction
  module.exports.plugins = [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new webpack.optimize.OccurenceOrderPlugin()
  ]
} else {
  module.exports.devtool = '#source-map'
}
