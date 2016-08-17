var http = require('http')
// we need the `fs` module to be able to read files from the system
var fs = require('fs')

var server = http.createServer(function(request, response) {

  var filePath = __dirname + '/files/index.html'

  // One way of doing: using buffer
  var htmlContent = fs.readFileSync(filePath)
  response.write(htmlContent)
  response.end()

  // Better way to do it: use async method
  // var htmlContent = fs.readFile(filePath, function (error, htmlContent) {
  //   response.write(htmlContent)
  //   response.end()
  // })

  // Best way to do it: use Node.js stream
  // var fileStream = fs.createReadStream(filePath)
  // fileStream.pipe(response)

})

server.listen(3000, 'localhost', function () {
  console.log('Server listening at http://localhost:3000')
})

/*

LINKS
=====

[fs.createReadStream](https://nodejs.org/api/fs.html#fs_fs_createreadstream_path_options)
[Node.js stream module](https://nodejs.org/api/stream.html)

*/
