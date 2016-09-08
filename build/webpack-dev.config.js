import merge from 'webpack-merge'
import path from 'path'
import webpack from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import baseConfig from './webpack-base.config'

const hotMiddlewareScript = 'webpack-hot-middleware/client?noInfo=true&reload=true'

Object.keys(baseConfig.entry).forEach(name => {
  baseConfig.entry[name] = [hotMiddlewareScript].concat(baseConfig.entry[name])
})

export default merge(baseConfig, {
  devtool: '#eval-source-map',
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve(__dirname, '../src/index.html'),
      inject: true,
    })
  ]
})
