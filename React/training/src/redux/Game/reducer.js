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
  const history = state.history.slice(0, state.stepNumber + 1);
  const current = history[history.length - 1];
  const squares = [...current.squares];
  const i = action.index;

  if ((squares[i] && action.type === actions.SQUARE_CLICKED) || (state.winner && action.type === actions.SQUARE_CLICKED)) {
    return state;
  }

  squares[i] = state.xIsNext ? strings.PLAYER_ONE : strings.PLAYER_TWO;
  const winner = calculateWinner(squares);

  switch (action.type) {
    case actions.SQUARE_CLICKED:
      return {
        ...state,
        history: state.history.concat({ squares }),
        stepNumber: state.history.length,
        xIsNext: !state.xIsNext,
        winner
      };

    case actions.HISTORY_ITEM_SELECTED:
      return {
        ...state,
        history: state.history.slice(0, action.index + 1),
        stepNumber: action.index,
        xIsNext: (action.index % 2) === 0,
        winner: null
      };

    default:
      return state;
  }
}

export default reducer;
