import apiClient from './axios';
import type { ApiResponse, Conversation, ConversationDetail, ConversationFilters, ConversationInsightsResponse, Message } from '@/app/types/api';

/**
 * Conversations API Service
 * Handles all conversation-related API calls
 */

// Get list of conversations with filters
export const getConversations = async (
  filters?: ConversationFilters
): Promise<ApiResponse<Conversation[]>> => {
  const response = await apiClient.get<ApiResponse<Conversation[]>>('/conversations', {
    params: filters,
  });
  return response.data;
};

// Get single conversation with full details
export const getConversationById = async (conversationId: string): Promise<any> => {
  const response = await apiClient.get(`/conversations/${conversationId}`);
  return response.data;
};

// Generate AI insights for a conversation
export const generateConversationInsights = async (
  conversationId: string
): Promise<ConversationInsightsResponse> => {
  const response = await apiClient.post(`/conversations/${conversationId}/insights`);
  return response.data;
};

// Get conversation messages
export const getConversationMessages = async (
  conversationId: string,
  params?: {
    limit?: number;
    offset?: number;
  }
): Promise<Message[]> => {
  const response = await apiClient.get<ApiResponse<Message[]>>(`/conversations/${conversationId}/messages`, {
    params,
  });
  return response.data.data;
};

// Send message in conversation (if live chat support)
export const sendMessage = async (
  conversationId: string,
  message: string
): Promise<Message> => {
  const response = await apiClient.post<ApiResponse<Message>>(`/conversations/${conversationId}/messages`, {
    message,
  });
  return response.data.data;
};

// Update conversation status
export const updateConversationStatus = async (
  conversationId: string,
  status: 'completed' | 'ongoing' | 'escalated' | 'failed'
): Promise<Conversation> => {
  const response = await apiClient.patch<ApiResponse<Conversation>>(`/conversations/${conversationId}/status`, {
    status,
  });
  return response.data.data;
};

// Add tags to conversation
export const addConversationTags = async (
  conversationId: string,
  tags: string[]
): Promise<Conversation> => {
  const response = await apiClient.post<ApiResponse<Conversation>>(`/conversations/${conversationId}/tags`, {
    tags,
  });
  return response.data.data;
};

// Get AI insights for a conversation
export const getConversationInsights = async (
  conversationId: string
): Promise<{
  summary?: string;
  key_topics?: string[];
  sentiment_analysis?: string;
  suggested_actions?: string[];
  customer_intent?: string;
  resolution_quality?: number;
}> => {
  const response = await apiClient.get(`/conversations/${conversationId}/insights`);
  return response.data.data;
};

// Export conversations
export const exportConversations = async (
  filters?: ConversationFilters,
  format: 'csv' | 'json' | 'pdf' = 'csv'
): Promise<Blob> => {
  const response = await apiClient.get('/conversations/export', {
    params: { ...filters, format },
    responseType: 'blob',
  });
  return response.data;
};

// Get conversation statistics
export const getConversationStats = async (params?: {
  date_from?: string;
  date_to?: string;
  agent_id?: string;
}): Promise<{
  total: number;
  by_status: Record<string, number>;
  by_sentiment: Record<string, number>;
  by_channel: Record<string, number>;
  avg_duration: number;
  avg_messages: number;
}> => {
  const response = await apiClient.get('/conversations/stats', {
    params,
  });
  return response.data.data;
};
