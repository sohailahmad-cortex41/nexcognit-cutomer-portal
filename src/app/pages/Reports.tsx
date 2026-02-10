import { useState, useMemo } from "react";
import { Download, FileText, Filter, Calendar, TrendingUp, PieChart as PieChartIcon } from "lucide-react";
import { sentimentData, purposeData, outcomeData, mockConversations } from "@/app/data/mockData";
import { PieChartComponent } from "@/app/components/charts/PieChartComponent";
import { LineChartComponent } from "@/app/components/charts/LineChartComponent";
import { BarChartComponent } from "@/app/components/charts/BarChartComponent";

const SENTIMENT_COLORS = ["#10b981", "#f59e0b", "#ef4444"];
const PURPOSE_COLORS = ["#3364eb", "#10b981", "#f59e0b", "#ef4444"];

export function Reports() {
  const [showFilters, setShowFilters] = useState(true);
  const [dateRange, setDateRange] = useState("last30days");
  const [selectedAgent, setSelectedAgent] = useState("all");
  const [selectedChannel, setSelectedChannel] = useState("all");
  const [selectedSentiment, setSelectedSentiment] = useState("all");

  // Memoize trend data so it doesn't regenerate on every render
  const trendData = useMemo(() => {
    const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
    return days.map((day, index) => ({
      day,
      conversations: Math.floor(Math.random() * 200) + 400,
      success: Math.floor(Math.random() * 150) + 300,
    }));
  }, []);

  const handleExport = (format: "csv" | "pdf") => {
    alert(`Exporting report as ${format.toUpperCase()}... (Feature placeholder)`);
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-foreground mb-1">Reports</h1>
          <p className="text-sm text-muted-foreground">
            Advanced analytics and data export
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

      {/* Filters */}
      <div className="bg-card rounded-xl p-6 border border-border">
        <button
          onClick={() => setShowFilters(!showFilters)}
          className="flex items-center gap-2 text-foreground hover:text-primary transition-colors mb-4"
        >
          <Filter className="w-4 h-4" />
          <span className="text-sm font-medium">Advanced Filters</span>
        </button>

        {showFilters && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div>
              <label className="text-xs text-muted-foreground mb-2 block">
                Date Range
              </label>
              <select
                value={dateRange}
                onChange={(e) => setDateRange(e.target.value)}
                className="w-full px-3 py-2 bg-background border border-border rounded-lg text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <option value="today">Today</option>
                <option value="last7days">Last 7 Days</option>
                <option value="last30days">Last 30 Days</option>
                <option value="last90days">Last 90 Days</option>
                <option value="custom">Custom Range</option>
              </select>
            </div>

            <div>
              <label className="text-xs text-muted-foreground mb-2 block">
                Agent
              </label>
              <select
                value={selectedAgent}
                onChange={(e) => setSelectedAgent(e.target.value)}
                className="w-full px-3 py-2 bg-background border border-border rounded-lg text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <option value="all">All Agents</option>
                <option value="1">Sales Agent Pro</option>
                <option value="2">BookBot Scheduler</option>
                <option value="3">Support Assistant</option>
                <option value="4">Restaurant Greeter</option>
              </select>
            </div>

            <div>
              <label className="text-xs text-muted-foreground mb-2 block">
                Channel
              </label>
              <select
                value={selectedChannel}
                onChange={(e) => setSelectedChannel(e.target.value)}
                className="w-full px-3 py-2 bg-background border border-border rounded-lg text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <option value="all">All Channels</option>
                <option value="web">Web</option>
                <option value="phone">Phone</option>
                <option value="email">Email</option>
                <option value="chat">Chat</option>
              </select>
            </div>

            <div>
              <label className="text-xs text-muted-foreground mb-2 block">
                Sentiment
              </label>
              <select
                value={selectedSentiment}
                onChange={(e) => setSelectedSentiment(e.target.value)}
                className="w-full px-3 py-2 bg-background border border-border rounded-lg text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <option value="all">All Sentiments</option>
                <option value="positive">Positive</option>
                <option value="neutral">Neutral</option>
                <option value="negative">Negative</option>
              </select>
            </div>
          </div>
        )}
      </div>

      {/* Summary Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-card rounded-xl p-5 border border-border">
          <div className="flex items-center gap-3 mb-2">
            <TrendingUp className="w-5 h-5 text-primary" />
            <p className="text-xs text-muted-foreground">Total Conversations</p>
          </div>
          <p className="text-2xl font-semibold text-foreground">4,242</p>
          <p className="text-xs text-[#10b981] mt-1">+12.5% from last period</p>
        </div>

        <div className="bg-card rounded-xl p-5 border border-border">
          <div className="flex items-center gap-3 mb-2">
            <PieChartIcon className="w-5 h-5 text-[#10b981]" />
            <p className="text-xs text-muted-foreground">Positive Sentiment</p>
          </div>
          <p className="text-2xl font-semibold text-foreground">60%</p>
          <p className="text-xs text-[#10b981] mt-1">+3.2% from last period</p>
        </div>

        <div className="bg-card rounded-xl p-5 border border-border">
          <div className="flex items-center gap-3 mb-2">
            <Calendar className="w-5 h-5 text-[#f59e0b]" />
            <p className="text-xs text-muted-foreground">Success Rate</p>
          </div>
          <p className="text-2xl font-semibold text-foreground">84.7%</p>
          <p className="text-xs text-[#10b981] mt-1">+2.1% from last period</p>
        </div>

        <div className="bg-card rounded-xl p-5 border border-border">
          <div className="flex items-center gap-3 mb-2">
            <FileText className="w-5 h-5 text-[#ef4444]" />
            <p className="text-xs text-muted-foreground">Avg Duration</p>
          </div>
          <p className="text-2xl font-semibold text-foreground">4m 32s</p>
          <p className="text-xs text-[#ef4444] mt-1">+8.3% from last period</p>
        </div>
      </div>

      {/* Trend Chart */}
      <div className="bg-card rounded-xl p-6 border border-border">
        <h2 className="text-lg font-semibold text-foreground mb-6">
          Conversation Trends
        </h2>
        <div className="w-full overflow-x-auto" style={{ minHeight: 300 }}>
          <LineChartComponent
            labels={trendData.map(d => d.day)}
            datasets={[
              {
                label: "Total Conversations",
                data: trendData.map(d => d.conversations),
                color: "#3364eb",
              },
              {
                label: "Successful",
                data: trendData.map(d => d.success),
                color: "#10b981",
              },
            ]}
          />
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
            <PieChartComponent
              data={sentimentData.map((item, index) => ({
                name: item.name,
                value: item.value,
                color: SENTIMENT_COLORS[index],
              }))}
            />
          </div>
        </div>

        {/* Purpose Distribution */}
        <div className="bg-card rounded-xl p-6 border border-border">
          <h2 className="text-lg font-semibold text-foreground mb-6">
            Purpose Distribution
          </h2>
          <div className="w-full" style={{ minHeight: 250 }}>
            <BarChartComponent
              labels={purposeData.map(d => d.name)}
              datasets={[
                {
                  label: "Purpose",
                  data: purposeData.map(d => d.value),
                  color: "#3364eb",
                },
              ]}
              showLegend={false}
            />
          </div>
        </div>

        {/* Outcome Distribution */}
        <div className="bg-card rounded-xl p-6 border border-border">
          <h2 className="text-lg font-semibold text-foreground mb-6">
            Outcome Distribution
          </h2>
          <div className="w-full" style={{ minHeight: 250 }}>
            <PieChartComponent
              data={outcomeData.map((item, index) => ({
                name: item.name,
                value: item.value,
                color: PURPOSE_COLORS[index],
              }))}
            />
          </div>
        </div>
      </div>

      {/* Tabular Report */}
      <div className="bg-card rounded-xl p-6 border border-border">
        <h2 className="text-lg font-semibold text-foreground mb-6">
          Detailed Report
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left text-xs text-muted-foreground font-medium py-3 px-4">
                  Customer
                </th>
                <th className="text-left text-xs text-muted-foreground font-medium py-3 px-4">
                  Agent
                </th>
                <th className="text-left text-xs text-muted-foreground font-medium py-3 px-4">
                  Purpose
                </th>
                <th className="text-left text-xs text-muted-foreground font-medium py-3 px-4">
                  Sentiment
                </th>
                <th className="text-left text-xs text-muted-foreground font-medium py-3 px-4">
                  Outcome
                </th>
                <th className="text-left text-xs text-muted-foreground font-medium py-3 px-4">
                  Duration
                </th>
                <th className="text-left text-xs text-muted-foreground font-medium py-3 px-4">
                  Date
                </th>
              </tr>
            </thead>
            <tbody>
              {mockConversations.slice(0, 10).map((conv) => (
                <tr key={conv.id} className="border-b border-border hover:bg-muted/30">
                  <td className="text-sm text-foreground py-3 px-4">{conv.customerName}</td>
                  <td className="text-sm text-muted-foreground py-3 px-4">
                    {conv.agentName}
                  </td>
                  <td className="text-sm text-foreground py-3 px-4 capitalize">
                    {conv.purpose}
                  </td>
                  <td className="py-3 px-4">
                    <span
                      className={`text-xs px-2 py-1 rounded-full ${
                        conv.sentiment === "positive"
                          ? "bg-[#10b981]/10 text-[#10b981]"
                          : conv.sentiment === "negative"
                          ? "bg-[#ef4444]/10 text-[#ef4444]"
                          : "bg-[#f59e0b]/10 text-[#f59e0b]"
                      }`}
                    >
                      {conv.sentiment}
                    </span>
                  </td>
                  <td className="py-3 px-4">
                    <span
                      className={`text-xs px-2 py-1 rounded-full ${
                        conv.outcome === "success"
                          ? "bg-[#10b981]/10 text-[#10b981]"
                          : conv.outcome === "failed"
                          ? "bg-[#ef4444]/10 text-[#ef4444]"
                          : "bg-[#f59e0b]/10 text-[#f59e0b]"
                      }`}
                    >
                      {conv.outcome}
                    </span>
                  </td>
                  <td className="text-sm text-foreground py-3 px-4">{conv.duration}</td>
                  <td className="text-sm text-muted-foreground py-3 px-4">
                    {new Date(conv.timestamp).toLocaleDateString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}