// option 1
var myName = ['J', 'U', 'A', 'N']
var surname = ['O', 'M', 'E', 'N']
var fullname = []

for (var i in myName) fullname[i] = myName[i]

var k = fullname.length
fullname[k++] = ' '

for (var j in surname) fullname[k++] = surname[j]

console.log(fullname)

// option 2
fullname = myName.concat(' ', surname)
console.log(fullname)

// option 3
fullname = [...myName, ' ', ...surname]
console.log(fullname)
