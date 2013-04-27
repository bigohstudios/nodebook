var Normalizer = require("./commentNormalizerWillItExport")
  , youTubeNormalizer = new Normalizer("youtube")
  , comment = "Biebs 4evs!"
  , normalizedComment = youTubeNormalizer.normalize(comment)

console.log(normalizedComment)

// This call will bomb, because the function is added to exports and not module.exports in the Normalizer
Normalizer.CanYouSeeMe()

// Code that does something with the comment
