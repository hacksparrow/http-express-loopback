// we need the `http` module to create an HTTP server
var http = require('http')

// the http module has a method named "createServer" using which
// we can create HTTP servers
var server = http.createServer(function(request, response) {
  response.write('HELLO!')
  response.end()
})

server.listen(3000, 'localhost', function () {
  console.log('Server listening at http://localhost:3000')
})

/*

LINKS
=====

[Anatomy of an HTTP Transaction](https://nodejs.org/en/docs/guides/anatomy-of-an-http-transaction/)
[http.IncomingMessage](https://nodejs.org/api/http.html#http_class_http_incomingmessage)
[http.ServerResponse](https://nodejs.org/api/http.html#http_class_http_serverresponse)
[Node.js http module](https://nodejs.org/api/http.html)

*/
