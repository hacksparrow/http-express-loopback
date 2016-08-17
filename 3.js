var http = require('http')

var server = http.createServer(function(request, response) {
  response.write('<h1>HELLO!</h1><marquee>YOLO SWAG</marquee>')
  response.end()
})

server.listen(3000, 'localhost', function () {
  console.log('Server listening at http://localhost:3000')
})
