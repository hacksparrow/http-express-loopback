var http = require('http')

var server = http.createServer(function(request, response) {
  console.log('Request method:', request.method)
  response.write(request.method)
  response.end()
})

server.listen(3000, 'localhost', function () {
  console.log('Server listening at http://localhost:3000')
})
