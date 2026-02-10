# NextCognit Customer Portal - Project Summary

## Overview
A comprehensive B2B SaaS Customer Portal for managing and analyzing AI Chat Agents. Built with React, TypeScript, React Router, Recharts, and Tailwind CSS.

---

## ✅ Features Implemented (Version 1)

### 1. **Dashboard Page** (`/`)
- **KPI Cards:**
  - Total Conversations (with trend percentage)
  - Sales & Bookings count
  - Success Rate percentage
  - Average Response Time
- **Sentiment Distribution Chart** (Pie Chart)
  - Positive, Neutral, Negative breakdown
- **Top Performing Agents** (Top 3)
  - Ranked by success rate
  - Shows conversation count and performance metrics
- **Recent Alerts Section**
  - Displays conversations with negative sentiment or failed outcomes
  - Real-time monitoring of issues

### 2. **Agents Page** (`/agents`)
- **Agent List View:**
  - Search functionality by name/role
  - Filter by status (All, Active, Training, Inactive)
  - Grid layout with agent cards
  - Each card shows: name, role, status, conversation count, success rate, avg duration
- **Agent Detail Page** (`/agents/:id`)
  - Agent header with status badge
  - 4 stat cards: Total Conversations, Success Rate, Avg Duration, Active Since
  - Purpose Distribution bar chart
  - Outcome Distribution pie chart
  - Recent conversations list (last 5)

### 3. **Conversations Page** (`/conversations`)
- **Conversation List View:**
  - Search by customer name or agent name
  - Advanced filters:
    - Sentiment (Positive, Neutral, Negative)
    - Purpose (Sales, Booking, Support, Complaint)
  - Each conversation card shows:
    - Customer name, agent name, channel
    - Sentiment and outcome badges
    - Timestamp, purpose, duration
- **Conversation Detail Page** (`/conversations/:id`)
  - **Chat Transcript Section:**
    - Chat-style UI with agent/customer messages
    - Timestamps for each message
    - Visual distinction between agent and customer
  - **AI Insights Panel:**
    - "Generate/Refresh Insights" button
    - Loading state during generation
    - Displays:
      - Sentiment analysis
      - Conversation purpose
      - AI-generated summary
      - Outcome description
      - Key topics (tags)
      - Recommendations (action items)

### 4. **Reports Page** (`/reports`)
- **Advanced Filters:**
  - Date Range (Today, Last 7/30/90 days, Custom)
  - Agent selection
  - Channel (Web, Phone, Email, Chat)
  - Sentiment filter
- **Summary Statistics:**
  - 4 stat cards with trends
- **Visual Charts:**
  - Conversation Trends (Line Chart) - 7 day trend
  - Sentiment Distribution (Pie Chart)
  - Purpose Distribution (Bar Chart)
  - Outcome Distribution (Pie Chart)
- **Tabular Report:**
  - All conversations in table format
  - Columns: Customer, Agent, Purpose, Sentiment, Outcome, Duration, Date
- **Export Functionality:**
  - Export to CSV button (placeholder)
  - Export to PDF button (placeholder)

### 5. **Insights Page** (`/insights`)
- **Summary Cards:**
  - High Priority count
  - Recommendations count
  - Positive Trends count
- **AI-Generated Insights:**
  - Categorized by priority (High, Medium, Low)
  - Each insight shows:
    - Type (Trend, Recommendation, Alert)
    - Title and description
    - Impact level
    - Category tag
  - Refresh button to regenerate insights

### 6. **Layout & Navigation**
- **Sidebar Navigation:**
  - Dashboard, Agents, Conversations, Reports, Insights
  - Active state highlighting
  - NextCognit branding
  - User profile section
- **Top Bar:**
  - Current date/time display
  - Notification bell (with alert indicator)
  - Settings icon

### 7. **Design System**
- **Color Palette:**
  - Background: `#0f1729` (dark navy)
  - Card Background: `#1d283a`
  - Primary: `#3364eb` (blue)
  - Success: `#10b981` (green)
  - Warning: `#fbbd23` (yellow)
  - Error: `#ef4444` (red)
  - Text Primary: `#f8fafc`
  - Text Secondary: `#94a3b8`
- **Components:**
  - Reusable KPI cards
  - Consistent card styling
  - Badge components for status/sentiment/outcome
  - Responsive layouts

