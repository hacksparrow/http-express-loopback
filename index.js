var express = require('express')
var app = express()

app.use(function (req, res) {
  res.send('HELLO!')
})

app.listen(3000, function () {
  console.log('Server listening at http://localhost:3000')
})
