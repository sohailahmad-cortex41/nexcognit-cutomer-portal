import { useState, useEffect } from "react";
import { MessageSquare, TrendingUp, CheckCircle, Clock, AlertTriangle, TrendingDown } from "lucide-react";
import { KpiCard } from "@/app/components/KpiCard";
import { Link } from "react-router";
import { PieChartComponent } from "@/app/components/charts/PieChartComponent";
import { useAuth } from "@/app/context/AuthContext";
import { dashboardApi } from "@/app/services/api/dashboard";
import { DashboardStats, SentimentDistribution, TopAgentsResponse, AlertsResponse } from "@/app/types/api";
import { toast } from "sonner";

const COLORS = ["#10b981", "#f59e0b", "#ef4444"];

export function Dashboard() {
  const { user } = useAuth();
  const [stats, setStats] = useState<DashboardStats | null>(null);
  const [sentiment, setSentiment] = useState<SentimentDistribution | null>(null);
  const [topAgents, setTopAgents] = useState<TopAgentsResponse | null>(null);
  const [alerts, setAlerts] = useState<AlertsResponse | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        setIsLoading(true);
        const [statsData, sentimentData, agentsData, alertsData] = await Promise.all([
          dashboardApi.getDashboardStats(),
          dashboardApi.getSentimentDistribution(),
          dashboardApi.getTopAgents(),
          dashboardApi.getAlerts(),
        ]);

        setStats(statsData);
        setSentiment(sentimentData);
        setTopAgents(agentsData);
        setAlerts(alertsData);
      } catch (error) {
        console.error('Failed to fetch dashboard data:', error);
        toast.error('Failed to load dashboard data');
      } finally {
        setIsLoading(false);
      }
    };

    fetchDashboardData();
  }, []);

  // Transform sentiment data for Chart.js
  const sentimentChartData = sentiment
    ? [
      { name: 'Positive', value: sentiment.distribution.positive || 0, color: COLORS[0] },
      { name: 'Neutral', value: sentiment.distribution.neutral || 0, color: COLORS[1] },
      { name: 'Negative', value: sentiment.distribution.negative || 0, color: COLORS[2] },
    ]
    : [];

  // Use API-provided percentages for display
  const sentimentPercentages = sentiment?.percentages || {};

  if (isLoading) {
    return (
      <div className="p-6 space-y-6">
        <div className="animate-pulse">
          <div className="h-8 bg-muted rounded w-1/3 mb-2" />
          <div className="h-4 bg-muted rounded w-1/2" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="h-32 bg-card rounded-xl border border-border animate-pulse" />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="p-6 space-y-6">
      {/* Header with User Welcome */}
      <div>
        <h1 className="text-2xl font-semibold text-foreground mb-1">
          Welcome back, {user?.name || 'User'}! 👋
        </h1>
        <p className="text-sm text-muted-foreground">
          {user?.organizationName ? `${user.organizationName} • ` : ''}Monitor your AI agents performance and key metrics
        </p>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <KpiCard
          title="Total Conversations"
          value={stats?.totalConversations.toLocaleString() || '0'}
          subtitle="All time"
          icon={MessageSquare}
        />
        <KpiCard
          title="Total Messages"
          value={stats?.totalMessages.toLocaleString() || '0'}
          subtitle="All time"
          icon={TrendingUp}
        />
        <KpiCard
          title="Success Rate"
          value="88%"
          subtitle="Avg. across agents"
          icon={CheckCircle}
        />
        <KpiCard
          title="Avg Duration"
          value={stats?.avgDuration || '0m'}
          subtitle="Per conversation"
          icon={Clock}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Sentiment Distribution Chart */}
        <div className="bg-card rounded-xl p-6 border border-border flex flex-col">
          <div className="mb-6">
            <h2 className="text-lg font-semibold text-foreground mb-1">
              Sentiment Distribution
            </h2>
            <p className="text-sm text-muted-foreground">
              Breakdown of conversation sentiments
            </p>
          </div>
          {sentiment && sentimentChartData.length > 0 ? (
            <div className="flex-1 flex items-center justify-center" style={{ minHeight: 280, width: '100%' }}>
              <PieChartComponent data={sentimentChartData} percentages={sentimentPercentages} />
            </div>
          ) : (
            <div className="flex-1 flex items-center justify-center text-muted-foreground">
              No sentiment data available
            </div>
          )}
        </div>

        {/* Top Performing Agents */}
        <div className="bg-card rounded-xl p-6 border border-border">
          <div className="mb-6 flex items-center justify-between">
            <div>
              <h2 className="text-lg font-semibold text-foreground mb-1">
                Top Performing Agents
              </h2>
              <p className="text-sm text-muted-foreground">
                Based on metrics
              </p>
            </div>
            <Link
              to="/agents"
              className="text-sm text-primary hover:underline"
            >
              View all
            </Link>
          </div>
          <div className="space-y-4">
            {topAgents && topAgents.topAgents.length > 0 ? (
              topAgents.topAgents.map((agent, index) => (
                <Link
                  key={agent.id}
                  to={`/agents/${agent.id}`}
                  className="flex items-center justify-between p-4 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-semibold">
                      #{index + 1}
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground">{agent.name}</p>
                      <p className="text-xs text-muted-foreground">{agent.role}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-semibold text-[#10b981]">
                      {Math.round(agent.avgMessagesPerConv || 0)} msg/conv
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {agent.conversationCount} convs
                    </p>
                  </div>
                </Link>
              ))
            ) : (
              <div className="text-center py-8 text-muted-foreground">
                <p className="text-sm">No agent data available</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Alerts Section */}
      <div className="bg-card rounded-xl p-6 border border-border">
        <div className="mb-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <AlertTriangle className="w-5 h-5 text-[#f59e0b]" />
            <h2 className="text-lg font-semibold text-foreground">
              Recent Alerts
            </h2>
          </div>
          <Link
            to="/conversations"
            className="text-sm text-primary hover:underline"
          >
            View all
          </Link>
        </div>

        {alerts && alerts.alerts.length > 0 ? (
          <div className="space-y-3">
            {alerts.alerts.map((alert) => (
              <div
                key={alert.id}
                className="flex items-start gap-4 p-4 rounded-lg border border-border"
              >
                <div
                  className={`p-2 rounded-lg ${alert.type === 'error'
                      ? 'bg-[#ef4444]/10'
                      : alert.type === 'warning'
                        ? 'bg-[#f59e0b]/10'
                        : 'bg-blue-500/10'
                    }`}
                >
                  {alert.type === 'error' ? (
                    <TrendingDown className={`w-4 h-4 ${alert.type === 'error' ? 'text-[#ef4444]' : 'text-[#f59e0b]'}`} />
                  ) : alert.type === 'warning' ? (
                    <AlertTriangle className="w-4 h-4 text-[#f59e0b]" />
                  ) : (
                    <CheckCircle className="w-4 h-4 text-blue-500" />
                  )}
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <p className="text-sm font-medium text-foreground">
                      {alert.message}
                    </p>
                    {alert.resolved && (
                      <span className="text-xs px-2 py-1 rounded-full bg-[#10b981]/10 text-[#10b981]">
                        Resolved
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-muted-foreground">
                    {new Date(alert.timestamp).toLocaleString()}
                  </p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-8 text-muted-foreground">
            <CheckCircle className="w-12 h-12 mx-auto mb-2 text-[#10b981]" />
            <p className="text-sm">No alerts at the moment. All systems running smoothly!</p>
          </div>
        )}
      </div>
    </div>
  );
}