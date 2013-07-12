module.exports = function(app) {
  
  var HeartbeatController = App.require("app/controllers/heartbeatController")
  app.get("/heartbeat", HeartbeatController.index) 

}
