/**
 * API Services Index
 * Central export point for all API services
 */

// Export axios instance and utilities
export { default as apiClient, setAuthToken, getAuthToken } from './axios';

// Export all API services
export * as authApi from './auth';
export * as dashboardApi from './dashboard';
export * as agentsApi from './agents';
export * as conversationsApi from './conversations';
export * as reportsApi from './reports';
export * as insightsApi from './insights';
export * as notificationsApi from './notifications';
export * as settingsApi from './settings';

// Re-export types for convenience
export type * from '@/app/types/api';
