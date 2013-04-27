var Normalizer = require("./commentNormalizerWithCounter")
  , youTubeNormalizer = new Normalizer("youtube")
  , facebookNormalizer = new Normalizer("facebook")
  , comment = "Biebs 4evs!"
  , youtubeNormalizedComment = youTubeNormalizer.normalize(comment)
  , facebookNormalizedComment = facebookNormalizer.normalize(comment)

console.log("YouTube: " + youtubeNormalizedComment)
console.log("Facebook: " + facebookNormalizedComment)

console.log("youTubeNormalizer:  commentsNormalizedCount (" + youTubeNormalizer.count() + "), myCount (" + youTubeNormalizer.personalCount() + ")")
console.log("facebookNormalizer: commentsNormalizedCount (" + facebookNormalizer.count() + "), myCount (" + facebookNormalizer.personalCount() + ")")

// Code that does something with the comment
