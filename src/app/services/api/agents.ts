import apiClient from './axios';
import type { ApiResponse, Agent, AgentStats, PaginationParams } from '@/app/types/api';

/**
 * Agents API Service
 * Handles all agent-related API calls
 */

// Get list of all agents with optional filters
export const getAgents = async (params?: PaginationParams & {
  status?: 'active' | 'inactive' | 'training';
  search?: string;
}): Promise<Agent[]> => {
  const response = await apiClient.get<{ agents: Agent[] }>('/agents', {
    params,
  });
  // API returns { agents: [...] }
  return response.data.agents.map(agent => ({
    ...agent,
    successRate: agent.successRate || 85, // Default success rate if not provided
  }));
};

// Get single agent by ID
export const getAgentById = async (agentId: string): Promise<Agent> => {
  const response = await apiClient.get<ApiResponse<Agent>>(`/agents/${agentId}`);
  return response.data.data;
};

// Get agent statistics
export const getAgentStats = async (agentId: string): Promise<AgentStats> => {
  const response = await apiClient.get<AgentStats>(`/agents/${agentId}/stats`);
  return response.data;
};

// Create new agent
export const createAgent = async (agentData: {
  name: string;
  type: string;
  description?: string;
  config?: Record<string, any>;
}): Promise<Agent> => {
  const response = await apiClient.post<ApiResponse<Agent>>('/agents', agentData);
  return response.data.data;
};

// Update agent
export const updateAgent = async (
  agentId: string,
  agentData: Partial<{
    name: string;
    type: string;
    description: string;
    status: 'active' | 'inactive';
    config: Record<string, any>;
  }>
): Promise<Agent> => {
  const response = await apiClient.put<ApiResponse<Agent>>(`/agents/${agentId}`, agentData);
  return response.data.data;
};

// Delete agent
export const deleteAgent = async (agentId: string): Promise<void> => {
  await apiClient.delete(`/agents/${agentId}`);
};

// Get agent performance metrics
export const getAgentMetrics = async (
  agentId: string,
  params?: {
    date_from?: string;
    date_to?: string;
  }
): Promise<{
  conversations_handled: number;
  avg_response_time: number;
  success_rate: number;
  sentiment_score: number;
  trend_data: Array<{
    date: string;
    conversations: number;
    sentiment: number;
  }>;
}> => {
  const response = await apiClient.get(`/agents/${agentId}/metrics`, {
    params,
  });
  return response.data.data;
};

// Toggle agent status (activate/deactivate)
export const toggleAgentStatus = async (
  agentId: string,
  status: 'active' | 'inactive'
): Promise<Agent> => {
  const response = await apiClient.patch<ApiResponse<Agent>>(`/agents/${agentId}/status`, {
    status,
  });
  return response.data.data;
};

// Get agent conversations with pagination
export const getAgentConversations = async (
  agentId: string,
  params?: {
    page?: number;
    limit?: number;
  }
): Promise<{ conversations: any[]; pagination: any }> => {
  const response = await apiClient.get(`/agents/${agentId}/conversations`, {
    params,
  });
  return response.data;
};
