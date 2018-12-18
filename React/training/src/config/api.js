import { create } from 'apisauce'

const api = create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
  timeout: 5000
});

export default api;
