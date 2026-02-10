import apiClient from './axios';
import type { ApiResponse, Insight } from '@/app/types/api';

/**
 * Insights API Service
 * Handles all AI-generated insights API calls
 */

// Get all insights
export const getInsights = async (params?: {
  category?: 'performance' | 'customer_behavior' | 'operational' | 'revenue';
  impact?: 'high' | 'medium' | 'low';
  status?: 'new' | 'viewed' | 'actioned';
  limit?: number;
  page?: number;
}): Promise<ApiResponse<Insight[]>> => {
  const response = await apiClient.get<ApiResponse<Insight[]>>('/insights', {
    params,
  });
  return response.data;
};

// Get single insight by ID
export const getInsightById = async (insightId: string): Promise<Insight> => {
  const response = await apiClient.get<ApiResponse<Insight>>(`/insights/${insightId}`);
  return response.data.data;
};

// Mark insight as viewed
export const markInsightAsViewed = async (insightId: string): Promise<Insight> => {
  const response = await apiClient.patch<ApiResponse<Insight>>(`/insights/${insightId}/view`);
  return response.data.data;
};

// Mark insight as actioned
export const markInsightAsActioned = async (
  insightId: string,
  action_notes?: string
): Promise<Insight> => {
  const response = await apiClient.patch<ApiResponse<Insight>>(`/insights/${insightId}/action`, {
    action_notes,
  });
  return response.data.data;
};

// Generate new insights (trigger AI analysis)
export const generateInsights = async (params?: {
  date_from?: string;
  date_to?: string;
  agent_id?: string;
  category?: string;
}): Promise<Insight[]> => {
  const response = await apiClient.post<ApiResponse<Insight[]>>('/insights/generate', params);
  return response.data.data;
};

// Get insight trends
export const getInsightTrends = async (params?: {
  date_from?: string;
  date_to?: string;
  category?: string;
}): Promise<{
  trends: Array<{
    date: string;
    category: string;
    count: number;
    avg_impact: number;
  }>;
  summary: {
    total_insights: number;
    high_impact: number;
    medium_impact: number;
    low_impact: number;
  };
}> => {
  const response = await apiClient.get('/insights/trends', {
    params,
  });
  return response.data.data;
};

// Delete insight
export const deleteInsight = async (insightId: string): Promise<void> => {
  await apiClient.delete(`/insights/${insightId}`);
};