---

## 📊 Current Data Structure (Mock Data)

### Agent Model
```typescript
interface Agent {
  id: string;
  name: string;
  role: string;
  status: "active" | "inactive" | "training";
  conversationCount: number;
  successRate: number; // percentage
  avgDuration: string; // e.g., "4m 32s"
  avatar?: string; // optional
}
```

### Conversation Model
```typescript
interface Conversation {
  id: string;
  agentId: string;
  agentName: string;
  customerName: string;
  sentiment: "positive" | "neutral" | "negative";
  purpose: "sales" | "booking" | "support" | "complaint";
  outcome: "success" | "failed" | "pending";
  duration: string; // e.g., "4m 32s"
  timestamp: string; // ISO 8601 format
  channel: "web" | "phone" | "email" | "chat";
  messages?: Message[];
  aiInsights?: AIInsights;
}
```

### Message Model
```typescript
interface Message {
  id: string;
  role: "agent" | "customer";
  content: string;
  timestamp: string; // time only, e.g., "10:15:00"
}
```

### AI Insights Model
```typescript
interface AIInsights {
  sentiment: "positive" | "neutral" | "negative";
  purpose: string; // detailed purpose description
  summary: string; // AI-generated summary
  outcome: string; // outcome description
  keyTopics: string[]; // array of topic tags
  recommendations?: string[]; // optional action items
}
```

### Dashboard Stats Model
```typescript
interface DashboardStats {
  totalConversations: number;
  conversationsTrend: string; // e.g., "+12.5%"
  totalSalesBookings: number;
  salesTrend: string;
  successRate: number; // percentage
  successTrend: string;
  avgResponseTime: string; // e.g., "2.3s"
  responseTrend: string;
}
```

### Chart Data Models
```typescript
// Sentiment Distribution
interface SentimentData {
  name: "Positive" | "Neutral" | "Negative";
  value: number;
  percentage: number;
}

// Purpose Distribution
interface PurposeData {
  name: "Sales" | "Booking" | "Support" | "Complaint";
  value: number;
}

// Outcome Distribution
interface OutcomeData {
  name: "Success" | "Failed" | "Pending";
  value: number;
}

// Trend Data (for Reports)
interface TrendData {
  day: string; // e.g., "Mon", "Tue"
  conversations: number;
  success: number;
}
```

### Insights Model
```typescript
interface Insight {
  id: string;
  type: "trend" | "recommendation" | "alert";
  title: string;
  description: string;
  impact: "high" | "medium" | "low";
  category: string; // e.g., "Performance", "Efficiency", "Quality"
}
```

---

## 🔌 Required Backend APIs

### Authentication & Authorization

#### 1. **POST /api/auth/login**
**Request:**
```json
{
  "email": "admin@nextcognit.com",
  "password": "password123"
}
```
**Response:**
```json
{
  "token": "jwt_token_here",
  "user": {
    "id": "user_123",
    "name": "Admin User",
    "email": "admin@nextcognit.com",
    "role": "admin",
    "organizationId": "org_456"
  }
}
```

#### 2. **POST /api/auth/logout**
**Request:**
```json
{
  "token": "jwt_token_here"
}
```
**Response:**
```json
{
  "success": true
}
```

#### 3. **GET /api/auth/me**
**Headers:** `Authorization: Bearer {token}`
**Response:**
```json
{
  "id": "user_123",
  "name": "Admin User",
  "email": "admin@nextcognit.com",
  "role": "admin",
  "organizationId": "org_456"
}
```

---

### Dashboard APIs

#### 4. **GET /api/dashboard/stats**
**Headers:** `Authorization: Bearer {token}`
**Query Parameters:**
- `startDate` (optional): ISO 8601 date
- `endDate` (optional): ISO 8601 date
- `agentId` (optional): filter by agent

**Response:**
```json
{
  "totalConversations": 4242,
  "conversationsTrend": "+12.5%",
  "totalSalesBookings": 1847,
  "salesTrend": "+8.3%",
  "successRate": 84.7,
  "successTrend": "+3.2%",
  "avgResponseTime": "2.3s",
  "responseTrend": "-15.2%"
}
```

#### 5. **GET /api/dashboard/sentiment-distribution**
**Headers:** `Authorization: Bearer {token}`
**Query Parameters:**
- `startDate` (optional)
- `endDate` (optional)

