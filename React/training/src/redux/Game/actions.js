export const actions = {
  SQUARE_CLICKED: 'SQUARE_CLICKED',
  HISTORY_ITEM_SELECTED: 'HISTORY_ITEM_SELECTED',
  WINNER: 'WINNER',
};

const gameActions = {
  gameHandleClick: index => ({ type: actions.SQUARE_CLICKED, index }),
  gameJumpTo: index => ({ type: actions.HISTORY_ITEM_SELECTED, index }),
  winningPlayer: player => ({ type: actions.WINNER, player })
};

export default gameActions;
