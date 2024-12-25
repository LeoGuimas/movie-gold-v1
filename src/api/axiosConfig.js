import axios from 'axios';

const api = axios.create({
    baseURL: 'https://c0ff-2804-a80-1240-8dc3-2417-13f5-d21-7707.ngrok-free.app',
    headers: {"ngrok-skip-browser-warning": "true"}
  });
  
export default api;