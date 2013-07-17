var heroNames    = ["Kelrad", "Emia", "Issium", "Nalroth", "Itaph", "Ranech"]
  , monsterNames = ["orc", "goblin", "zombie", "skeleton", "kobold"]

var Adventure = function() {
  var retval       = {}
    , keepGoing    = true
    , currentRound

  retval.hero   = heroNames[Math.floor(Math.random()*heroNames.length)]
  retval.rounds = []

  do {
    currentRound = {
      enemy: monsterNames[Math.floor(Math.random()*monsterNames.length)],
      heroLives: Math.floor(Math.random()*2) == 1
    }

    retval.rounds.push(currentRound)
  } while (currentRound.heroLives)


  return retval
}

module.exports = Adventure
