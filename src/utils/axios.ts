import axios from 'axios';

// 创建一个axios实例，用于登录和注册请求
const axiosInstance = axios.create({
  baseURL: 'http://localhost:8080',
});

export default axiosInstance;
