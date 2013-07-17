module.exports = function(app) {
  
  var HeartbeatController = App.require("app/controllers/heartbeatController")
  app.get("/heartbeat", HeartbeatController.index) 

  var AdventuresController = App.require("app/controllers/adventuresController")
  app.get("/adventures", AdventuresController.create)
}
