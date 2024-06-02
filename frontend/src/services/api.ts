import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api',
});

export const getUsers = () => api.get('/users');
export const getUserById = (id: number) => api.get(`/users/${id}`);
export const createUser = (user: any) => api.post('/users', user);
export const updateUser = (id: number, user: any) => api.put(`/users/${id}`, user);
export const deleteUser = (id: number) => api.delete(`/users/${id}`);

export default api;
