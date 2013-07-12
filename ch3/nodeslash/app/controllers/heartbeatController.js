exports.index = function (req,res) {
  res.json({success: true, payload: {heartbeat: "alive", version: App.version}})
}
