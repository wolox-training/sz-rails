export const actions = {
  SQUARE_CLICKED: 'SQUARE_CLICKED',
  HISTORY_ITEM_SELECTED: 'HISTORY_ITEM_SELECTED',
  STEP_INCREASE: 'STEP_INCREASE',
  X_IS_NEXT: 'X_IS_NEXT',
  WINNER: 'WINNER',
  NEXT_PLAYER: 'NEXT_PLAYER'
};

const gameActions = {
  gameHandleClick: index => ({ type: actions.SQUARE_CLICKED, index }),
  gameJumpTo: index => ({ type: actions.HISTORY_ITEM_SELECTED, index }),
  stepIncrease: () => ({ type: actions.STEP_INCREASE, index: 1 }),
  xNext: () => ({ type: actions.X_IS_NEXT }),
  winningPlayer: player => ({ type: actions.WINNER, player }),
  nextPlayer: step => ({ type: actions.NEXT_PLAYER, step })
};

export default gameActions;
