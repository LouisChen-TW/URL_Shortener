// 引用 Express 與 Express 路由器
const express = require('express')
const router = express.Router()
const Url = require('../../models/url_shorter')
const generateRandom = require('../../generateRandom')

router.get('/', (req, res) => {
  res.render('index')
})

router.post('/', (req, res) => {
  const originUrl = req.body.url
  Url.findOne({ originUrl })
    .lean()
    .then((data) => {
      if (!data) {
        const newData = generateRandom()
        Url.create({
          originUrl: originUrl,
          randomIndex: newData.randomIndex,
          shortenUrl: newData.shortenUrl,
        })
        res.render('result', { url: newData.shortenUrl })
      } else {
        res.render('result', { url: data.shortenUrl })
      }
    })
})

module.exports = router
