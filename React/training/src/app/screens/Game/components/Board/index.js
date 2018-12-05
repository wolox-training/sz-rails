import React, { Component, Fragment } from 'react';
import Square from './../Square';
import styles from './styles.module.scss';

class Board extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      squares: Array(9).fill(null),
      xIsNext: true
    }
  }

  nextPlayer() {
    return this.state.xIsNext ? 'X' : 'O';
  }

  handleClick(i) {
    console.log('Board-handleClick: ', i, ' xIsNext: ', this.state.xIsNext);
    const squares = this.state.squares.slice();
    squares[i] = this.nextPlayer();
    this.setState({
      squares: squares,
      xIsNext: !this.state.xIsNext
    });
  }

  renderSquare(i) {
    return (
      <Square 
        value={ this.state.squares[i] }
        onClick={ () => this.handleClick(i) }
      />
    )
  }

  render() {
    const status = 'Next player: ' + this.nextPlayer();

    return (
      <Fragment>
        <div className={styles.status}>{status}</div>
        <div className={styles.boardRow}>
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className={styles.boardRow}>
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className={styles.boardRow}>
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </Fragment>
    );
  }
}

export default Board;
