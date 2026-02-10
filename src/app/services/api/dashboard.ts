import axios from './axios';
import {
  DashboardStats,
  SentimentDistribution,
  TopAgentsResponse,
  AlertsResponse,
} from '../../types/api';

/**
 * Dashboard API Service
 * Handles all dashboard-related API calls
 */

export const dashboardApi = {
  // Get dashboard stats/KPIs
  getDashboardStats: async (): Promise<DashboardStats> => {
    const { data } = await axios.get('/dashboard/stats');
    return data;
  },

  // Get sentiment distribution data
  getSentimentDistribution: async (): Promise<SentimentDistribution> => {
    const { data } = await axios.get('/dashboard/sentiment-distribution');
    return data;
  },

  // Get top performing agents
  getTopAgents: async (): Promise<TopAgentsResponse> => {
    const { data } = await axios.get('/dashboard/top-agents');
    return data;
  },

  // Get recent alerts
  getAlerts: async (): Promise<AlertsResponse> => {
    const { data } = await axios.get('/dashboard/alerts');
    return data;
  },
};

// Get conversation volume data
export const getConversationVolume = async (params?: {
  date_from?: string;
  date_to?: string;
  interval?: 'hour' | 'day' | 'week' | 'month';
}): Promise<Array<{ date: string; count: number }>> => {
  const response = await apiClient.get<ApiResponse<Array<{ date: string; count: number }>>>('/dashboard/conversation-volume', {
    params,
  });
  return response.data.data;
};
