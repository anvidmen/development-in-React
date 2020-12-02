import React, { Component } from 'react'
import Square from './Square'

export class Board extends Component {
  renderSquare (i) {
    return (
      <Square
        value={this.props.squares[i]}
        key={i}
        onClick={() => this.props.onClick(i)}
      />
    )
  }

  render () {
    const rowNum = 3
    const columnNum = 3
    const squares = []

    for (let i = 0; i < rowNum; i++) {
      const rows = []

      for (let j = 0; j < columnNum; j++) {
        rows.push(this.renderSquare(i * rowNum + j))
      }

      squares.push(<div className='board-row' key={i}>{rows}</div>)
    }

    return (
      <div>
        {squares}
      </div>
    )
  }
}
