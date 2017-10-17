const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const restRouter = require('./router')
const { Pupil, Exercise } = require('./models')

app.use(bodyParser.json())
app.use('/pupil', restRouter(Pupil))
app.use('/exercise', restRouter(Exercise))

app.listen(3000, function() {
  console.log('Server is listening on port 3000.')
})
