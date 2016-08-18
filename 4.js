var express = require('express')
var app = express()

// server file using the static middleware
app.use(express.static(__dirname + '/public'))
// programatically send a file
app.get('/license', function (req, res) {
  res.sendFile(__dirname + '/LICENSE')
})

app.listen(3000, function () {
  console.log('Server listening at http://localhost:3000')
})

/*

LINKS
=====

* [express.static](http://expressjs.com/en/4x/api.html#express.static)
* [res.sendFile](http://expressjs.com/en/4x/api.html#res.sendFile)

*/
