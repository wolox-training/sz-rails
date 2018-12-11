import { calculateWinner } from './../../utils/gameUtils';
import strings from './../../utils/strings';
import { actions } from './../Game/actions';

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
    case actions.SQUARE_CLICKED:
      return {
        ...state,
        history: state.history.concat({squares: action.index}),
        stepNumber: state.history.length,
        xIsNext: !state.xIsNext
      };

    case 'WINNER':
      return {
        ...state,
        winner: action.player
      };

    case actions.HISTORY_ITEM_SELECTED:
      return {
        ...state,
        history:    state.history.splice(0, action.index + 1),
        stepNumber: action.index,
        winner: null,
        xIsNext: (action.index % 2) === 0
      };

    default:
      return state;
  }
}

export default reducer;
