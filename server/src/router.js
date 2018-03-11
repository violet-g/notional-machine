// Customized router for the RESTful API actions

const express = require('express')
const Router = express.Router
const Sequelize = require('sequelize')

// checks if the model attribute is of type integer
function isIntegerAttribute (attribute, Model) {
  return Model.rawAttributes[attribute].type === Sequelize.INTEGER
}

// parses URL query params into the appropriate Sequelize data types
function parseQuery (query = {}, Model) {
  const newQuery = {}
  for (const param of Object.keys(query)) {
    if (query[param] === 'NULL') {
      newQuery[param] = { $eq: null }
    } else if (isIntegerAttribute(param, Model)) {
      newQuery[param] = parseInt(query[param])
    } else {
      newQuery[param] = query[param]
    }
  }
  return newQuery
}

module.exports = function(Model) {
  const router = Router()

  router.post('/', function(req, res) {
    Model.create(req.body).then(resource =>
      res.send(resource)
    )
  })

  router.put('/:id', function(req, res) {
    res.send('Updated resource ' + req.params.id + '.')
  })

  router.delete('/:id', function(req, res) {
    res.send('Deleted resource ' + req.params.id + '.')
  })

  router.get('/:id', function(req, res) {
    Model.findAll({
      where: { id: req.params.id }
    }).then(resources =>
      res.send(resources[0])
    )
  })

  router.get('/', function(req, res) {
    Model.findAll({
      where: parseQuery(req.query, Model)
    }).then(resources =>
      res.send(resources)
    )
  })

  return router
}