**Response:**
```json
{
  "data": [
    { "name": "Positive", "value": 2547, "percentage": 60 },
    { "name": "Neutral", "value": 1273, "percentage": 30 },
    { "name": "Negative", "value": 422, "percentage": 10 }
  ]
}
```

#### 6. **GET /api/dashboard/top-agents**
**Headers:** `Authorization: Bearer {token}`
**Query Parameters:**
- `limit` (default: 3)
- `sortBy` (default: "successRate")

**Response:**
```json
{
  "agents": [
    {
      "id": "agent_1",
      "name": "Sales Agent Pro",
      "role": "Sales & Lead Conversion",
      "status": "active",
      "conversationCount": 1247,
      "successRate": 87.5,
      "avgDuration": "4m 32s"
    }
  ]
}
```

#### 7. **GET /api/dashboard/alerts**
**Headers:** `Authorization: Bearer {token}`
**Query Parameters:**
- `limit` (default: 10)

**Response:**
```json
{
  "alerts": [
    {
      "id": "conv_001",
      "agentId": "agent_1",
      "agentName": "Sales Agent Pro",
      "customerName": "John Doe",
      "sentiment": "negative",
      "purpose": "complaint",
      "outcome": "failed",
      "duration": "8m 12s",
      "timestamp": "2026-02-02T10:15:00Z",
      "channel": "phone"
    }
  ]
}
```

---

### Agent APIs

#### 8. **GET /api/agents**
**Headers:** `Authorization: Bearer {token}`
**Query Parameters:**
- `search` (optional): search by name or role
- `status` (optional): "active" | "inactive" | "training"
- `page` (default: 1)
- `limit` (default: 20)

**Response:**
```json
{
  "agents": [
    {
      "id": "agent_1",
      "name": "Sales Agent Pro",
      "role": "Sales & Lead Conversion",
      "status": "active",
      "conversationCount": 1247,
      "successRate": 87.5,
      "avgDuration": "4m 32s",
      "avatar": "https://example.com/avatar.jpg"
    }
  ],
  "pagination": {
    "page": 1,
    "limit": 20,
    "total": 5,
    "totalPages": 1
  }
}
```

#### 9. **GET /api/agents/:id**
**Headers:** `Authorization: Bearer {token}`
**Response:**
```json
{
  "id": "agent_1",
  "name": "Sales Agent Pro",
  "role": "Sales & Lead Conversion",
  "status": "active",
  "conversationCount": 1247,
  "successRate": 87.5,
  "avgDuration": "4m 32s",
  "createdAt": "2026-01-15T00:00:00Z",
  "lastActiveAt": "2026-02-02T11:25:55Z",
  "avatar": "https://example.com/avatar.jpg"
}
```

#### 10. **GET /api/agents/:id/stats**
**Headers:** `Authorization: Bearer {token}`
**Query Parameters:**
- `startDate` (optional)
- `endDate` (optional)

**Response:**
```json
{
  "totalConversations": 1247,
  "successRate": 87.5,
  "avgDuration": "4m 32s",
  "activeSince": "2026-01-15T00:00:00Z",
  "purposeDistribution": [
    { "name": "Sales", "value": 523 },
    { "name": "Booking", "value": 385 },
    { "name": "Support", "value": 302 },
    { "name": "Complaint", "value": 37 }
  ],
  "outcomeDistribution": [
    { "name": "Success", "value": 1091 },
    { "name": "Failed", "value": 123 },
    { "name": "Pending", "value": 33 }
  ]
}
```

#### 11. **GET /api/agents/:id/conversations**
**Headers:** `Authorization: Bearer {token}`
**Query Parameters:**
- `page` (default: 1)
- `limit` (default: 10)

**Response:**
```json
{
  "conversations": [
    {
      "id": "conv_001",
      "customerName": "John Doe",
      "sentiment": "positive",
      "purpose": "sales",
      "outcome": "success",
      "duration": "4m 32s",
      "timestamp": "2026-02-02T10:15:00Z",
      "channel": "web"
    }
  ],
  "pagination": {
    "page": 1,
    "limit": 10,
    "total": 1247,
    "totalPages": 125
  }
}
```

---

### Conversation APIs

