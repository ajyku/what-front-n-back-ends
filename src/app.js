const express = require('express')

const app = express()
const port = 3000

app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

var db = []

app.get('/api/', (req, res) => {
  res.send(JSON.stringify(db))
})

app.post('/api/', (req, res) => {
  var data = req.body
  console.log('post data', data)
  var len = db.length
  db.push({ id: len, ...data })
  res.send(JSON.stringify(db))
})

app.put('/api/', (req, res) => {
  var data = req.body()
  console.log('put data', data)
  res.send({ data: data })
})

app.delete('/api/', (req, res) => {
  var data = req.body
  console.log("Delete data", data.id) 
  db.splice(data.id, 1)
  res.send(JSON.stringify(db))
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
