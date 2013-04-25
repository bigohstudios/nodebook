var Normalizer = require("./commentNormalizerDefinition")
  , youTubeNormalizer = new Normalizer("youtube")
  , comment = "Biebs 4evs!"
  , normalizedComment = youTubeNormalizer.normalize(comment)

console.log(normalizedComment)

// Code that does something with the comment
