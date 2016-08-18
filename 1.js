var express = require('express')
var app = express()

// first middleware
app.use(function (req, res, next) {
  console.log('IP:', req.ip)
  next()
})

// second middleware
app.use(function (req, res, next) {
  res.send('HELLO!')
})

app.listen(3000, function () {
  console.log('Server listening at http://localhost:3000')
})

/*

LINKS
=====

* [Writing middleware for use in Express apps](http://expressjs.com/en/guide/writing-middleware.html)
* [Using middleware](http://expressjs.com/en/guide/using-middleware.html)

*/
