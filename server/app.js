import path from 'path'
import express from 'express'
import config from '../config'
import routerApi from '../server/router/api'

const app = express()
const port = process.env.PORT || config.port

app.use(express.static(path.join(__dirname, 'public')))
app.use('/api', routerApi)
app.listen(port, err => {
  if (err) {
    console.log(err)
    return
  }
  console.log(`Listening at http://localhost:${port}`)
})
