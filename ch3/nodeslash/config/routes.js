module.exports = function(app) {
  
  app.get("/heartbeat", function(req,res) {
    res.json({success: true, payload: {heartbeat: "alive", version: App.version}}) 
  })

}
