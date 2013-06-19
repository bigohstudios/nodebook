var url    = require("url") 
  , http   = require("http")
  , server = http.createServer(
      function(request,response) {
        var path = url.parse(request.url).pathname

        switch (path) {
        case "/hello":
          response.statusCode = 200
          response.write("Hello, interwebs!")
          break;
        case "/goodbye":
          response.statusCode = 200
          response.write("Goodbye, interwebs!")
          break;
        default:
          response.statusCode = 404
          response.write("This isn't the web page you're looking for.")
          break;
        }

        response.end()
      }
    )

server.listen(5000)
