import React, { Component } from 'react';
import Board from './components/Board';
import style from './styles.scss';

class Game extends Component {
  render() {
    console.log(style);
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

export default Game;
