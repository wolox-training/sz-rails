export const actions = {
  BLA: 'SUMAR',
  JUAS: 'RESTAR',
  SQUARE_CLICKED: 'SQUARE_CLICKED',
  HISTORY_ITEM_SELECTED: 'HISTORY_ITEM_SELECTED',
  STEP_INCREASE: 'STEP_INCREASE',
  X_IS_NEXT: 'X_IS_NEXT',
  WINNER: 'WINNER'
};

const gameActions = {
  restar: (i) => ({
    type: actions.JUAS,
    foo: i
  }),

  sumar: (i) => ({
    type: actions.BLA,
    leela: i
  }),

  gameHandleClick: index => ({ type: actions.SQUARE_CLICKED, index }),
  gameJumpTo: index => ({ type: actions.HISTORY_ITEM_SELECTED, index }),
  stepIncrease: () => ({ type: actions.STEP_INCREASE, index: 1 }),
  xNext: () => ({ type: actions.X_IS_NEXT }),
  winner: player => ({ type: actions.WINNER, player })
};

export default gameActions;
