import React, { useState } from 'react'
import { calculateWinner } from '../calculate-winner'
import Board from './Board'

const Game = () => {
  const [history, setHistory] = useState([Array(9).fill(null)])
  const [stepNumber, setStepNumber] = useState(0)
  const [xIsNext, setXisNext] = useState(true)
  const winner = calculateWinner(history[stepNumber])

  const handleClick = i => {
    const timeInHistory = history.slice(0, stepNumber + 1)
    const current = timeInHistory[stepNumber]
    const squares = [...current]

    if (winner || squares[i]) return
    squares[i] = xIsNext ? 'X' : 'O'
    setHistory([...timeInHistory, squares])
    setStepNumber(timeInHistory.length)
    setXisNext(!xIsNext)
  }

  const jumpTo = step => {
    setStepNumber(step)
    setXisNext(step % 2 === 0)
  }

  const renderMoves = () => (
    history.map((_step, move) => {
      const destination = move ? `Go to movement number ${move}` : 'Go to start'
      return (
        <li key={move}>
          <button onClick={() => jumpTo(move)}>{destination}</button>
        </li>
      )
    })
  )
  const status = winner ? `${winner} You are the winner!💥💥` : `Turn of ${xIsNext ? 'X' : 'O'}`

  return (
    <div className='game'>
      <div className='game-board'>
        <h1> Tic Tac Toe</h1>
        <Board squares={history[stepNumber]} onClick={handleClick} />
        <div className='game-status'>
          <h2>{status}</h2>
        </div>
      </div>
      <div className='game-history'>
        <h2>History</h2>
        {renderMoves()}
      </div>
    </div>
  )
}

export default Game
