import UserService from '../../services/UserService';
import api from '../../config/api';

export const actions = {
  USER_LOGIN: 'USER_LOGIN',
  USER_LOGOUT: 'USER_LOGOUT'
};

const authActions = {
  userLogin: values => async dispatch => {
    const response = await UserService.getUsers(values);
    const users = response.data;

    if (users.length > 0) {
      const user = users[0];
      localStorage.setItem('token', user.token);
      api.setHeader('access-token', user.token);
      dispatch({ type: actions.USER_LOGIN, token: user.token });
    } else {
      alert('Verify your email and password.');
    }
  },

  userLogout: () => ({ type: actions.USER_LOGOUT, token: null})
};

export default authActions;
