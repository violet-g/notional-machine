const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const restRouter = require('./router')
const { Pupil, Exercise, Solution, Step, Arrow, Variable, Expression } =
  require('./models')

// Global Body parser middleware to convert the req body to a standard JS object
app.use(bodyParser.json())

// RESTful resources
app.use('/pupil', restRouter(Pupil))
app.use('/exercise', restRouter(Exercise))
app.use('/solution', restRouter(Solution))
app.use('/step', restRouter(Step))
app.use('/arrow', restRouter(Arrow))
app.use('/variable', restRouter(Variable))
app.use('/expression', restRouter(Expression))

app.listen(3000, function() {
  console.log('Server is listening on port 3000.')
})
