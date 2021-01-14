import React from 'react'

const Square = ({ value, isWinnerSquare, onClick }) => {
  return (
    <button className={isWinnerSquare ? 'square winner-square' : 'square'} onClick={onClick}>
      {value}
    </button>
  )
}

export default Square
