const express = require('express')
const moment = require('moment');
const app = express()
const port = 3000

const currentTime = moment().format('YYYY/MM/DD HH:mm:ss')

app.use((req, res, next) => {
  const reqTime = new Date()
  const method = req.method
  const url = req.originalUrl
  
  res.on('finish', () => {
    const resTime = new Date()
    const spendTime = resTime - reqTime
    console.log(`${currentTime} | ${method} from ${url} | spend ${spendTime}ms to loading`)
  })
  next()
})

app.get('/', (req, res,) => {
  res.send('列出全部 Todo')
})

app.get('/new', (req, res) => {
  res.send('新增 Todo 頁面')
})

app.get('/:id', (req, res) => {
  res.send('顯示一筆 Todo')
})

app.post('/', (req, res) => {
  res.send('新增一筆  Todo')
})

app.listen(port, () => {
  console.log(`App running on port ${port}`)
})
