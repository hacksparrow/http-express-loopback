var express = require('express')
var app = express()

app.get('/animals', function (req, res) {

  // req.path contains the request path
  console.log('Path:', req.path)
  // we have access to the query parameters as well
  console.log('Query parameters:', req.query)
  // req.url is inherited from the underlying `http` module
  console.log('URL:', req.url)

  res.send('Look at the console!')
})

app.listen(3000, function () {
  console.log('Server listening at http://localhost:3000')
})

/*

LINKS
=====

* [Express request object](http://expressjs.com/en/4x/api.html#req)
* [Express response object](http://expressjs.com/en/4x/api.html#res)

*/
