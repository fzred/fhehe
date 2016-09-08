import webpack from 'webpack'
import webpackConfig from './webpack-prod-config'

webpack(webpackConfig, (err, stats) => {
  if (err) throw err
  console.log(stats.toString({
    colors: true,
    modules: false,
    children: false,
    chunks: false,
    chunkModules: false
  }))
})
