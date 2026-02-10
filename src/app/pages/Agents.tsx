import { Bot, Activity, TrendingUp, Clock, Search, RefreshCw } from "lucide-react";
import { Link } from "react-router";
import { useState } from "react";
import { useAgent } from "@/app/context/AgentContext";
import type { Agent } from "@/app/types/api";

export function Agents() {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const { agents, loading, fetchAgents } = useAgent();

  const filteredAgents = agents.filter((agent) => {
    const matchesSearch = agent.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      agent.role.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === "all" || agent.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

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
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-foreground mb-1">AI Agents</h1>
          <p className="text-sm text-muted-foreground">
            Manage and monitor your AI agents
          </p>
        </div>
        <button
          onClick={() => fetchAgents()}
          disabled={loading}
          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors disabled:opacity-50"
          title="Refresh agents"
        >
          <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
          Refresh
        </button>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search agents..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 bg-card border border-border rounded-lg text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => setStatusFilter("all")}
            className={`px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${statusFilter === "all"
              ? "bg-primary text-primary-foreground"
              : "bg-card border border-border text-muted-foreground hover:text-foreground"
              }`}
          >
            All
          </button>
          <button
            onClick={() => setStatusFilter("active")}
            className={`px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${statusFilter === "active"
              ? "bg-primary text-primary-foreground"
              : "bg-card border border-border text-muted-foreground hover:text-foreground"
              }`}
          >
            Active
          </button>
          <button
            onClick={() => setStatusFilter("training")}
            className={`px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${statusFilter === "training"
              ? "bg-primary text-primary-foreground"
              : "bg-card border border-border text-muted-foreground hover:text-foreground"
              }`}
          >
            Training
          </button>
        </div>
      </div>

      {/* Loading State */}
      {loading && (
        <div className="flex items-center justify-center py-12">
          <div className="text-center">
            <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4" />
            <p className="text-muted-foreground">Loading agents...</p>
          </div>
        </div>
      )}

      {/* Agents Grid */}
      {!loading && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredAgents.map((agent) => (
            <Link
              key={agent.id}
              to={`/agents/${agent.id}`}
              className="bg-card rounded-xl p-6 border border-border hover:border-primary/50 transition-all hover:shadow-lg"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Bot className="w-6 h-6 text-primary" />
                </div>
                <span
                  className={`text-xs font-medium px-2.5 py-1 rounded-full ${getStatusColor(
                    agent.status
                  )}`}
                >
                  {agent.status.charAt(0).toUpperCase() + agent.status.slice(1)}
                </span>
              </div>

              {/* Agent Info */}
              <div className="mb-4">
                <h3 className="text-base font-semibold text-foreground mb-1">
                  {agent.name}
                </h3>
                <p className="text-sm text-muted-foreground">{agent.role}</p>
              </div>

              {/* Stats */}
              <div className="space-y-3 pt-4 border-t border-border">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Activity className="w-4 h-4" />
                    <span className="text-xs">Conversations</span>
                  </div>
                  <span className="text-sm font-medium text-foreground">
                    {agent.conversationCount.toLocaleString()}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <TrendingUp className="w-4 h-4" />
                    <span className="text-xs">Success Rate</span>
                  </div>
                  <span className="text-sm font-medium text-[#10b981]">
                    {agent.successRate}%
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Clock className="w-4 h-4" />
                    <span className="text-xs">Avg Duration</span>
                  </div>
                  <span className="text-sm font-medium text-foreground">
                    {agent.avgDuration}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}

      {/* Empty State */}
      {!loading && filteredAgents.length === 0 && (
        <div className="text-center py-12 bg-card rounded-xl border border-border">
          <Bot className="w-12 h-12 mx-auto mb-3 text-muted-foreground" />
          <p className="text-sm text-muted-foreground">
            No agents found matching your criteria
          </p>
        </div>
      )}
    </div>
  );
}
