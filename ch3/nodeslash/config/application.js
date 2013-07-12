var env         = process.env.NODE_ENV || 'development'
  , packageJson = require("../package.json")
  , express     = require("express")

console.log("Loading " + packageJson.name + " in " + env + " mode.")

global.App = {
  app:     express()
, version: packageJson.version
, port:    process.env.PORT || 3000
, env:     env
, root:    process.cwd()
, require: function(path) {
    return require(this.root + "/" + path)
  }
, start: function() {
    if (!this.started) {
      this.started = true
      this.app.listen(this.port)
      console.log(
        "Running "  + packageJson.name + 
        " version " + this.version + 
        " on port " + this.port + 
        " in " + this.env + " mode"
      )
    }
  }
}

// Bootstrap teh [sic] routes
App.require("config/routes")(App.app)
