import axios from 'axios';

const API_BASE_URL = 'http://localhost:8081/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

api.interceptors.request.use(
  (config) => {
    config.headers['Authorization'] = 'Bearer sample-token';
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

api.interceptors.request.use(request => {
  console.log('Starting Request', JSON.stringify(request, null, 2));
  return request;
});

api.interceptors.response.use(
  response => {
    console.log('Response:', JSON.stringify(response.data, null, 2));
    return response;
  },
  error => {
    console.log('Response Error:', error);
    if (error.response) {
      console.log('Error Data:', JSON.stringify(error.response.data, null, 2));
      console.log('Error Status:', error.response.status);
      console.log('Error Headers:', JSON.stringify(error.response.headers, null, 2));
    }
    return Promise.reject(error);
  }
);

export default api;