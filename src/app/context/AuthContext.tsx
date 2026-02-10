import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { authApi } from '@/app/services/api';
import type { UserProfile, LoginRequest } from '@/app/types/api';

interface AuthContextType {
  user: UserProfile | null;
  loading: boolean;
  login: (credentials: LoginRequest) => Promise<void>;
  logout: () => Promise<void>;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);

  // Check for existing user on mount
  useEffect(() => {
    try {
      const userStr = localStorage.getItem('user');
      if (userStr && userStr !== 'undefined' && userStr !== 'null') {
        const currentUser = JSON.parse(userStr);
        setUser(currentUser);
      }
    } catch (error) {
      console.error('Error loading user data:', error);
      // Clear invalid data
      localStorage.removeItem('user');
      localStorage.removeItem('auth_token');
    } finally {
      setLoading(false);
    }
  }, []);

  const login = async (credentials: LoginRequest) => {
    try {
      const { user } = await authApi.login(credentials);
      setUser(user);
      localStorage.setItem('user', JSON.stringify(user));
    } catch (error) {
      console.error('Login failed:', error);
      throw error;
    }
  };

  const logout = async () => {
    try {
      await authApi.logout();
      setUser(null);
      localStorage.removeItem('user');
      localStorage.removeItem('auth_token');
      // Clear agent data from previous session
      localStorage.removeItem('agents');
      localStorage.removeItem('selectedAgentId');
    } catch (error) {
      console.error('Logout failed:', error);
      throw error;
    }
  };

  const value = {
    user,
    loading,
    login,
    logout,
    isAuthenticated: !!user,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}