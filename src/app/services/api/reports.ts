import apiClient from './axios';
import type { ApiResponse, Report, ReportData, ReportFilters } from '@/app/types/api';

/**
 * Reports API Service
 * Handles all report-related API calls
 */

// Get list of saved reports
export const getReports = async (params?: {
  page?: number;
  limit?: number;
  type?: string;
}): Promise<ApiResponse<Report[]>> => {
  const response = await apiClient.get<ApiResponse<Report[]>>('/reports', {
    params,
  });
  return response.data;
};

// Get single report by ID
export const getReportById = async (reportId: string): Promise<Report> => {
  const response = await apiClient.get<ApiResponse<Report>>(`/reports/${reportId}`);
  return response.data.data;
};

// Generate new report with filters
export const generateReport = async (
  filters: ReportFilters & {
    name?: string;
    type?: string;
  }
): Promise<ReportData> => {
  const response = await apiClient.post<ApiResponse<ReportData>>('/reports/generate', filters);
  return response.data.data;
};

// Save a report
export const saveReport = async (reportData: {
  name: string;
  type: string;
  filters: ReportFilters;
  data?: any;
}): Promise<Report> => {
  const response = await apiClient.post<ApiResponse<Report>>('/reports', reportData);
  return response.data.data;
};

// Update report
export const updateReport = async (
  reportId: string,
  updates: Partial<{
    name: string;
    filters: ReportFilters;
  }>
): Promise<Report> => {
  const response = await apiClient.put<ApiResponse<Report>>(`/reports/${reportId}`, updates);
  return response.data.data;
};

// Delete report
export const deleteReport = async (reportId: string): Promise<void> => {
  await apiClient.delete(`/reports/${reportId}`);
};

// Export report in different formats
export const exportReport = async (
  reportId: string,
  format: 'csv' | 'pdf' | 'xlsx' = 'pdf'
): Promise<Blob> => {
  const response = await apiClient.get(`/reports/${reportId}/export`, {
    params: { format },
    responseType: 'blob',
  });
  return response.data;
};

// Get report analytics data
export const getReportAnalytics = async (
  filters: ReportFilters
): Promise<{
  conversations_by_channel: Array<{ channel: string; count: number; percentage: number }>;
  sentiment_distribution: Array<{ sentiment: string; count: number; percentage: number }>;
  agent_performance: Array<{
    agent_id: string;
    agent_name: string;
    conversations: number;
    avg_response_time: number;
    success_rate: number;
    sentiment_score: number;
  }>;
  time_series: Array<{
    date: string;
    conversations: number;
    avg_sentiment: number;
  }>;
  top_topics: Array<{ topic: string; count: number }>;
  resolution_rate: number;
  avg_conversation_duration: number;
}> => {
  const response = await apiClient.post('/reports/analytics', filters);
  return response.data.data;
};

// Schedule a report
export const scheduleReport = async (reportData: {
  name: string;
  filters: ReportFilters;
  frequency: 'daily' | 'weekly' | 'monthly';
  recipients: string[];
  format: 'csv' | 'pdf' | 'xlsx';
}): Promise<{ id: string; scheduled: boolean }> => {
  const response = await apiClient.post('/reports/schedule', reportData);
  return response.data.data;
};
