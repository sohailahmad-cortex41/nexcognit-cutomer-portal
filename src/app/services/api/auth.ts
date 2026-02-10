import apiClient, { setAuthToken } from './axios';
import type { LoginRequest, LoginResponse, UserProfile } from '@/app/types/api';

/**
 * Authentication API Service
 * Handles all authentication-related API calls
 */

// Login - matches exact API response format
export const login = async (credentials: LoginRequest): Promise<LoginResponse> => {
  const response = await apiClient.post<LoginResponse>('/auth/login', credentials);
  
  // API returns token and user directly (not wrapped in data object)
  const { token, user } = response.data;
  
  // Store token
  setAuthToken(token);
  
  // Store user data
  localStorage.setItem('user', JSON.stringify(user));
  
  return { token, user };
};

// Logout
export const logout = async (): Promise<void> => {
  try {
    await apiClient.post('/auth/logout');
  } finally {
    // Clear token and user data regardless of API response
    setAuthToken(null);
    localStorage.removeItem('user');
  }
};

// Get current user from localStorage
export const getCurrentUser = (): UserProfile | null => {
  const userStr = localStorage.getItem('user');
  if (userStr && userStr !== 'undefined' && userStr !== 'null') {
    try {
      return JSON.parse(userStr);
    } catch (error) {
      console.error('Error parsing user data:', error);
      // Clear invalid data
      localStorage.removeItem('user');
      localStorage.removeItem('auth_token');
      return null;
    }
  }
  return null;
};

// Update user profile
export const updateProfile = async (profileData: Partial<{
  name: string;
  email: string;
}>): Promise<UserProfile> => {
  const response = await apiClient.put<{ user: UserProfile }>('/auth/profile', profileData);
  const user = response.data.user;
  
  // Update stored user data
  localStorage.setItem('user', JSON.stringify(user));
  
  return user;
};

// Change password
export const changePassword = async (passwordData: {
  current_password: string;
  new_password: string;
}): Promise<void> => {
  await apiClient.post('/auth/change-password', passwordData);
};

// Request password reset
export const requestPasswordReset = async (email: string): Promise<void> => {
  await apiClient.post('/auth/forgot-password', { email });
};

// Reset password with token
export const resetPassword = async (resetData: {
  token: string;
  new_password: string;
}): Promise<void> => {
  await apiClient.post('/auth/reset-password', resetData);
};

// Verify email
export const verifyEmail = async (token: string): Promise<void> => {
  await apiClient.post('/auth/verify-email', { token });
};

// Refresh token
export const refreshToken = async (): Promise<string> => {
  const response = await apiClient.post<{ token: string }>('/auth/refresh');
  const { token } = response.data;
  
  // Update stored token
  setAuthToken(token);
  
  return token;
};