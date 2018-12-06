import React, { Component } from 'react';
import Board from './components/Board';
import styles from './styles.module.scss';

import { connect } from 'react-redux';
import gameActions from '../../../redux/Game/actions';

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [{
        squares: Array(9).fill(null),
      }],
      stepNumber: 0,
      xIsNext: true,
    };
  }

  handleClick(i) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();

    if (this.calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.nextPlayer();
    this.setState({
      history: history.concat([{
        squares: squares
      }]),
      stepNumber: history.length,
      xIsNext: !this.state.xIsNext,
    });
  }

  nextPlayer() {
    return this.state.xIsNext ? 'X' : 'O';
  }

  jumpTo(step) {
    this.setState({
      stepNumber: step,
      xIsNext: (step % 2) === 0,
    });
  }

  calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }

  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = this.calculateWinner(current.squares);

    const moves = history.map((step, move) => {
      const desc = move ?
        'Go to move #' + move :
        'Go to game start';
      return (
        <li key={move}>
          <button onClick={() => this.jumpTo(move)}>{desc}</button>
        </li>
      );
    });

    let status;
    if (winner) {
      status = 'Winner: ' + winner;
    } else {
      status = 'Next player: ' + this.nextPlayer();
    }

    return (
      <div className={styles.game}>
        <div className={styles.gameBoard}>
          <Board
            squares={current.squares}
            onClick={(i) => this.handleClick(i)}
          />
        </div>
        <div className={styles.gameInfo}>
          <div className={styles.status}>{status}</div>
          <ol>{moves}</ol>
        </div>

        <div className='dubiel'>
          <button className='oh' onClick={() => this.props.restar(1)}>
            Restar
          </button>

          {this.props.hey}

          <button className='oh' onClick={() => this.props.sumar(2)}>
            Sumar
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  hey: state.counter
});

const mapDispatchToProps = dispatch => ({
  restar: i => dispatch(gameActions.restar(i)),
  sumar: i => dispatch(gameActions.sumar(i))
});

export default connect(mapStateToProps, mapDispatchToProps)(Game);
