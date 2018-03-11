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

  router.post('/', async function(req, res) {
    const resource = await Model.create(req.body)
    res.send(resource)
  })

  router.put('/:id', async function(req, res) {
    const resource = await Model.findOne({ where: { id: req.params.id } })
    await resource.update(req.body)
    await resource.reload()
    res.send(resource)
  })

  router.delete('/:id', async function(req, res) {
    const resource = await Model.findOne({ where: { id: req.params.id } })
    await resource.destroy()
    res.send(resource)
  })

  router.get('/:id', async function(req, res) {
    const resource = await Model.findOne({ where: { id: req.params.id } })
    res.send(resource)
  })

  router.get('/', async function(req, res) {
    const resources = await Model.findAll({ where: parseQuery(req.query, Model) })
    res.send(resources)
  })

  return router
}
