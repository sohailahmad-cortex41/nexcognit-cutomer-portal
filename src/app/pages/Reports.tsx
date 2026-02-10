import { useState, useEffect } from "react";
import { Download, FileText, TrendingUp, PieChart as PieChartIcon, Calendar } from "lucide-react";
import { PieChartComponent } from "@/app/components/charts/PieChartComponent";
import { BarChartComponent } from "@/app/components/charts/BarChartComponent";
import { reportsApi } from "@/app/services/api";
import type { ReportSummary, OutcomeDistribution, PurposeDistribution, SentimentDistribution } from "@/app/services/api/reports";
import { toast } from "sonner";

const SENTIMENT_COLORS = ["#10b981", "#f59e0b", "#ef4444"];
const PURPOSE_COLORS = ["#3364eb", "#10b981", "#f59e0b", "#ef4444"];
const OUTCOME_COLORS = ["#f59e0b", "#10b981", "#ef4444"];

export function Reports() {
  const [summary, setSummary] = useState<ReportSummary | null>(null);
  const [outcomeData, setOutcomeData] = useState<OutcomeDistribution | null>(null);
  const [purposeData, setPurposeData] = useState<PurposeDistribution | null>(null);
  const [sentimentData, setSentimentData] = useState<SentimentDistribution | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchReportsData = async () => {
      try {
        setIsLoading(true);
        const [summaryData, outcome, purpose, sentiment] = await Promise.all([
          reportsApi.getReportSummary(),
          reportsApi.getOutcomeDistribution(),
          reportsApi.getPurposeDistribution(),
          reportsApi.getSentimentDistribution(),
        ]);

        setSummary(summaryData);
        setOutcomeData(outcome);
        setPurposeData(purpose);
        setSentimentData(sentiment);
      } catch (error) {
        console.error('Failed to fetch reports data:', error);
        toast.error('Failed to load reports data');
      } finally {
        setIsLoading(false);
      }
    };

    fetchReportsData();
  }, []);

  const handleExport = (format: "csv" | "pdf") => {
    toast.info(`Export as ${format.toUpperCase()} - Coming soon!`);
  };

  if (isLoading) {
    return (
      <div className="p-6 space-y-6">
        <div className="animate-pulse">
          <div className="h-8 bg-muted rounded w-1/3 mb-2" />
          <div className="h-4 bg-muted rounded w-1/2" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="h-32 bg-card rounded-xl border border-border animate-pulse" />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-foreground mb-1">Reports</h1>
          <p className="text-sm text-muted-foreground">
            Analytics and insights from {summary?.totalAnalyzed || 0} analyzed conversations
          </p>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => handleExport("csv")}
            className="px-4 py-2.5 bg-card border border-border rounded-lg text-sm font-medium text-foreground hover:bg-muted transition-colors flex items-center gap-2"
          >
            <Download className="w-4 h-4" />
            Export CSV
          </button>
          <button
            onClick={() => handleExport("pdf")}
            className="px-4 py-2.5 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors flex items-center gap-2"
          >
            <FileText className="w-4 h-4" />
            Export PDF
          </button>
        </div>
      </div>

      {/* Summary Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-card rounded-xl p-5 border border-border">
          <div className="flex items-center gap-3 mb-2">
            <TrendingUp className="w-5 h-5 text-primary" />
            <p className="text-xs text-muted-foreground">Total Conversations</p>
          </div>
          <p className="text-2xl font-semibold text-foreground">{summary?.totalConversations.toLocaleString() || 0}</p>
          <p className="text-xs text-muted-foreground mt-1">{summary?.totalMessages.toLocaleString() || 0} messages</p>
        </div>

        <div className="bg-card rounded-xl p-5 border border-border">
          <div className="flex items-center gap-3 mb-2">
            <PieChartIcon className="w-5 h-5 text-[#10b981]" />
            <p className="text-xs text-muted-foreground">Positive Sentiment</p>
          </div>
          <p className="text-2xl font-semibold text-foreground">{sentimentData?.percentages.positive || 0}%</p>
          <p className="text-xs text-muted-foreground mt-1">{sentimentData?.distribution.positive || 0} conversations</p>
        </div>

        <div className="bg-card rounded-xl p-5 border border-border">
          <div className="flex items-center gap-3 mb-2">
            <Calendar className="w-5 h-5 text-[#f59e0b]" />
            <p className="text-xs text-muted-foreground">Success Rate</p>
          </div>
          <p className="text-2xl font-semibold text-foreground">{outcomeData?.successRate || 0}%</p>
          <p className="text-xs text-muted-foreground mt-1">{outcomeData?.distribution.success || 0} successful</p>
        </div>

        <div className="bg-card rounded-xl p-5 border border-border">
          <div className="flex items-center gap-3 mb-2">
            <FileText className="w-5 h-5 text-primary" />
            <p className="text-xs text-muted-foreground">Avg Duration</p>
          </div>
          <p className="text-2xl font-semibold text-foreground">{summary?.avgDuration || '0m'}</p>
          <p className="text-xs text-muted-foreground mt-1">per conversation</p>
        </div>
      </div>

      {/* Distribution Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Sentiment Distribution */}
        <div className="bg-card rounded-xl p-6 border border-border">
          <h2 className="text-lg font-semibold text-foreground mb-6">
            Sentiment Distribution
          </h2>
          <div className="w-full" style={{ minHeight: 250 }}>
            {sentimentData && (
              <PieChartComponent
                data={[
                  { name: 'Positive', value: sentimentData.distribution.positive || 0, color: SENTIMENT_COLORS[0] },
                  { name: 'Neutral', value: sentimentData.distribution.neutral || 0, color: SENTIMENT_COLORS[1] },
                  { name: 'Negative', value: sentimentData.distribution.negative || 0, color: SENTIMENT_COLORS[2] },
                ].filter(item => item.value > 0)}
                percentages={sentimentData.percentages}
              />
            )}
          </div>
        </div>

        {/* Purpose Distribution */}
        <div className="bg-card rounded-xl p-6 border border-border">
          <h2 className="text-lg font-semibold text-foreground mb-6">
            Purpose Distribution
          </h2>
          <div className="w-full" style={{ minHeight: 250 }}>
            {purposeData && Object.keys(purposeData.distribution).length > 0 && (
              <BarChartComponent
                labels={Object.keys(purposeData.distribution).map(key => key.charAt(0).toUpperCase() + key.slice(1))}
                datasets={[
                  {
                    label: "Conversations",
                    data: Object.values(purposeData.distribution),
                    color: "#3364eb",
                  },
                ]}
                showLegend={false}
              />
            )}
          </div>
        </div>

        {/* Outcome Distribution */}
        <div className="bg-card rounded-xl p-6 border border-border">
          <h2 className="text-lg font-semibold text-foreground mb-6">
            Outcome Distribution
          </h2>
          <div className="w-full" style={{ minHeight: 250 }}>
            {outcomeData && (
              <PieChartComponent
                data={[
                  { name: 'Pending', value: outcomeData.distribution.pending || 0, color: OUTCOME_COLORS[0] },
                  { name: 'Success', value: outcomeData.distribution.success || 0, color: OUTCOME_COLORS[1] },
                  { name: 'Failed', value: outcomeData.distribution.failed || 0, color: OUTCOME_COLORS[2] },
                ].filter(item => item.value > 0)}
                percentages={outcomeData.percentages}
              />
            )}
          </div>
        </div>
      </div>

      {/* Activity Breakdown */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-card rounded-xl p-6 border border-border">
          <p className="text-sm text-muted-foreground mb-2">Active Today</p>
          <p className="text-3xl font-semibold text-foreground">{summary?.activeToday || 0}</p>
          <p className="text-xs text-muted-foreground mt-2">conversations today</p>
        </div>
        <div className="bg-card rounded-xl p-6 border border-border">
          <p className="text-sm text-muted-foreground mb-2">Active This Week</p>
          <p className="text-3xl font-semibold text-foreground">{summary?.activeThisWeek || 0}</p>
          <p className="text-xs text-muted-foreground mt-2">conversations this week</p>
        </div>
        <div className="bg-card rounded-xl p-6 border border-border">
          <p className="text-sm text-muted-foreground mb-2">Active This Month</p>
          <p className="text-3xl font-semibold text-foreground">{summary?.activeThisMonth || 0}</p>
          <p className="text-xs text-muted-foreground mt-2">conversations this month</p>
        </div>
      </div>
    </div>
  );
}