// API Response Types

export interface Agent {
  id: string;
  name: string;
  role: string;
  status: 'active' | 'inactive' | 'training';
  createdAt: string;
  conversationCount: number;
  totalMessages: number;
  avgDuration: string;
  avgMessagesPerConv: number;
  lastActiveAt: string;
  successRate?: number; // Calculated or default
}

export interface AgentStats {
  conversationCount: number;
  totalMessages: number;
  avgDuration: string;
  avgMessagesPerConv: number;
  lastActiveAt: string;
  stats: {
    today: {
      conversations: number;
      messages: number;
    };
    thisWeek: {
      conversations: number;
      messages: number;
    };
    thisMonth: {
      conversations: number;
      messages: number;
    };
  };
  totalAnalyzed: number;
  successRate: number;
  sentimentDistribution: Record<string, number>;
  purposeDistribution: Record<string, number>;
  outcomeDistribution: Record<string, number>;
}

export interface Conversation {
  id: string;
  agentId: string;
  agentName: string;
  customerName: string;
  duration: string;
  timestamp: string;
  channel: 'web' | 'whatsapp' | 'phone' | 'email';
  messageCount: number;
  sentiment: 'positive' | 'neutral' | 'negative' | null;
  purposeCategory: string | null;
  outcomeCategory: string | null;
}

export interface Message {
  id: string;
  role: 'agent' | 'customer';
  content: string;
  timestamp: string;
}

export interface AiInsights {
  sentiment: 'positive' | 'neutral' | 'negative';
  purpose: string;
  purposeCategory: string;
  summary: string;
  outcome: string;
  outcomeCategory: string;
  keyTopics: string[];
  recommendations: string[];
}

export interface ConversationInsightsResponse {
  success: boolean;
  cached: boolean;
  generatedAt: string;
  aiInsights: AiInsights;
}

export interface ConversationDetail {
  id: string;
  agentId: string;
  agentName: string;
  customerName: string;
  duration: string;
  timestamp: string;
  endedAt: string;
  channel: 'web' | 'whatsapp' | 'phone' | 'email';
  messageCount: number;
  messages: Message[];
  // Optional fields that may come from navigation state
  purposeCategory?: string | null;
  sentiment?: string | null;
  outcomeCategory?: string | null;
}

export interface DashboardMetrics {
  total_conversations: number;
  active_agents: number;
  avg_response_time: number;
  customer_satisfaction: number;
  total_conversations_change: number;
  active_agents_change: number;
  avg_response_time_change: number;
  customer_satisfaction_change: number;
}

export interface SentimentData {
  date: string;
  positive: number;
  neutral: number;
  negative: number;
}

export interface Alert {
  id: string;
  type: 'error' | 'warning' | 'info';
  message: string;
  agent_name?: string;
  timestamp: string;
  resolved?: boolean;
}

export interface Report {
  id: string;
  name: string;
  type: string;
  created_at: string;
  created_by: string;
  filters?: Record<string, any>;
  data?: any;
}

export interface ReportData {
  metrics: {
    total_conversations: number;
    avg_sentiment_score: number;
    avg_response_time: number;
    success_rate: number;
  };
  conversations_by_channel: Array<{
    channel: string;
    count: number;
  }>;
  sentiment_trend: Array<{
    date: string;
    positive: number;
    neutral: number;
    negative: number;
  }>;
  top_agents: Array<{
    agent_name: string;
    conversations: number;
    success_rate: number;
  }>;
}

export interface Insight {
  id: string;
  title: string;
  category: 'performance' | 'customer_behavior' | 'operational' | 'revenue';
  description: string;
  impact: 'high' | 'medium' | 'low';
  metric_change?: number;
  recommendations: string[];
  created_at: string;
  status?: 'new' | 'viewed' | 'actioned';
}

export interface Notification {
  id: string;
  title: string;
  message: string;
  type: 'info' | 'warning' | 'error' | 'success';
  read: boolean;
  created_at: string;
  action_url?: string;
}

// Updated User Profile to match actual API response
export interface UserProfile {
  id: string;
  name: string;
  email: string;
  organizationId: string;
  organizationName: string;
}

// API Request Types
export interface LoginRequest {
  email: string;
  password: string;
}

// Updated Login Response to match actual API response
export interface LoginResponse {
  token: string;
  user: UserProfile;
}

export interface PaginationParams {
  page?: number;
  limit?: number;
  sort_by?: string;
  order?: 'asc' | 'desc';
}

export interface ConversationFilters extends PaginationParams {
  agent_id?: string;
  status?: string;
  sentiment?: string;
  channel?: string;
  date_from?: string;
  date_to?: string;
  search?: string;
}

export interface ReportFilters extends PaginationParams {
  agent_id?: string;
  date_from?: string;
  date_to?: string;
  channel?: string;
  sentiment?: string;
}

export interface DashboardStats {
  totalConversations: number;
  totalMessages: number;
  avgDuration: string;
  activeToday: number;
  activeThisWeek: number;
  topAgents: Array<{
    id: string;
    name: string;
    conversationCount: number;
  }>;
}

export interface SentimentDistribution {
  distribution: Record<string, number>;
  total: number;
  percentages: Record<string, number>;
}

export interface TopAgent extends Agent {
  avgMessagesPerConv: number;
}

export interface TopAgentsResponse {
  topAgents: TopAgent[];
}

export interface Alert {
  id: string;
  type: 'error' | 'warning' | 'info';
  message: string;
  timestamp: string;
  resolved?: boolean;
}

export interface AlertsResponse {
  alerts: Alert[];
}

// API Response Wrapper
export interface ApiResponse<T> {
  success?: boolean;
  data?: T;
  message?: string;
  meta?: {
    page?: number;
    limit?: number;
    total?: number;
    total_pages?: number;
  };
}

export interface ApiError {
  success: false;
  error: string;
  message: string;
  status_code: number;
}
