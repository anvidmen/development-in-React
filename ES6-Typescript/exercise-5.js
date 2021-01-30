const myString = (value) => {
  const convertToArray = [...value]

  return convertToArray.reverse().join('')
}

myString('I like')
