
var myName = ['J', 'U', 5, 'A', 'N']
var allVowels = 'AEIOU'
var allConsonants = 'BCDFGJKLMNÑPQRSTVWXYZ'

for (var i = 0; i < myName.length; i++) {
  if (allVowels.indexOf(myName[i]) !== -1) {
    console.log('I found the VOWEL: ' + myName[i])
  } else if (allConsonants.indexOf(myName[i]) !== -1) {
    console.log('I found the CONSONANT: ' + myName[i])
  } else if (!isNaN(myName[i])) {
    console.log('People\'s Names do not have the number: ' + myName[i])
  }
}
