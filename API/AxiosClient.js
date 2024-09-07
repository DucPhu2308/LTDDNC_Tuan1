import axios from 'axios';
import queryString from 'query-string';

const BASE_URL = 'http://192.168.2.14:4000/api';
const axiosClient = axios.create({
    baseURL: BASE_URL,
    headers: { 'Content-Type': 'application/json' },
    paramsSerializer: params => queryString.stringify(params)
});
export default axiosClient;