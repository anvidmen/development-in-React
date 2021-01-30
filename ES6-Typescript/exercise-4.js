
const epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away']

const reducer = (accumulator, currentValue) => accumulator + ' ' + currentValue

console.log(epic.reduce(reducer))
