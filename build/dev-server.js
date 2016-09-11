import Browsersync from 'browser-sync'
import webpack from 'webpack'
import webpackMiddleware from 'webpack-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'

import webpackBroswerConfig from './webpack-dev.config'
import webpackServerConfig from './webpack-server.config'

import config from '../config'

const port = process.env.PORT || config.port

webpack(webpackServerConfig).watch({
  aggregateTimeout: 300,
}, (err, stats) => {
  if (err) {
    console.log(err)
    return
  }
  console.log('server 编译完成')
})

const compiler = webpack(webpackBroswerConfig)
const devMiddleware = webpackMiddleware(compiler, {
  publicPath: webpackBroswerConfig.output.publicPath,
  stats: {
    colors: true,
    chunks: false,
  },
})
const hotMiddleware = webpackHotMiddleware(compiler)
// force page reload when html-webpack-plugin template changes
compiler.plugin('compilation', compilation => {
  compilation.plugin('html-webpack-plugin-after-emit', (data, cb) => {
    hotMiddleware.publish({ action: 'reload' })
    cb()
  })
})

const bs = Browsersync.create()
bs.init({
  proxy: {
    target: `27.0.0.1:${port}`,
    middleware: [devMiddleware, hotMiddleware],
  },
})


