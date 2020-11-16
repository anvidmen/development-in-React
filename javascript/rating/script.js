const itemsRating = document.getElementsByClassName('paw-rating')

function removePaintRating () {
  for (let i = 0; i < itemsRating.length; i++) {
    const paw = itemsRating[i]
    paw.classList.remove('paw-checked')
  }
}

function paintRating (showPaw) {
  for (let i = itemsRating.length - 1; i >= 0; i--) {
    const paw = itemsRating[i]
    paw.classList.add('paw-checked')

    if (paw.id === showPaw) {
      break
    }
  }
}

function initialRating () {
  for (let i = 0; i < itemsRating.length; i++) {
    const paw = itemsRating[i]
    paw.addEventListener('click', function () {
      removePaintRating()
      paintRating(paw.id)
    })
  }
}

initialRating()
