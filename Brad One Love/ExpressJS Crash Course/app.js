const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const expressValidator = require('express-validator')
const mongojs = require('mongojs')
const ObjectId = mongojs.ObjectId

const app = express()
const db = mongojs('customers', ['users'])

// View Engine
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

// Body parser
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

// Set static path
app.use(express.static(path.join(__dirname, 'public')))

// Global vars
app.use((req, res, next) => {
  res.locals.errors = null
  next()
})

// Validator
app.use(expressValidator())



app.get('/', (req, res) => {
  db.users.find((err, users) => {
    res.render('index', {
      title: 'Users',
      users
    })
  })
})

app.post('/', (req, res) => {

  req.checkBody('first_name', 'First Name is Required').notEmpty()
  req.checkBody('last_name', 'Last Name is Required').notEmpty()
  req.checkBody('email', 'Email is Required').notEmpty()

  const errors = req.validationErrors()
  if(errors) {
    res.render('index', {
      title: 'Users',
      errors
    })
  } else {
    const newUser = {
      firstName: req.body.first_name,
      lastName: req.body.last_name,
      email: req.body.email
    }
    db.users.insert(newUser, (err, result) => {
      if(err) {
        console.log(err)
      }
      res.redirect('/')
    })
  }
})

app.delete('/:id', (req, res) => {
    db.users.remove({_id: ObjectId(req.params.id)}, (err, result) => {
      if(err) {
        console.log(err)
      }
      console.log(result)
  })
  res.redirect('/')
})

app.listen(3001, () => console.log('Server started on port 3001'))