const errors = require('restify-errors')
const rjwt = require('restify-jwt-community')

const config = require('../config')
const Customer = require('../models/Customer')

module.exports = (server) => {
  server.get('/customers', async (req, res, next) => {
    try {
      const customers = await Customer.find({})
      res.send(customers)
      next()
    } catch(err) {
      return next(new errors.InvalidContentError(err))
    }
  })

  server.get('/customers/:id', async (req, res, next) => {
    try {
      const customer = await Customer.findById(req.params.id)
      res.send(customer)
      next()
    } catch(err) {
      return next(new errors.ResourceNotFoundError(`There is no customer with the id of ${req.params.id}`))
    }
  })

  server.post('/customers', rjwt({ secret: config.JWT_SECRET }), async (req, res, next) => {
    // check for JSON
    if (!req.is('application/json')) {
      return next(new errors.InvalidContentError("Expects 'application/json'"))
    }
    const { name, email, balance } = req.body
    const customer = new Customer({
      name,
      email,
      balance,
    })
    try {
      const newCustomer = await customer.save()
      res.send(newCustomer)
      next()
    } catch(err) {
      return next(new errors.InternalServerError(err.message))
    }
  })

  server.put('/customers/:id', rjwt({ secret: config.JWT_SECRET }), async (req, res, next) => {
    // check for JSON
    if (!req.is('application/json')) {
      return next(new errors.InvalidContentError("Expects 'application/json'"))
    }
    try {
      await Customer.findOneAndUpdate({ _id: req.params.id }, req.body)
      res.send(200)
      next()
    } catch(err) {
      return next(new errors.ResourceNotFoundError(`There is no customer with the id of ${req.params.id}`))
    }
  })

  server.del('/customers/:id', rjwt({ secret: config.JWT_SECRET }), async (req, res, next) => {
    try {
      await Customer.findOneAndDelete({ _id: req.params.id })
      res.send(204)
      next()
    } catch (err) {
      return next(new errors.ResourceNotFoundError(`There is no customer with the id of ${req.params.id}`))
    }
  })
}