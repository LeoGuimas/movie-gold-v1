import axios from 'axios';

const api = axios.create({
    baseURL: 'https://4af3-206-42-59-176.ngrok-free.app',
    headers: {"ngrok-skip-browser-warning": "true"}
  });
  
export default api;