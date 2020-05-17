import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://localhost:3000/api',
  timeout: 50000,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

export const authenticated = (api) => {
  const token = localStorage.getItem('token');
  api.defaults.headers.common['Authorization'] = `Token ${token}`;
  return api;
};
