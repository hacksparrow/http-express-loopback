var http = require('http')

var server = http.createServer(function(request, response) {
  // cookies come via the HTTP headers in the request object
  var cookies = parseCookies(request)
  response.setHeader('Content-Type', 'text/json; charset=utf-8')
  // we'll need to stringify `cookies`, because we cannot sent JavaScript objects
  response.write(JSON.stringify(cookies))
  response.end()
})

server.listen(3000, 'localhost', function () {
  console.log('Server listening at http://localhost:3000')
})

// we should probably use a shorter `req`, instead of `request` to refer to the request object
function parseCookies(req) {
  var cookies = {}
  // before parsing, ensure cookies were actually sent
  if ('cookie' in req.headers) {
    // the "cookie" header value looks something like 'keyA=valueA; keyB=valueB; keyC=valueC'
    var cookiesArray = req.headers.cookie.split('; ')
    cookiesArray.forEach(function (cookieString) {
      var temp = cookieString.split('=')
      if (temp.length) {
        // populate the `cookies` object
        cookies[temp[0]] = temp[1]
      }
    })
    return cookies
  } else {
    return cookies
  }
}
