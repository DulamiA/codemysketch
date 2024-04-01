import axios from 'axios'
// import config from '../config';

const instance = axios.create({
  // baseURL: "https://dev-api.codemysketch.com",
  baseURL: "http://localhost:5000", //"https://dev-api.codemysketch.com",
  timeout: 30000,
})

instance.interceptors.request.use(function (config) {
  const token = localStorage.getItem('accessToken');
  config.headers.Authorization = token;
  return config;
});

export default instance

