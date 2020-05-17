import { api, authenticated } from './index';

export const loginUser = (payload) => api.post('/login/', payload);
