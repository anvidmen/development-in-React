function calculator (operator, value1, value2) {
  if (operator === 'add') return (value1 + value2)
  if (operator === 'subtract') return (value1 - value2)
  if (operator === 'multiply') return (value1 * value2)
  return NaN
}

var result = calculator('add', 40, 20)
// var result = calculator('subtract', 40, 20)
// var result = calculator('multiply', '40', 20)

console.log(result)
