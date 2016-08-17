var http = require('http')
var fs = require('fs')

var server = http.createServer(function(request, response) {

  var filePath
  var fileStream

  if (request.url === '/') filePath = __dirname + '/files/index.html'
  else if (request.url === '/files/style.css') filePath = __dirname + '/files/style.css'
  else if (request.url === '/files/cat.jpg') filePath = __dirname + '/files/cat.jpg'
  else {
    // set the HTTP response status code
    response.statusCode = 404
    response.statusMessage = 'Not Found'
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

[response.statusCode](https://nodejs.org/api/http.html#http_response_statuscode)
[response.statusMessage](https://nodejs.org/api/http.html#http_response_statusmessage)

*/
