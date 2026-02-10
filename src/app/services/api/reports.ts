import apiClient from './axios';

/**
 * Reports API Service
 * Handles all report-related API calls
 */

// Response types
export interface OutcomeDistribution {
  distribution: {
    pending?: number;
    success?: number;
    failed?: number;
  };
  total: number;
  percentages: {
    pending?: number;
    success?: number;
    failed?: number;
  };
  successRate: number;
}

export interface PurposeDistribution {
  distribution: Record<string, number>;
  total: number;
  percentages: Record<string, number>;
}

export interface SentimentDistribution {
  distribution: {
    positive?: number;
    neutral?: number;
    negative?: number;
  };
  total: number;
  percentages: {
    positive?: number;
    neutral?: number;
    negative?: number;
  };
}

export interface ReportSummary {
  totalConversations: number;
  totalMessages: number;
  avgDuration: string;
  activeToday: number;
  activeThisWeek: number;
  activeThisMonth: number;
  totalAnalyzed: number;
  successRate: number;
  sentimentBreakdown: {
    positive: number;
    neutral: number;
    negative: number;
  };
  agentCount: number;
}

// Get outcome distribution
export const getOutcomeDistribution = async (): Promise<OutcomeDistribution> => {
  const response = await apiClient.get<OutcomeDistribution>('/reports/outcome-distribution');
  return response.data;
};

// Get purpose distribution
export const getPurposeDistribution = async (): Promise<PurposeDistribution> => {
  const response = await apiClient.get<PurposeDistribution>('/reports/purpose-distribution');
  return response.data;
};

// Get sentiment distribution
export const getSentimentDistribution = async (): Promise<SentimentDistribution> => {
  const response = await apiClient.get<SentimentDistribution>('/reports/sentiment-distribution');
  return response.data;
};

// Get report summary
export const getReportSummary = async (): Promise<ReportSummary> => {
  const response = await apiClient.get<ReportSummary>('/reports/summary');
  return response.data;
};
