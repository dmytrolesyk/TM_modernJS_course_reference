const express = require('express')
const jwt = require('jsonwebtoken')

const app = express()

// format of token
//Authorization: Bearer <access_token>

const verifyToken = (req, res, next) => {
  // get auth header value
  const bearerHeader = req.headers['authorization']
  // check if bearer is undefined
  if (typeof bearerHeader !== 'undefined') {
    // Split at the space
    const bearerToken = bearerHeader.split(' ')[1]
    req.token = bearerToken
    next()
  } else {
    // Forbidden
    res.sendStatus(403)
  }
}

app.get('/api', (req, res) => {
  res.json({
    message: 'Welcome to the API'
  })
})

app.post('/api/login', (req, res) => {
  // Mock user
  const user = {
    id: 1,
    username: 'brad',
    email: 'brad@gmail'
  }

  jwt.sign({ user }, 'secretkey', { expiresIn: '30s' }, (err, token) => {
    res.json({
      token
    })
  })
})

app.post('/api/posts', verifyToken, (req, res) => {
  jwt.verify(req.token, 'secretkey', (err, authData) => {
    if (err) {
      res.sendStatus(403)
    } else {
      res.json({
        message: 'Post created...',
        authData
      })
    }
  })
})

app.listen(3002, () => console.log('Server started on port 3002'))