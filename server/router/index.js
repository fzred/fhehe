import express from 'express'
import { getDiarys } from '../data'
const router = express.Router()

router.get('/list', async(req, res) => {
  const list = await getDiarys()
  res.json(list)
})

export default router
