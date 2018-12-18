import React, { Component } from 'react';
import Board from './components/Board';
import styles from './styles.module.scss';
import { connect } from 'react-redux';
import gameActions from '../../../redux/Game/actions';

class Game extends Component {
  nextPlayer() {
    return this.props.xIsNext ? 'X' : 'O';
  }

  render() {
    const history = this.props.gameHistory;
    const current = history[this.props.gameStep];
    const winner = this.props.winner;

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
            onClick={ (i) => this.props.gameHandleClick(i) }
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
  gameHistory: state.reducer.history,
  gameStep: state.reducer.stepNumber,
  xIsNext: state.reducer.xIsNext,
  winner: state.reducer.winner
});

const mapDispatchToProps = dispatch => ({
  gameHandleClick: i => dispatch(gameActions.gameHandleClick(i)),
  gameJumpTo: number => dispatch(gameActions.gameJumpTo(number)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Game);
