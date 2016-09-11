import express from 'express'
import { getDiarys } from '../data'
const router = express.Router()

router.get('/list', async(req, res) => {
  const list = await getDiarys()
  res.json(list)
})
router.get('/log/add', async(req, res) => {
  // console.log(req.body.content)
  res.json({ a: '21f' })
})
export default router