#### 12. **GET /api/conversations**
**Headers:** `Authorization: Bearer {token}`
**Query Parameters:**
- `search` (optional): search by customer name or agent name
- `sentiment` (optional): "positive" | "neutral" | "negative"
- `purpose` (optional): "sales" | "booking" | "support" | "complaint"
- `outcome` (optional): "success" | "failed" | "pending"
- `agentId` (optional)
- `channel` (optional): "web" | "phone" | "email" | "chat"
- `startDate` (optional)
- `endDate` (optional)
- `page` (default: 1)
- `limit` (default: 20)

**Response:**
```json
{
  "conversations": [
    {
      "id": "conv_001",
      "agentId": "agent_1",
      "agentName": "Sales Agent Pro",
      "customerName": "John Doe",
      "sentiment": "positive",
      "purpose": "sales",
      "outcome": "success",
      "duration": "4m 32s",
      "timestamp": "2026-02-02T10:15:00Z",
      "channel": "web"
    }
  ],
  "pagination": {
    "page": 1,
    "limit": 20,
    "total": 4242,
    "totalPages": 213
  }
}
```

#### 13. **GET /api/conversations/:id**
**Headers:** `Authorization: Bearer {token}`
**Response:**
```json
{
  "id": "conv_001",
  "agentId": "agent_1",
  "agentName": "Sales Agent Pro",
  "customerName": "John Doe",
  "customerEmail": "john@example.com",
  "sentiment": "positive",
  "purpose": "sales",
  "outcome": "success",
  "duration": "4m 32s",
  "timestamp": "2026-02-02T10:15:00Z",
  "channel": "web",
  "messages": [
    {
      "id": "msg_1",
      "role": "agent",
      "content": "Hello! Welcome to our store.",
      "timestamp": "10:15:00"
    },
    {
      "id": "msg_2",
      "role": "customer",
      "content": "Hi, I'm looking for a laptop.",
      "timestamp": "10:15:30"
    }
  ],
  "aiInsights": null
}
```

#### 14. **POST /api/conversations/:id/generate-insights**
**Headers:** `Authorization: Bearer {token}`
**Request:** (empty body)
**Response:**
```json
{
  "aiInsights": {
    "sentiment": "positive",
    "purpose": "Product inquiry leading to potential purchase",
    "summary": "Customer inquired about laptops for programming and design work with a $1500 budget. Agent recommended MacBook Pro and Dell XPS.",
    "outcome": "Successfully engaged customer with relevant recommendations",
    "keyTopics": ["laptop", "programming", "design", "budget"],
    "recommendations": [
      "Follow up with detailed specs comparison",
      "Offer financing options"
    ]
  },
  "generatedAt": "2026-02-02T11:30:00Z"
}
```

---

### Reports APIs

#### 15. **GET /api/reports/trend**
**Headers:** `Authorization: Bearer {token}`
**Query Parameters:**
- `startDate` (required)
- `endDate` (required)
- `agentId` (optional)
- `channel` (optional)

**Response:**
```json
{
  "data": [
    {
      "day": "Mon",
      "date": "2026-01-27",
      "conversations": 587,
      "success": 498
    },
    {
      "day": "Tue",
      "date": "2026-01-28",
      "conversations": 612,
      "success": 523
    }
  ]
}
```

#### 16. **GET /api/reports/sentiment**
**Headers:** `Authorization: Bearer {token}`
**Query Parameters:**
- `startDate` (optional)
- `endDate` (optional)
- `agentId` (optional)

**Response:**
```json
{
  "data": [
    { "name": "Positive", "value": 2547, "percentage": 60 },
    { "name": "Neutral", "value": 1273, "percentage": 30 },
    { "name": "Negative", "value": 422, "percentage": 10 }
  ]
}
```

#### 17. **GET /api/reports/purpose**
**Headers:** `Authorization: Bearer {token}`
**Query Parameters:**
- `startDate` (optional)
- `endDate` (optional)
- `agentId` (optional)

**Response:**
```json
{
  "data": [
    { "name": "Sales", "value": 1523 },
    { "name": "Booking", "value": 1185 },
    { "name": "Support", "value": 1102 },
    { "name": "Complaint", "value": 432 }
  ]
}
```

#### 18. **GET /api/reports/outcome**
**Headers:** `Authorization: Bearer {token}`
**Query Parameters:**
- `startDate` (optional)
- `endDate` (optional)
- `agentId` (optional)

