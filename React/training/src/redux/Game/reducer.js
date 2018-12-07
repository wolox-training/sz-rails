const initialState = {
  history: [
    {
      squares: Array(9).fill(null)
    }
  ],
  stepNumber: 0,
  xIsNext: true,
  winner: null
}

function reducer (state = initialState, action) {
  switch (action.type) {
    case 'SQUARE_CLICKED':
      return {
        ...state,
        history: state.history.concat({squares: action.index})
      };

    case 'STEP_INCREASE':
      return {
        ...state,
        stepNumber: state.stepNumber + action.index
      };

    case 'X_IS_NEXT':
      return {
        ...state,
        xIsNext: !state.xIsNext
      };

    case 'WINNER':
      return {
        ...state,
        winner: action.player
      };

    case 'HISTORY_ITEM_SELECTED':
      return {
        ...state,
        history:    state.history.splice(0, action.index + 1),
        stepNumber: action.index,
        winner: null
      };

    case 'NEXT_PLAYER':
      return {
        ...state,
        xIsNext: (action.step % 2) === 0
      };

    default:
      return state;
  }
}

export default reducer;
