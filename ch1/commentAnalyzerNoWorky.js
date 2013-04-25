var Normalizer = require("./commentNormalizer")
  , youTubeNormalizer = new Normalizer()
  , comment = "Biebs 4evs!"
  , normalizedComment = youTubeNormalizer.normalize(comment)

// We'll never make it to here, because the above crashes at line 2
console.log(normalizedComment)

// Code that does something with the comment
