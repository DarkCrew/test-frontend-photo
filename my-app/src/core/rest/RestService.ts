/* eslint-disable no-param-reassign */
import axios from 'axios';

const API_KEY = '563492ad6f917000010000014640aabb4e9d420cbe1c0df7daf4c2bf';
const API_URL = 'https://api.pexels.com/v1';

const ManagerAppApi = axios.create({
  baseURL: API_URL,
});

ManagerAppApi.interceptors.request.use((config) => {
  config.headers.Authorization = API_KEY;
  return config;
});

export default ManagerAppApi;
