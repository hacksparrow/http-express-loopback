var express = require('express')
var app = express()

app.get('/', function (req, res) {
  res.status(500)
  res.send('Server error')

  // or chain them
  // res.status(500).send('Server error')
})

app.listen(3000, function () {
  console.log('Server listening at http://localhost:3000')
})

/*

LINKS
=====

* [res.status](http://expressjs.com/en/4x/api.html#res.status)

*/
