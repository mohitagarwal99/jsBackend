require('dotenv').config()

const express = require('express')
const app = express()
const port = process.env.port

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req, res) => {
    res.send('mohit99')
})

app.get('/login', (req, res)=> {
    res.send('<h1> this is heading 1 <h1>')
})

app.get('/youtube', (req, res)=> {
    res.send('<h1> Youtube <h1>')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})