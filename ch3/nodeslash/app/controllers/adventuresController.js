var Adventure = App.require("app/models/adventure")

exports.create = function(req,res) {
  res.json({success: true, payload: {adventure: Adventure()}})
}
