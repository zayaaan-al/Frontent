import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://backend-6w3v.onrender.com/api', // match your backend's base URL and prefix
});

export default instance;
