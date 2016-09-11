import express from 'express'
import { getDiarys } from '../data'
const router = express.Router()

router.get('/list', async(req, res) => {
  const list = await getDiarys()
  res.json(list)
})
router.all('/log/add', async(req, res) => {
  // console.log(req.body.content)
  res.json({ a: 'ff' })
})
export default router
