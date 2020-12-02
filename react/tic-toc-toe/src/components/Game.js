import React, { Component } from 'react'
import { Board } from './Board'
import { calculateWinner } from '../calculate-winner'
import Square from './Square'

export class Game extends Component {
  constructor (props) {
    super(props)
    this.state = {
      history: [{
        squares: Array(9).fill(null)
      }],
      stepNumber: 0,
      xIsNext: true
    }
  }

  handleClick (i) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1)
    const current = history[history.length - 1]
    const squares = current.squares.slice()

    if (calculateWinner(squares) || squares[i]) return

    squares[i] = this.state.xIsNext ? 'X' : 'O'
    this.setState({
      history: history.concat([{
        squares: squares
      }]),
      stepNumber: history.length,
      xIsNext: !this.state.xIsNext
    })
  }

  jumpTo (step) {
    this.setState({
      stepNumber: step,
      xIsNext: (step % 2 === 0)
    })
  }

  render () {
    const history = this.state.history
    const current = history[this.state.stepNumber]
    const winner = calculateWinner(current.squares)

    const moves = history.map((_step, move) => {
      const desc = move ? `Go to movement number ${move}` : 'Go to start'
      return (
        <li key={move}>
          <button onClick={() => this.jumpTo(move)}>{desc}</button>
        </li>
      )
    })

    let status

    if (winner) status = `😎 '${winner}', You are the winner!💥💥 `
    else status = `Turn of ${this.state.xIsNext ? 'X' : 'O'}`

    return (
      <div className='game'>
        <div className='game-board'>
          <h1>Tic Tac Toe</h1>
          <Board
            squares={current.squares}
            onClick={(i) => this.handleClick(i)}
          />
          <div className='game-status'>
            <h2>{status}</h2>
          </div>
        </div>
        <div className='game-history'>
          <h3>History</h3>
          <ol>
            {moves}
          </ol>
        </div>
      </div>
    )
  }
}
