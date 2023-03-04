const express = require('express')
const connectToMongo = require('./db')
const mongoose = require('mongoose')
var cors = require('cors');



const app = express()
const port = 5000

connectToMongo()

app.use(express.json())
app.use(cors())

app.use('/api/v1/auth', require('./routes/auth'))
app.use('/api/v1/notes', require('./routes/notes'))



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
