import path from 'path'
import express from 'express'
// import webpack from 'webpack'
// import webpackDevMiddleware from 'webpack-dev-middleware'
// import webpackHotMiddleware from 'webpack-hot-middleware'
import config from '../config'
// import webpackConfig from './webpack-dev.config'
import routerApi from '../server/router/api'

const app = express()
const port = process.env.PORT || config.port
// const compiler = webpack(webpackConfig)
//
// const devMiddleware = webpackDevMiddleware(compiler, {
//   publicPath: webpackConfig.output.publicPath,
//   stats: {
//     colors: true,
//     chunks: false,
//   },
// })
// const hotMiddleware = webpackHotMiddleware(compiler)
// // force page reload when html-webpack-plugin template changes
// compiler.plugin('compilation', compilation => {
//   compilation.plugin('html-webpack-plugin-after-emit', (data, cb) => {
//     hotMiddleware.publish({ action: 'reload' })
//     cb()
//   })
// })
//
// // serve webpack bundle output
// app.use(devMiddleware)
//
// // enable hot-reload and state-preserving
// // compilation error display
// app.use(hotMiddleware)

app.use(express.static(path.join(__dirname, 'public')))
app.use('/api', routerApi)

app.listen(port, err => {
  if (err) {
    console.log(err)
    return
  }
  console.log(`Listening at http://localhost:${port}`)
})
