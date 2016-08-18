require('babel-polyfill')
import express from 'express'
import path from 'path'

const app = express()

app.use(express.static(path.join(__dirname, 'public')))

const server = app.listen(4011, () => {
  console.log('Example app listening at http://%s:%s',
    server.address().address,
    server.address().port)
})
