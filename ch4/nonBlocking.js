var fs = require("fs")

fs.readFile("oil_change.txt", function (err, contents) {
  if (err) {
    console.log("Oops!  Something went wrong: " + err)
  } else {
    console.log(contents.length)
  }
})

console.log("I'm still serving customers while reading from disk!")
