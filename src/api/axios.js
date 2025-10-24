import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:3000/api', // match your backend's base URL and prefix
});

export default instance;
