import api from './../config/api';

export default {
  getUsers: body => api.get('/users', body)
};
