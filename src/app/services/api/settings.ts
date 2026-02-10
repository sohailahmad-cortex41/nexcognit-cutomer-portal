import apiClient from './axios';
import type { ApiResponse } from '@/app/types/api';

/**
 * Settings API Service
 * Handles all settings-related API calls
 */

// Get user settings
export const getUserSettings = async (): Promise<{
  notifications: {
    email_alerts: boolean;
    slack_integration: boolean;
    daily_reports: boolean;
    weekly_digest: boolean;
    agent_alerts: boolean;
    conversation_alerts: boolean;
  };
  preferences: {
    theme: 'dark' | 'light';
    language: string;
    timezone: string;
    density: 'comfortable' | 'compact' | 'spacious';
  };
  integrations: {
    slack?: { enabled: boolean; webhook_url?: string };
    webhook?: { enabled: boolean; url?: string };
  };
}> => {
  const response = await apiClient.get('/settings');
  return response.data.data;
};

// Update notification settings
export const updateNotificationSettings = async (settings: {
  email_alerts?: boolean;
  slack_integration?: boolean;
  daily_reports?: boolean;
  weekly_digest?: boolean;
  agent_alerts?: boolean;
  conversation_alerts?: boolean;
}): Promise<void> => {
  await apiClient.put('/settings/notifications', settings);
};

// Update user preferences
export const updateUserPreferences = async (preferences: {
  theme?: 'dark' | 'light';
  language?: string;
  timezone?: string;
  density?: 'comfortable' | 'compact' | 'spacious';
}): Promise<void> => {
  await apiClient.put('/settings/preferences', preferences);
};

// Get API keys
export const getApiKeys = async (): Promise<Array<{
  id: string;
  name: string;
  key: string;
  created_at: string;
  last_used?: string;
  status: 'active' | 'revoked';
}>> => {
  const response = await apiClient.get('/settings/api-keys');
  return response.data.data;
};

// Create new API key
export const createApiKey = async (name: string): Promise<{
  id: string;
  name: string;
  key: string;
}> => {
  const response = await apiClient.post('/settings/api-keys', { name });
  return response.data.data;
};

// Revoke API key
export const revokeApiKey = async (keyId: string): Promise<void> => {
  await apiClient.delete(`/settings/api-keys/${keyId}`);
};

// Update integration settings
export const updateIntegrationSettings = async (integration: string, settings: {
  enabled: boolean;
  config?: Record<string, any>;
}): Promise<void> => {
  await apiClient.put(`/settings/integrations/${integration}`, settings);
};

// Test webhook
export const testWebhook = async (webhookUrl: string): Promise<{ success: boolean; message: string }> => {
  const response = await apiClient.post('/settings/integrations/webhook/test', {
    url: webhookUrl,
  });
  return response.data.data;
};
