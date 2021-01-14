import React, { useState } from 'react'
import { calculateWinner } from '../calculate-winner'
import Board from './Board'
import Switch from './Switch'

const BOARD_LENGTH = 9

const Game = () => {
  const [history, setHistory] = useState([Array(9).fill(null)])
  const [stepNumber, setStepNumber] = useState(0)
  const [xIsNext, setXisNext] = useState(true)
  const [lastMoves, setLastMoves] = useState([-1])
  const [isAscending, setIsAscending] = useState(true)
  const winner = calculateWinner(history[stepNumber])

  const handleClick = i => {
    const timeInHistory = history.slice(0, stepNumber + 1)
    const current = timeInHistory[stepNumber]
    const squares = [...current]
    const prevLastmoves = lastMoves.slice(0, stepNumber + 1)

    if (winner || squares[i]) return
    squares[i] = xIsNext ? 'X' : 'O'
    setHistory([...timeInHistory, squares, i])
    setLastMoves([...prevLastmoves, i])
    setStepNumber(timeInHistory.length)
    setXisNext(!xIsNext)
  }

  const jumpTo = step => {
    setStepNumber(step)
    setXisNext(step % 2 === 0)
  }

  const renderMoves = () => {
    const moves = lastMoves.map((move, idx) => {
      const col = 1 + move % 3
      const row = 1 + Math.floor(move / 3)
      const destination = move !== -1 ? `Go to movement number ${idx}, Position: row ${row}, column ${col}` : 'Go to start'
      return (
        <li key={idx}>
          <button onClick={() => jumpTo(idx)}>{destination}</button>
        </li>
      )
    })

    if (isAscending) return moves
    return moves.reverse()
  }

  const buildStatus = () => {
    if (winner) return <div className='winner'>Player {winner} is the winner! 💥💥</div>
    if (lastMoves.length > BOARD_LENGTH) return 'X and O Draw, play again!'
    return `Turn of ${xIsNext ? 'X' : 'O'}`
  }

  const getSquares = () => {
    return history[stepNumber]
  }

  return (
    <div className='game'>
      <div className='game-board'>
        <h1> Tic Tac Toe</h1>
        <Board squares={getSquares()} onClick={handleClick} />
        <div className='game-status'>
          {buildStatus()}
        </div>
      </div>
      <div className='game-history'>
        <h2>History</h2>
        <Switch isAscending={isAscending} onToggle={() => setIsAscending(prevIsAscending => !prevIsAscending)} />
        {renderMoves()}
      </div>
    </div>
  )
}

export default Game
