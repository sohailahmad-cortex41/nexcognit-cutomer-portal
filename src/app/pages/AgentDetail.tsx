import { useParams, Link } from "react-router";
import { ArrowLeft, Bot, Activity, TrendingUp, Clock, MessageSquare, CheckCircle } from "lucide-react";
import { mockConversations } from "@/app/data/mockData";
import { BarChartComponent } from "@/app/components/charts/BarChartComponent";
import { PieChartComponent } from "@/app/components/charts/PieChartComponent";
import { useState, useEffect } from "react";
import { agentsApi } from "@/app/services/api";
import { useAgent } from "@/app/context/AgentContext";
import type { Agent, AgentStats } from "@/app/types/api";

const COLORS = ["#3364eb", "#10b981", "#f59e0b", "#ef4444"];

export function AgentDetail() {
  const { id } = useParams();
  const { agents } = useAgent();
  const [agent, setAgent] = useState<Agent | null>(null);
  const [stats, setStats] = useState<AgentStats | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAgentData = async () => {
      if (!id) return;

      try {
        setLoading(true);

        // Find agent from context instead of fetching again
        const foundAgent = agents.find((a) => a.id === id);

        if (foundAgent) {
          setAgent(foundAgent);
          // Fetch only stats
          const statsData = await agentsApi.getAgentStats(id);
          setStats(statsData);
        } else {
          setError('Agent not found');
        }
      } catch (err: any) {
        console.error('Failed to fetch agent data:', err);
        setError(err?.response?.data?.detail?.message || 'Failed to load agent data');
      } finally {
        setLoading(false);
      }
    };

    fetchAgentData();
  }, [id, agents]);

  if (loading) {
    return (
      <div className="p-6">
        <div className="text-center py-12">
          <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p className="text-muted-foreground">Loading agent details...</p>
        </div>
      </div>
    );
  }

  if (error || !agent || !stats) {
    return (
      <div className="p-6">
        <div className="text-center py-12">
          <Bot className="w-12 h-12 mx-auto mb-3 text-muted-foreground" />
          <p className="text-sm text-muted-foreground">{error || 'Agent not found'}</p>
          <Link to="/agents" className="text-sm text-primary hover:underline mt-2 inline-block">
            Back to Agents
          </Link>
        </div>
      </div>
    );
  }

  const agentConversations = mockConversations.filter((c) => c.agentId === id);

  // Transform stats data for charts
  const purposeChartData = Object.entries(stats.purposeDistribution).map(([name, value]) => ({
    name: name.charAt(0).toUpperCase() + name.slice(1),
    value,
  }));

  const outcomeChartData = Object.entries(stats.outcomeDistribution).map(([name, value]) => ({
    name: name.charAt(0).toUpperCase() + name.slice(1),
    value,
  }));

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "bg-[#10b981]/10 text-[#10b981]";
      case "inactive":
        return "bg-[#94a3b8]/10 text-[#94a3b8]";
      case "training":
        return "bg-[#f59e0b]/10 text-[#f59e0b]";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div>
        <Link
          to="/agents"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-4"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Agents
        </Link>

        <div className="flex items-start justify-between">
          <div className="flex items-center gap-4">
            <div className="p-4 bg-primary/10 rounded-xl">
              <Bot className="w-8 h-8 text-primary" />
            </div>
            <div>
              <h1 className="text-2xl font-semibold text-foreground mb-1">{agent.name}</h1>
              <p className="text-sm text-muted-foreground">{agent.role}</p>
            </div>
          </div>
          <span
            className={`text-xs font-medium px-3 py-1.5 rounded-full ${getStatusColor(
              agent.status
            )}`}
          >
            {agent.status.charAt(0).toUpperCase() + agent.status.slice(1)}
          </span>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-card rounded-xl p-5 border border-border">
          <div className="flex items-center gap-3 mb-2">
            <Activity className="w-5 h-5 text-primary" />
            <p className="text-xs text-muted-foreground">Total Conversations</p>
          </div>
          <p className="text-2xl font-semibold text-foreground">
            {stats.conversationCount.toLocaleString()}
          </p>
        </div>

        <div className="bg-card rounded-xl p-5 border border-border">
          <div className="flex items-center gap-3 mb-2">
            <TrendingUp className="w-5 h-5 text-[#10b981]" />
            <p className="text-xs text-muted-foreground">Success Rate</p>
          </div>
          <p className="text-2xl font-semibold text-[#10b981]">
            {stats.successRate}%
          </p>
        </div>

        <div className="bg-card rounded-xl p-5 border border-border">
          <div className="flex items-center gap-3 mb-2">
            <Clock className="w-5 h-5 text-[#f59e0b]" />
            <p className="text-xs text-muted-foreground">Avg Duration</p>
          </div>
          <p className="text-2xl font-semibold text-foreground">
            {stats.avgDuration}
          </p>
        </div>

        <div className="bg-card rounded-xl p-5 border border-border">
          <div className="flex items-center gap-3 mb-2">
            <CheckCircle className="w-5 h-5 text-primary" />
            <p className="text-xs text-muted-foreground">Last Active</p>
          </div>
          <p className="text-2xl font-semibold text-foreground">
            {stats.lastActiveAt ? new Date(stats.lastActiveAt).toLocaleDateString() : 'N/A'}
          </p>
        </div>
      </div>

      {/* Performance Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-card rounded-xl p-6 border border-border">
          <h2 className="text-lg font-semibold text-foreground mb-6">
            Purpose Distribution
          </h2>
          <div className="w-full" style={{ minHeight: 250 }}>
            {purposeChartData.length > 0 ? (
              <BarChartComponent
                labels={purposeChartData.map(d => d.name)}
                datasets={[
                  {
                    label: "Purpose",
                    data: purposeChartData.map(d => d.value),
                    color: "#3364eb",
                  },
                ]}
                showLegend={false}
              />
            ) : (
              <div className="flex items-center justify-center h-full">
                <p className="text-sm text-muted-foreground">No data available</p>
              </div>
            )}
          </div>
        </div>

        <div className="bg-card rounded-xl p-6 border border-border">
          <h2 className="text-lg font-semibold text-foreground mb-6">
            Outcome Distribution
          </h2>
          <div className="w-full" style={{ minHeight: 250 }}>
            {outcomeChartData.length > 0 ? (
              <PieChartComponent
                data={outcomeChartData.map((item, index) => ({
                  name: item.name,
                  value: item.value,
                  color: COLORS[index % COLORS.length],
                }))}
              />
            ) : (
              <div className="flex items-center justify-center h-full">
                <p className="text-sm text-muted-foreground">No data available</p>
              </div>
            )}
          </div>
        </div>
      </div>



    </div>
  );
}