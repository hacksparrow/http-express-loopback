var http = require('http')

var server = http.createServer(function(request, response) {
  // cookies are set via HTTP headers
  response.setHeader('Set-Cookie', ['type=cat', 'name=Neo']);
  response.write('COOKIES SET!')
  response.end()
})

server.listen(3000, 'localhost', function () {
  console.log('Server listening at http://localhost:3000')
})
