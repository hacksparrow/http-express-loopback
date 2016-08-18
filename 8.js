var express = require('express')
// we have to install and use the `cookie-parser` module
var cookieParser = require('cookie-parser')

var app = express()
// use the `cookie-parser` middleware in the app
app.use(cookieParser())

app.get('/', function (req, res) {

  // `req.cookies` object is populated === client sent cookies
  if (Object.keys(req.cookies).length) {
    res.send(req.cookies)
  // client visiting for the first time, set cookies
  } else {
    res.cookie('type', 'cat')
    res.cookie('name', 'Neo')
    res.send('Loading for the first time, setting cookies.')
  }

})

app.listen(3000, function () {
  console.log('Server listening at http://localhost:3000')
})

/*

* [cookie-parser](https://www.npmjs.com/package/cookie-parser)
* [req.cookies](http://expressjs.com/en/4x/api.html#req.cookies)
* [res.cookie](http://expressjs.com/en/4x/api.html#res.cookie)

*/
