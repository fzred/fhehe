import express from 'express'
import { getDiarys, insertDiary } from '../data'
const router = express.Router()

router.get('/list', async(req, res) => {
  const list = await getDiarys()
  list.forEach(item => {
    if (item.imgs) {
      item.imgs = JSON.parse(item.imgs)
    }
  })
  res.json(list)
})

router.post('/log/add', async(req, res) => {
  console.log(req.body.imgs)
  const result = await insertDiary({
    text: req.body.text,
    createTime: Date.now(),
    imgs: JSON.stringify(req.body.imgs),
    time: req.body.time,
  })
  res.json({ id: result[0] })
})

export default router
