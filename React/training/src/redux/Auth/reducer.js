import { actions } from './../Auth/actions';

const initialState = {
  token: null
}

function auth (state = initialState, action) {
  switch (action.type) {
    case actions.USER_LOGIN:
      return {
        ...state,
        token: action.token
      };

    case actions.USER_LOGOUT:
      const token = localStorage.getItem("token");
      token && localStorage.removeItem("token");

      return {
        ...state,
        token: action.token
      }

    default:
      return state;
  }
}

export default auth;
