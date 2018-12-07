const initialState = {
  counter: 42,
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
    case 'SUMAR':
      return {
        counter: state.counter + action.leela
      };

    case 'RESTAR':
      return {
        counter: state.counter - action.foo
      };

    case 'SQUARE_CLICKED':
      return {
        ...state,
        history: state.history.concat({squares: action.index})
      };

    case 'STEP_INCREASE':
      return {
        ...state,
        stepNumber: state.stepNumber + action.index
      }

    case 'X_IS_NEXT':
      return {
        ...state,
        xIsNext: !state.xIsNext
      }

    case 'WINNER':
      return {
        ...state,
        winner: action.player
      }

    default:
      return state;
  }
}

export default reducer;
