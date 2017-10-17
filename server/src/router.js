// Customized router for the RESTful API actions

const express = require('express')
const Router = express.Router

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
    Model.findAll().then(resources =>
      res.send(resources)
    )
  })

  return router
}
