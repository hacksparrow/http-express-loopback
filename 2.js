var express = require('express')
var app = express()

// this middleware is mounted at the path "/secret"
app.use('/secret', function (req, res, next) {
  console.log('SECRET IP:', req.ip)
  next()
})

// when the mount path is not specified, it defaults to "/"
app.use(function (req, res, next) {
  console.log('Sending response')
  res.send('HELLO!')
})

app.listen(3000, function () {
  console.log('Server listening at http://localhost:3000')
})
