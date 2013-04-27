// service - the service whose comments we want to normalize (e.g. "youtube")
var CommentNormalizer = function(service) {
  this.service = service
}

CommentNormalizer.prototype.normalize = function() {
  switch(this.service) {
    case "youtube":
      return "herp derp"
      break;
  }
}

exports.CanYouSeeMe = function() {
  console.log("I made it!")
}

module.exports = CommentNormalizer
