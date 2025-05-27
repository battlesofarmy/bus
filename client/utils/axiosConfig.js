import axios from 'axios';

const api = axios.create({
    baseURL: "https://bus-4lh7.vercel.app",
    // baseURL: "http://localhost:4000",
    timeout: 1000,
    headers: {"Content-Type": "application/json"}
});

export default  api;