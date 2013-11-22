var path    = require("path")
  , express = require("express")
  , app     = express()

app.set('views', path.join(__dirname, "views"))
app.set('view engine', 'ejs')

app.get("/hello_world", function(req,res) {
  res.render("hello_world", {
    thisVar: "is local"
  })
})

app.listen(3000)
