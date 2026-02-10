import { useState, useEffect } from "react";
import { MessageSquare, TrendingUp, CheckCircle, Clock, AlertTriangle, TrendingDown } from "lucide-react";
import { KpiCard } from "@/app/components/KpiCard";
import { Link } from "react-router";
import { PieChartComponent } from "@/app/components/charts/PieChartComponent";
import { useAuth } from "@/app/context/AuthContext";
import { reportsApi } from "@/app/services/api";
import type { ReportSummary, OutcomeDistribution, SentimentDistribution } from "@/app/services/api/reports";
import { toast } from "sonner";

const COLORS = ["#10b981", "#f59e0b", "#ef4444"];

export function Dashboard() {
  const { user } = useAuth();
  const [summary, setSummary] = useState<ReportSummary | null>(null);
  const [outcomeData, setOutcomeData] = useState<OutcomeDistribution | null>(null);
  const [sentiment, setSentiment] = useState<SentimentDistribution | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        setIsLoading(true);
        const [summaryData, outcomeDistribution, sentimentData] = await Promise.all([
          reportsApi.getReportSummary(),
          reportsApi.getOutcomeDistribution(),
          reportsApi.getSentimentDistribution(),
        ]);

        setSummary(summaryData);
        setOutcomeData(outcomeDistribution);
        setSentiment(sentimentData);
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
          value={summary?.totalConversations.toLocaleString() || '0'}
          subtitle="All time"
          icon={MessageSquare}
        />
        <KpiCard
          title="Total Messages"
          value={summary?.totalMessages.toLocaleString() || '0'}
          subtitle="All time"
          icon={TrendingUp}
        />
        <KpiCard
          title="Success Rate"
          value={`${outcomeData?.successRate || 0}%`}
          subtitle="Analyzed conversations"
          icon={CheckCircle}
        />
        <KpiCard
          title="Avg Duration"
          value={summary?.avgDuration || '0m'}
          subtitle="Per conversation"
          icon={Clock}
        />
      </div>

      {/* Sentiment Distribution Chart */}
      <div className="bg-card rounded-xl p-6 border border-border flex flex-col">
        <div className="mb-6">
          <h2 className="text-lg font-semibold text-foreground mb-1">
            Sentiment Distribution
          </h2>
          <p className="text-sm text-muted-foreground">
            Breakdown of conversation sentiments from {summary?.totalAnalyzed || 0} analyzed conversations
          </p>
        </div>
        {sentiment && (
          <div className="flex-1 flex items-center justify-center" style={{ minHeight: 280, width: '100%' }}>
            <PieChartComponent
              data={[
                { name: 'Positive', value: sentiment.distribution.positive || 0, color: COLORS[0] },
                { name: 'Neutral', value: sentiment.distribution.neutral || 0, color: COLORS[1] },
                { name: 'Negative', value: sentiment.distribution.negative || 0, color: COLORS[2] },
              ]}
              percentages={sentiment.percentages}
            />
          </div>
        )}
        {!sentiment && (
          <div className="flex-1 flex items-center justify-center text-muted-foreground">
            No sentiment data available
          </div>
        )}
      </div>

      {/* Activity Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-card rounded-xl p-6 border border-border">
          <p className="text-sm text-muted-foreground mb-2">Active Today</p>
          <p className="text-3xl font-semibold text-foreground">{summary?.activeToday || 0}</p>
        </div>
        <div className="bg-card rounded-xl p-6 border border-border">
          <p className="text-sm text-muted-foreground mb-2">Active This Week</p>
          <p className="text-3xl font-semibold text-foreground">{summary?.activeThisWeek || 0}</p>
        </div>
        <div className="bg-card rounded-xl p-6 border border-border">
          <p className="text-sm text-muted-foreground mb-2">Active This Month</p>
          <p className="text-3xl font-semibold text-foreground">{summary?.activeThisMonth || 0}</p>
        </div>
      </div>
    </div>
  );
}