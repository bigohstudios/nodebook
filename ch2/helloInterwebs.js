var http   = require("http")
    server = http.createServer(
      function(request,response) {
        response.statusCode = 200
        response.write("Hello, interwebs!")
        response.end()
      }
    )

server.listen(5000)
