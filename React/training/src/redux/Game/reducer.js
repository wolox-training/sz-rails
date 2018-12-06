const initialState = {
  counter: 42
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

    default:
      return state;
  }
}

export default reducer;
