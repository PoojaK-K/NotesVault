import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000';

const api = axios.create({
  baseURL: API_URL,
});

// Add a request interceptor
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Add a response interceptor
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      // Auto logout if 401 response returned from api
      localStorage.removeItem('token');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

export const authAPI = {
  login: (username, password) => {
    const formData = new FormData();
    formData.append('username', username);
    formData.append('password', password);
    return api.post('/login', formData);
  },
  register: (userData) => api.post('/register', userData),
};

export const notesAPI = {
  getAll: () => api.get('/notes/'),
  getById: (id) => api.get(`/notes/${id}`),
  create: (note) => api.post('/notes/', note),
  update: (id, note) => api.put(`/notes/${id}`, note),
  delete: (id) => api.delete(`/notes/${id}`),
  search: (query) => api.get(`/notes/search?q=${query}`),
};

export default api;
