var http = require('http')
var fs = require('fs')

var server = http.createServer(function(request, response) {

  var filePath
  var fileStream

  if (request.url === '/') filePath = __dirname + '/files/index.html'
  else if (request.url === '/files/style.css') filePath = __dirname + '/files/style.css'
  else if (request.url === '/files/cat.jpg') filePath = __dirname + '/files/cat.jpg'
  else {
    response.statusCode = 404
    response.statusMessage = 'Not Found'
    // set a response header
    response.setHeader('Content-Type', 'text/html; charset=utf-8')
    // another header
    response.setHeader('X-Powered-By', 'NodeHTTP')
    return response.end('👻 File not found!')
  }

  fileStream = fs.createReadStream(filePath)
  fileStream.pipe(response)

})

server.listen(3000, 'localhost', function () {
  console.log('Server listening at http://localhost:3000')
})

/*

LINKS
=====

[response.setHeader](https://nodejs.org/api/http.html#http_response_setheader_name_value)

*/
