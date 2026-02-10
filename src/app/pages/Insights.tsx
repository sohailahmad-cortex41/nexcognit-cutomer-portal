import { Lightbulb, TrendingUp, AlertTriangle, Sparkles, RefreshCw } from "lucide-react";
import { useState } from "react";

interface Insight {
  id: string;
  type: "trend" | "recommendation" | "alert";
  title: string;
  description: string;
  impact: "high" | "medium" | "low";
  category: string;
}

const mockInsights: Insight[] = [
  {
    id: "1",
    type: "trend",
    title: "Sales conversations increasing on weekends",
    description:
      "Data shows a 23% increase in sales-related conversations during weekends compared to weekdays. Consider adjusting agent availability to capitalize on this trend.",
    impact: "high",
    category: "Performance",
  },
  {
    id: "2",
    type: "recommendation",
    title: "Optimize response time for support queries",
    description:
      "Support Assistant has an average response time of 6.7 minutes, which is 40% slower than other agents. Training on faster query resolution could improve customer satisfaction.",
    impact: "medium",
    category: "Efficiency",
  },
  {
    id: "3",
    type: "alert",
    title: "Negative sentiment spike in complaint handling",
    description:
      "15% increase in negative sentiment for complaint-related conversations over the past week. Immediate review of complaint handling protocols recommended.",
    impact: "high",
    category: "Quality",
  },
  {
    id: "4",
    type: "trend",
    title: "BookBot Scheduler achieving 94% success rate",
    description:
      "BookBot Scheduler is the top-performing agent with a 94.1% success rate. Consider replicating its conversation patterns across other booking agents.",
    impact: "high",
    category: "Best Practice",
  },
  {
    id: "5",
    type: "recommendation",
    title: "Expand web chat support hours",
    description:
      "30% of web chat conversations occur outside current support hours, representing missed opportunities. Consider extending coverage to capture these interactions.",
    impact: "medium",
    category: "Operations",
  },
  {
    id: "6",
    type: "trend",
    title: "Product recommendation accuracy improving",
    description:
      "E-commerce Helper shows 18% improvement in successful product recommendations over the past month. Continue current training approach.",
    impact: "low",
    category: "Training",
  },
  {
    id: "7",
    type: "alert",
    title: "Long conversation durations for simple inquiries",
    description:
      "Average duration for simple product inquiries has increased to 5m 22s, suggesting agents may need better FAQ integration.",
    impact: "medium",
    category: "Efficiency",
  },
  {
    id: "8",
    type: "recommendation",
    title: "Implement proactive follow-up for pending outcomes",
    description:
      "230 conversations currently have pending outcomes. Implementing automated follow-up could convert 60-70% of these to successful resolutions.",
    impact: "high",
    category: "Conversion",
  },
];

