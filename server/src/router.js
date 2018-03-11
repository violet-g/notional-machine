// Customized router for the RESTful API actions

const express = require('express')
const Router = express.Router
const Sequelize = require('sequelize')

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
    const resources = await Model.findAll({ where: req.query })
    res.send(resources)
  })

  return router
}
