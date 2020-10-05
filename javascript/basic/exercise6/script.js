var originalText = 'Tinc un cotxe de color blau'

var modifiedText = originalText.replace('blau', 'verd')
console.log(modifiedText)

function replaceWords () {
  for (var i = 0; i < originalText.length; i++) {
    originalText = originalText.replace('o', 'u')
  }
  return originalText
}
console.log(replaceWords())