**Response:**
```json
{
  "data": [
    { "name": "Success", "value": 3589 },
    { "name": "Failed", "value": 423 },
    { "name": "Pending", "value": 230 }
  ]
}
```

#### 19. **GET /api/reports/detailed**
**Headers:** `Authorization: Bearer {token}`
**Query Parameters:**
- `startDate` (optional)
- `endDate` (optional)
- `agentId` (optional)
- `channel` (optional)
- `sentiment` (optional)
- `purpose` (optional)
- `page` (default: 1)
- `limit` (default: 50)

**Response:**
```json
{
  "conversations": [
    {
      "id": "conv_001",
      "customerName": "John Doe",
      "agentName": "Sales Agent Pro",
      "purpose": "sales",
      "sentiment": "positive",
      "outcome": "success",
      "duration": "4m 32s",
      "timestamp": "2026-02-02T10:15:00Z"
    }
  ],
  "pagination": {
    "page": 1,
    "limit": 50,
    "total": 4242,
    "totalPages": 85
  }
}
```

#### 20. **POST /api/reports/export**
**Headers:** `Authorization: Bearer {token}`
**Request:**
```json
{
  "format": "csv" | "pdf",
  "startDate": "2026-01-01T00:00:00Z",
  "endDate": "2026-02-02T23:59:59Z",
  "agentId": "agent_1",
  "filters": {
    "channel": "web",
    "sentiment": "positive"
  }
}
```
**Response:**
```json
{
  "downloadUrl": "https://cdn.example.com/reports/report_123.csv",
  "expiresAt": "2026-02-03T11:30:00Z",
  "fileSize": 1024567
}
```

---

### Insights APIs

#### 21. **GET /api/insights**
**Headers:** `Authorization: Bearer {token}`
**Query Parameters:**
- `startDate` (optional)
- `endDate` (optional)
- `impact` (optional): "high" | "medium" | "low"
- `type` (optional): "trend" | "recommendation" | "alert"

**Response:**
```json
{
  "insights": [
    {
      "id": "insight_1",
      "type": "trend",
      "title": "Sales conversations increasing on weekends",
      "description": "Data shows a 23% increase in sales-related conversations during weekends...",
      "impact": "high",
      "category": "Performance",
      "generatedAt": "2026-02-02T11:00:00Z"
    }
  ],
  "generatedAt": "2026-02-02T11:00:00Z"
}
```

#### 22. **POST /api/insights/refresh**
**Headers:** `Authorization: Bearer {token}`
**Request:** (empty body)
**Response:**
```json
{
  "insights": [
    {
      "id": "insight_1",
      "type": "trend",
      "title": "Sales conversations increasing on weekends",
      "description": "...",
      "impact": "high",
      "category": "Performance",
      "generatedAt": "2026-02-02T11:30:00Z"
    }
  ],
  "generatedAt": "2026-02-02T11:30:00Z"
}
```

---

## 🔔 Real-time Features (Optional - WebSocket/SSE)

### 23. **WebSocket: /ws/notifications**
**Connection:** `wss://api.example.com/ws/notifications?token={jwt_token}`

**Events Received:**
```json
{
  "type": "new_conversation",
  "data": {
    "id": "conv_123",
    "agentId": "agent_1",
    "customerName": "Jane Doe",
    "timestamp": "2026-02-02T11:30:00Z"
  }
}
```

```json
{
  "type": "sentiment_alert",
  "data": {
    "conversationId": "conv_123",
    "sentiment": "negative",
    "agentId": "agent_1",
    "timestamp": "2026-02-02T11:30:00Z"
  }
}
```

```json
{
  "type": "conversation_updated",
  "data": {
    "id": "conv_123",
    "outcome": "success",
    "timestamp": "2026-02-02T11:35:00Z"
  }
}
```

---

## 🗃️ Database Schema Requirements

### Users Table
```sql
CREATE TABLE users (
  id VARCHAR(255) PRIMARY KEY,
  organization_id VARCHAR(255) NOT NULL,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  password_hash VARCHAR(255) NOT NULL,
  role VARCHAR(50) NOT NULL, -- 'admin', 'manager', 'viewer'
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (organization_id) REFERENCES organizations(id)
);
```

### Organizations Table
```sql
CREATE TABLE organizations (
  id VARCHAR(255) PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  industry VARCHAR(100),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
```

