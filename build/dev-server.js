import Browsersync from 'browser-sync'
import webpack from 'webpack'
import webpackMiddleware from 'webpack-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'
import cp from 'child_process'

import webpackBroswerConfig from './webpack-dev.config'

import config from '../server/config'

const port = process.env.PORT || config.port

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
    target: `127.0.0.1:${port}`,
    middleware: [devMiddleware, hotMiddleware],
  },
})
let firstStart = 1
let server, timer
function runServer() {
  if (server) {
    server.kill('SIGTERM')
  }
  console.log('server restart')
  bs.notify('server restart')
  server = cp.exec('babel-node server/app.js')
}
bs.watch('./server/**/*.js', () => {
  if (firstStart) {
    clearTimeout(timer)
    timer = setTimeout(() => {
      firstStart = 0
      runServer()
    }, 2000)
  } else {
    runServer()
  }
})
