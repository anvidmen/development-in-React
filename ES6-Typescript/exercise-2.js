const multiply = (num1, num2) => {
  return num1 * num2
}
multiply(4, 5)

const toCelsius = (fahrenheit) => {
  return (5 / 9) * (fahrenheit - 32)
}
toCelsius(32)

// This function returns a string padded with leading zeros
const padZeros = (num, totalLen) => {
  let numStr = num.toString()
  const numZeros = totalLen - numStr.length

  for (let i = 1; i <= numZeros; i++) {
    numStr = `0${numStr}`
  }
  return numStr
}
padZeros(2, 4)

const power = (base, exponent) => {
  let result = 1
  for (let i = 0; i < exponent; i++) {
    result *= base
  }
  return result
}
power(2, 5)

const greet = (who) => console.log(`Hello ${who}`)
greet('Juan')
