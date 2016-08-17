var http = require('http')
var fs = require('fs')

var server = http.createServer(function(request, response) {

  var filePath
  var fileStream

  // detect the requested path ...
  if (request.url === '/') filePath = __dirname + '/files/index.html'
  else if (request.url === '/files/style.css') filePath = __dirname + '/files/style.css'
  else if (request.url === '/files/cat.jpg') filePath = __dirname + '/files/cat.jpg'
  else return response.end('File not found')

  // ... and stream the corresponding file
  fileStream = fs.createReadStream(filePath)
  fileStream.pipe(response)

})

server.listen(3000, 'localhost', function () {
  console.log('Server listening at http://localhost:3000')
})

/*

This request handler will accept request only to:

http://localhost:3000
http://localhost:3000/files/style.css
http://localhost:3000/files/cat.jpg

*/
