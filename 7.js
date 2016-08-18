var express = require('express')
var app = express()

app.get('/', function (req, res) {
  res.set('X-TIME', Date.now()).send('You know the time')
})

app.listen(3000, function () {
  console.log('Server listening at http://localhost:3000')
})

/*

LINKS
=====

* [res.set](http://expressjs.com/en/4x/api.html#res.status)

*/
