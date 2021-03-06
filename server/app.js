import path from 'path'
import express from 'express'
import bodyParser from 'body-parser'
import config from './config'
import routerApi from './router/api'

const app = express()
const port = process.env.PORT || config.port

// parse application/json
app.use(bodyParser.json())

app.use(express.static(path.join(__dirname, '../public')))
app.use('/api', routerApi)
app.listen(port, err => {
  if (err) {
    console.log(err)
    return
  }
  console.log(`Listening at http://localhost:${port}`)
})
