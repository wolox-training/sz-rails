export const actions = {
  SQUARE_CLICKED: 'SQUARE_CLICKED',
  HISTORY_ITEM_SELECTED: 'HISTORY_ITEM_SELECTED'
};

const gameActions = {
  gameHandleClick: index => ({ type: actions.SQUARE_CLICKED, index }),
  gameJumpTo: index => ({ type: actions.HISTORY_ITEM_SELECTED, index })
};

export default gameActions;
