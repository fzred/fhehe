import express from 'express'

const router = express.Router()

router.get('/list', async(req, res) => {
  res.send('11')
})

export default router
