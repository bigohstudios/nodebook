var url         = require("url") 
  , http        = require("http")
  , lousyRouter = function(request,response,body) {
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
      case "/form":
        response.statusCode = 200
        response.write('<html><head></head><body><form action="/post" method="post" enctype="multipart/form-data">File:<input type="file" name="file" id="file"><input type="submit" value="Upload!">')
        break;
      case "/post":
        response.statusCode = 200
        response.write("I received a body of length: " + body.length)
        break;
      default:
        response.statusCode = 404
        response.write("This isn't the web page you're looking for.")
        break;
      }

      response.end()
    }
  , server = http.createServer(
      function(request,response) {
        var body = ""
              
        if ("POST" === request.method) {
          request.on("data", function(bodyChunk) {
            body += bodyChunk
            console.log(bodyChunk.toString())
          })
            
          request.on("end", function() {
            lousyRouter(request, response, body)
          })
        } else {
          lousyRouter(request, response)
        }
      }
    )

server.listen(5000)
