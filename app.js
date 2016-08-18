import 'babel-polyfill'
import express from 'express'
import path from 'path'
import router from './server/router'

const app = express()

app.use(express.static(path.join(__dirname, 'public')))
app.use('/api', router)

const server = app.listen(4011, () => {
  console.log('Example app listening at http://%s:%s',
    server.address().address,
    server.address().port)
})
