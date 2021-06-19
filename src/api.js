import axios from 'axios';

const api = axios.create({
  baseURL: process.env.BACK_URL || "https://beatriz-prova-scripts-back.herokuapp.com"
})

export default api;