### Agents Table
```sql
CREATE TABLE agents (
  id VARCHAR(255) PRIMARY KEY,
  organization_id VARCHAR(255) NOT NULL,
  name VARCHAR(255) NOT NULL,
  role VARCHAR(255) NOT NULL,
  status VARCHAR(50) NOT NULL, -- 'active', 'inactive', 'training'
  avatar_url VARCHAR(500),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (organization_id) REFERENCES organizations(id)
);
```

### Conversations Table
```sql
CREATE TABLE conversations (
  id VARCHAR(255) PRIMARY KEY,
  organization_id VARCHAR(255) NOT NULL,
  agent_id VARCHAR(255) NOT NULL,
  customer_name VARCHAR(255) NOT NULL,
  customer_email VARCHAR(255),
  customer_phone VARCHAR(50),
  sentiment VARCHAR(50), -- 'positive', 'neutral', 'negative'
  purpose VARCHAR(50), -- 'sales', 'booking', 'support', 'complaint'
  outcome VARCHAR(50), -- 'success', 'failed', 'pending'
  duration_seconds INT,
  channel VARCHAR(50), -- 'web', 'phone', 'email', 'chat'
  started_at TIMESTAMP NOT NULL,
  ended_at TIMESTAMP,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (organization_id) REFERENCES organizations(id),
  FOREIGN KEY (agent_id) REFERENCES agents(id)
);
```

### Messages Table
```sql
CREATE TABLE messages (
  id VARCHAR(255) PRIMARY KEY,
  conversation_id VARCHAR(255) NOT NULL,
  role VARCHAR(50) NOT NULL, -- 'agent', 'customer'
  content TEXT NOT NULL,
  timestamp TIMESTAMP NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (conversation_id) REFERENCES conversations(id) ON DELETE CASCADE
);
```

### AI Insights Table
```sql
CREATE TABLE ai_insights (
  id VARCHAR(255) PRIMARY KEY,
  conversation_id VARCHAR(255) UNIQUE NOT NULL,
  sentiment VARCHAR(50),
  purpose TEXT,
  summary TEXT,
  outcome TEXT,
  key_topics JSON, -- Array of strings
  recommendations JSON, -- Array of strings
  generated_at TIMESTAMP NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (conversation_id) REFERENCES conversations(id) ON DELETE CASCADE
);
```

### Insights Table
```sql
CREATE TABLE insights (
  id VARCHAR(255) PRIMARY KEY,
  organization_id VARCHAR(255) NOT NULL,
  type VARCHAR(50) NOT NULL, -- 'trend', 'recommendation', 'alert'
  title VARCHAR(500) NOT NULL,
  description TEXT NOT NULL,
  impact VARCHAR(50) NOT NULL, -- 'high', 'medium', 'low'
  category VARCHAR(100) NOT NULL,
  generated_at TIMESTAMP NOT NULL,
  expires_at TIMESTAMP, -- Insights can be time-sensitive
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (organization_id) REFERENCES organizations(id)
);
```

---

## 🔐 Authentication & Authorization

### Required:
1. **JWT-based authentication**
   - Access token (short-lived, 15-30 minutes)
   - Refresh token (long-lived, 7-30 days)

2. **Role-based access control (RBAC)**
   - **Admin**: Full access to all features
   - **Manager**: View and export reports, manage agents
   - **Viewer**: View-only access to dashboards and reports

3. **Organization isolation**
   - All queries must filter by `organization_id` from JWT token
   - Users can only see data from their own organization

---

## 🚀 Deployment & Environment Variables

### Frontend Environment Variables
```env
VITE_API_BASE_URL=https://api.nextcognit.com
VITE_WS_URL=wss://api.nextcognit.com/ws
VITE_APP_VERSION=1.0.0
```

### Backend Environment Variables (Examples)
```env
DATABASE_URL=postgresql://user:password@localhost:5432/nextcognit
REDIS_URL=redis://localhost:6379
JWT_SECRET=your_jwt_secret_key
JWT_EXPIRY=30m
REFRESH_TOKEN_EXPIRY=7d
AI_INSIGHTS_API_URL=https://ai-service.example.com
AI_INSIGHTS_API_KEY=your_ai_api_key
```

---

## 📈 Performance Considerations

