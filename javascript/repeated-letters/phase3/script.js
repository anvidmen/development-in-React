// option 1
var myName = ['J', 'U', 'A', 'N', 'D', 'A']
var letterMatches = new Map()

for (var i = 0; i < myName.length; i++) {
  var counter = letterMatches.get(myName[i])

  if (counter) letterMatches.set(myName[i], ++counter)
  else letterMatches.set(myName[i], 1)
}

console.log(letterMatches)

// option 2
var countLetters = {}

for (var j = 0; j < myName.length; j++) {
  countLetters[myName[j]] = (countLetters[myName[j]] || 0) + 1
}

console.log(countLetters)
