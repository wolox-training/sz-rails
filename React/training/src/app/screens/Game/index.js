import React, { Component } from 'react';
import Board from './components/Board';
import styles from './styles.module.scss';
import { connect } from 'react-redux';
import gameActions from '../../../redux/Game/actions';

class Game extends Component {
  handleClick(i) {
    const history = this.props.gameHistory;
    const current = history[history.length - 1];
    const squares = current.squares.slice();

    if (this.props.winner || squares[i]) {
      return;
    }

    squares[i] = this.nextPlayer();
    this.props.gameHandleClick(squares);
  }

  nextPlayer() {
    return this.props.xIsNext ? 'X' : 'O';
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
        this.props.winningPlayer(squares[a]);
        return squares[a];
      }
    }
    return null;
  }

  render() {
    console.log(this.props.gameHistory);
    console.log('Turno: ', this.props.gameStep);
    console.log('xIsNext: ', this.props.xIsNext);
    console.log('Winner: ', this.props.winner);

    const history = this.props.gameHistory;
    const current = history[this.props.gameStep];
    const winner = this.calculateWinner(current.squares);

    const moves = history.map((step, move) => {
      const desc = move ?
        'Go to move #' + move :
        'Go to game start';
      return (
        <li key={move}>
          <button onClick={() => this.props.gameJumpTo(move)}>{desc}</button>
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
      </div>
    );
  }
}

const mapStateToProps = state => ({
  gameHistory: state.history,
  gameStep: state.stepNumber,
  xIsNext: state.xIsNext,
  winner: state.winner
});

const mapDispatchToProps = dispatch => ({
  gameHandleClick: i => dispatch(gameActions.gameHandleClick(i)),
  winningPlayer: player => dispatch(gameActions.winningPlayer(player)),
  gameJumpTo: number => dispatch(gameActions.gameJumpTo(number)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Game);
