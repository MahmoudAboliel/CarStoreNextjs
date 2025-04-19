import axios from 'axios';
import { DOMAIN } from '@/lib/constance';

const api = axios.create({
  baseURL: DOMAIN,
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
});


if (typeof window !== 'undefined') {
  api.interceptors.request.use(
    (config) => {
      
      const token = window.localStorage.getItem('token'); // أو أي طريقة تخزين أخرى
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
}


api.interceptors.response.use(
  (response) => response,
  (error) => {
    
    if (error.response?.status === 401) {
      // إعادة توجيه لصفحة تسجيل الدخول إذا انتهت صلاحية الجلسة
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

export default api;