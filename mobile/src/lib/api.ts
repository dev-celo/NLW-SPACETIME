import axios from 'axios';

export const api = axios.create({
  // get your ip (machine)
  baseURL: 'http://192.168.0.114:3001',
});