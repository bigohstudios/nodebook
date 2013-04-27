// service - the service whose comments we want to normalize (e.g. "youtube")
var CommentNormalizer = function(service) {
  this.service = service
  this.myCount = 0
}

var commentsNormalizedCount = 0

CommentNormalizer.prototype.normalize = function() {
  var retval;

  switch(this.service) {
    case "youtube":
      retval = "herp derp"
      break
    case "facebook":
      retval = "hostile herp derp"
      break
  }

  ++commentsNormalizedCount
  ++this.myCount
  return retval
}

CommentNormalizer.prototype.count = function () {
  return commentsNormalizedCount
}

CommentNormalizer.prototype.personalCount = function () {
  return this.myCount 
}

module.exports = CommentNormalizer
