import axios from 'axios';

const api = axios.create({
    baseURL: 'https://6397-2804-a80-1041-e75c-d502-b5b3-2758-532b.ngrok-free.app',
    headers: {"ngrok-skip-browser-warning": "true"}
  });
  
export default api;