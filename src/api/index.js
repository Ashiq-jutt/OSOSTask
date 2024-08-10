import axios from 'axios';

// setting up base URL
export const API = axios.create({
  baseURL: 'dummy/api',
});
