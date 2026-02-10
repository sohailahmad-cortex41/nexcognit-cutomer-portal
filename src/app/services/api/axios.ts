import axios, { AxiosInstance, AxiosError, InternalAxiosRequestConfig, AxiosResponse } from 'axios';
import type { ApiError } from '@/app/types/api';

// Create axios instance with base configuration
const apiClient: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  timeout: 30000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor - Add auth token and logging
apiClient.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    // Get token from localStorage
    const token = localStorage.getItem('auth_token');
    
    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    // Log request in development
    if (import.meta.env.DEV) {
      console.log(`[API Request] ${config.method?.toUpperCase()} ${config.url}`, {
        params: config.params,
        data: config.data,
      });
    }

    return config;
  },
  (error: AxiosError) => {
    console.error('[API Request Error]', error);
    return Promise.reject(error);
  }
);

// Response interceptor - Handle errors and logging
apiClient.interceptors.response.use(
  (response: AxiosResponse) => {
    // Log response in development
    if (import.meta.env.DEV) {
      console.log(`[API Response] ${response.config.method?.toUpperCase()} ${response.config.url}`, {
        status: response.status,
        data: response.data,
      });
    }

    return response;
  },
  (error: AxiosError<ApiError>) => {
    // Handle different error scenarios
    if (error.response) {
      const status = error.response.status;
      const errorData = error.response.data;

      // Log error in development
      if (import.meta.env.DEV) {
        console.error(`[API Error] ${error.config?.method?.toUpperCase()} ${error.config?.url}`, {
          status,
          error: errorData,
        });
      }

      // Handle specific status codes
      switch (status) {
        case 401:
          // Unauthorized - Only auto-logout if not on login page
          // Don't redirect during login attempt
          if (!error.config?.url?.includes('/auth/login')) {
            localStorage.removeItem('auth_token');
            localStorage.removeItem('user');
            window.location.href = '/login';
          }
          break;
        
        case 403:
          // Forbidden
          console.error('Access forbidden:', errorData?.message);
          break;
        
        case 404:
          // Not found
          console.error('Resource not found:', errorData?.message);
          break;
        
        case 500:
          // Server error
          console.error('Server error:', errorData?.message);
          break;
        
        default:
          console.error('API Error:', errorData?.message || 'Unknown error occurred');
      }

      return Promise.reject(error);
    } else if (error.request) {
      // Request made but no response received
      console.error('[API Network Error] No response received', error.request);
      return Promise.reject({
        error: 'Network Error',
        message: 'Unable to connect to the server. Please check your internet connection.',
        success: false,
      });
    } else {
      // Something else happened
      console.error('[API Error]', error.message);
      return Promise.reject({
        error: 'Request Error',
        message: error.message || 'An error occurred while making the request',
        success: false,
      });
    }
  }
);

export default apiClient;

// Utility function to set auth token
export const setAuthToken = (token: string | null) => {
  if (token) {
    localStorage.setItem('auth_token', token);
  } else {
    localStorage.removeItem('auth_token');
  }
};

// Utility function to get auth token
export const getAuthToken = (): string | null => {
  return localStorage.getItem('auth_token');
};