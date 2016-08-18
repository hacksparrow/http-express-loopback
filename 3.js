var express = require('express')
var app = express()

// handle GET requests to "/"
app.get('/', function (req, res, next) {
  res.send(req.method + ' HOMEPAGE')
})

// handle GET requests to "/hello"
app.get('/hello', function (req, res, next) {
  res.send(req.method + ' HELLO')
})

// handle POST requests to "/"
app.post('/', function (req, res, next) {
  res.send(req.method + ' HOMEPAGE')
})

// handle PUT requests to "/"
app.put('/', function (req, res, next) {
  res.send(req.method + ' HOMEPAGE')
})

// handle DELETE requests to "/"
app.delete('/', function (req, res, next) {
  res.send(req.method + ' HOMEPAGE')
})

app.listen(3000, function () {
  console.log('Server listening at http://localhost:3000')
})

/*

LINKS
=====

* [app.METHOD](http://expressjs.com/en/4x/api.html#app.METHOD)

*/