export function Insights() {
  const [isRefreshing, setIsRefreshing] = useState(false);

  const handleRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => {
      setIsRefreshing(false);
    }, 2000);
  };

  const getImpactColor = (impact: string) => {
    switch (impact) {
      case "high":
        return "bg-[#ef4444]/10 text-[#ef4444]";
      case "medium":
        return "bg-[#f59e0b]/10 text-[#f59e0b]";
      case "low":
        return "bg-[#10b981]/10 text-[#10b981]";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "trend":
        return <TrendingUp className="w-5 h-5 text-primary" />;
      case "recommendation":
        return <Lightbulb className="w-5 h-5 text-[#f59e0b]" />;
      case "alert":
        return <AlertTriangle className="w-5 h-5 text-[#ef4444]" />;
      default:
        return <Sparkles className="w-5 h-5 text-primary" />;
    }
  };

  const highImpactInsights = mockInsights.filter((i) => i.impact === "high");
  const mediumImpactInsights = mockInsights.filter((i) => i.impact === "medium");
  const lowImpactInsights = mockInsights.filter((i) => i.impact === "low");

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-foreground mb-1">AI Insights</h1>
          <p className="text-sm text-muted-foreground">
            Data-driven recommendations and trends
          </p>
        </div>
        <button
          onClick={handleRefresh}
          disabled={isRefreshing}
          className="px-4 py-2.5 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors disabled:opacity-50 flex items-center gap-2"
        >
          <RefreshCw className={`w-4 h-4 ${isRefreshing ? "animate-spin" : ""}`} />
          Refresh Insights
        </button>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-card rounded-xl p-5 border border-border">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 bg-[#ef4444]/10 rounded-lg">
              <AlertTriangle className="w-5 h-5 text-[#ef4444]" />
            </div>
            <p className="text-xs text-muted-foreground">High Priority</p>
          </div>
          <p className="text-2xl font-semibold text-foreground">
            {highImpactInsights.length}
          </p>
          <p className="text-xs text-muted-foreground mt-1">Requires immediate attention</p>
        </div>

        <div className="bg-card rounded-xl p-5 border border-border">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 bg-[#f59e0b]/10 rounded-lg">
              <Lightbulb className="w-5 h-5 text-[#f59e0b]" />
            </div>
            <p className="text-xs text-muted-foreground">Recommendations</p>
          </div>
          <p className="text-2xl font-semibold text-foreground">
            {mockInsights.filter((i) => i.type === "recommendation").length}
          </p>
          <p className="text-xs text-muted-foreground mt-1">Action items to improve</p>
        </div>

        <div className="bg-card rounded-xl p-5 border border-border">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 bg-primary/10 rounded-lg">
              <TrendingUp className="w-5 h-5 text-primary" />
            </div>
            <p className="text-xs text-muted-foreground">Positive Trends</p>
          </div>
          <p className="text-2xl font-semibold text-foreground">
            {mockInsights.filter((i) => i.type === "trend").length}
          </p>
          <p className="text-xs text-muted-foreground mt-1">Notable patterns identified</p>
        </div>
      </div>

      {/* High Priority Insights */}
      {highImpactInsights.length > 0 && (
        <div>
          <h2 className="text-lg font-semibold text-foreground mb-4">
            High Priority Insights
          </h2>
          <div className="space-y-4">
            {highImpactInsights.map((insight) => (
              <div
                key={insight.id}
                className="bg-card rounded-xl p-6 border border-border hover:border-primary/50 transition-colors"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg shrink-0">
                    {getTypeIcon(insight.type)}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-base font-semibold text-foreground">
                        {insight.title}
                      </h3>
                      <div className="flex items-center gap-2">
                        <span
                          className={`text-xs px-2.5 py-1 rounded-full ${getImpactColor(
                            insight.impact
                          )}`}
                        >
                          {insight.impact} impact
                        </span>
                        <span className="text-xs px-2.5 py-1 rounded-full bg-muted text-foreground">
                          {insight.category}
                        </span>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {insight.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Medium Priority Insights */}
      {mediumImpactInsights.length > 0 && (
        <div>
          <h2 className="text-lg font-semibold text-foreground mb-4">
            Medium Priority Insights
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {mediumImpactInsights.map((insight) => (
              <div
                key={insight.id}
                className="bg-card rounded-xl p-5 border border-border hover:border-primary/50 transition-colors"
              >
                <div className="flex items-start gap-3 mb-3">
                  <div className="p-2.5 bg-primary/10 rounded-lg shrink-0">
                    {getTypeIcon(insight.type)}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-1">
                      <h3 className="text-sm font-semibold text-foreground">
                        {insight.title}
                      </h3>
                      <span
                        className={`text-xs px-2 py-0.5 rounded-full ${getImpactColor(
                          insight.impact
                        )}`}
                      >
                        {insight.impact}
                      </span>
                    </div>
                    <span className="text-xs px-2 py-0.5 rounded-full bg-muted text-muted-foreground">
                      {insight.category}
                    </span>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {insight.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Low Priority Insights */}
      {lowImpactInsights.length > 0 && (
        <div>
          <h2 className="text-lg font-semibold text-foreground mb-4">
            Additional Insights
          </h2>
          <div className="space-y-3">
            {lowImpactInsights.map((insight) => (
              <div
                key={insight.id}
                className="bg-card rounded-xl p-4 border border-border hover:border-primary/50 transition-colors"
              >
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg shrink-0">
                    {getTypeIcon(insight.type)}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="text-sm font-semibold text-foreground">
                        {insight.title}
                      </h3>
                      <span className="text-xs px-2 py-0.5 rounded-full bg-muted text-muted-foreground">
                        {insight.category}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground">{insight.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