### Caching Strategy
1. **Dashboard Stats**: Cache for 5-10 minutes
2. **Agent List**: Cache for 15 minutes
3. **Sentiment/Purpose Distribution**: Cache for 10 minutes
4. **Insights**: Cache for 30 minutes

### Pagination
- Default page size: 20 items
- Maximum page size: 100 items
- Use cursor-based pagination for large datasets

### Database Indexes
```sql
-- Conversations indexes
CREATE INDEX idx_conversations_org_id ON conversations(organization_id);
CREATE INDEX idx_conversations_agent_id ON conversations(agent_id);
CREATE INDEX idx_conversations_started_at ON conversations(started_at);
CREATE INDEX idx_conversations_sentiment ON conversations(sentiment);
CREATE INDEX idx_conversations_purpose ON conversations(purpose);
CREATE INDEX idx_conversations_outcome ON conversations(outcome);

-- Messages indexes
CREATE INDEX idx_messages_conversation_id ON messages(conversation_id);
CREATE INDEX idx_messages_timestamp ON messages(timestamp);

-- Agents indexes
CREATE INDEX idx_agents_org_id ON agents(organization_id);
CREATE INDEX idx_agents_status ON agents(status);
```

---

## 🎯 AI Integration Requirements

### AI Insights Generation
The backend needs to integrate with an AI service (e.g., OpenAI, custom model) to generate:

1. **Sentiment Analysis**
   - Analyze conversation tone and emotion
   - Return: "positive", "neutral", or "negative"

2. **Conversation Summary**
   - Generate concise summary of conversation
   - 2-3 sentences max

3. **Purpose Detection**
   - Determine conversation intent
   - Return detailed purpose description

4. **Outcome Analysis**
   - Analyze conversation result
   - Return outcome description

5. **Key Topics Extraction**
   - Extract main topics/keywords
   - Return array of topic strings

6. **Recommendations**
   - Generate actionable recommendations
   - Return array of suggestion strings

7. **Business Insights**
   - Analyze conversation patterns
   - Generate trends, alerts, and recommendations
   - Should run periodically (e.g., hourly or daily)

---

## 📝 Additional Notes

### Error Handling
All API responses should follow this structure:

**Success Response:**
```json
{
  "success": true,
  "data": { ... }
}
```

**Error Response:**
```json
{
  "success": false,
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Invalid request parameters",
    "details": {
      "field": "email",
      "reason": "Invalid email format"
    }
  }
}
```

### Rate Limiting
- Implement rate limiting per user/organization
- Suggested: 100 requests per minute for regular endpoints
- AI Insights generation: 10 requests per minute (more expensive)

### Webhooks (Future Enhancement)
Consider supporting webhooks for:
- New conversation created
- Conversation outcome changed
- Negative sentiment detected
- AI insights generated

---

## 🛠️ Technology Stack

### Frontend
- **Framework**: React 18.3.1
- **Routing**: React Router 7.13.0
- **Charts**: Recharts 2.15.2
- **Styling**: Tailwind CSS 4.1.12
- **Icons**: Lucide React 0.487.0
- **Build Tool**: Vite 6.3.5

### Backend (Suggested)
- **Runtime**: Node.js (v18+) or Python 3.10+
- **Framework**: Express.js / Fastify / Django / FastAPI
- **Database**: PostgreSQL 14+ or MongoDB 6+
- **Cache**: Redis 7+
- **Queue**: Bull (Node.js) or Celery (Python) for background jobs
- **AI Service**: OpenAI API, Anthropic Claude, or custom model

---

## ✅ Checklist for Backend Developer

- [ ] Set up database with all required tables
- [ ] Implement authentication (JWT-based)
- [ ] Create all 22 REST API endpoints
- [ ] Add organization-based data isolation
- [ ] Implement role-based access control
- [ ] Set up AI integration for insights generation
- [ ] Add pagination to list endpoints
- [ ] Implement caching strategy
- [ ] Add database indexes for performance
- [ ] Set up error handling and logging
- [ ] Implement rate limiting
- [ ] Create API documentation (Swagger/OpenAPI)
- [ ] Set up CORS for frontend domain
- [ ] Deploy backend to production
- [ ] Provide API base URL and credentials to frontend team

---

**Document Version**: 1.0  
**Last Updated**: February 2, 2026  
**Contact**: Frontend Team @ NextCognit
