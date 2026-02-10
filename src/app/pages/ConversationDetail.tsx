import { useParams, Link, useLocation } from "react-router";
import { ArrowLeft, Bot, User, Sparkles, RefreshCw, Clock, CheckCircle } from "lucide-react";
import { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import { conversationsApi } from "@/app/services/api";
import type { AiInsights, ConversationDetail } from "@/app/types/api";
import { formatTime } from "@/app/utils/dateUtils";

// Decode URL-encoded characters in text
const decodeMessage = (text: string): string => {
  try {
    return decodeURIComponent(text);
  } catch {
    return text;
  }
};

const INSIGHTS_COOLDOWN_MS = 8 * 60 * 60 * 1000;

const getInsightsStorageKey = (conversationId: string) =>
  `conversation_insights_${conversationId}`;

const getRemainingCooldown = (generatedAt: string | null) => {
  if (!generatedAt) return 0;
  const elapsed = Date.now() - new Date(generatedAt).getTime();
  return Math.max(0, INSIGHTS_COOLDOWN_MS - elapsed);
};

const formatCooldown = (ms: number) => {
  const totalMinutes = Math.ceil(ms / 60000);
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;
  if (hours > 0) return `${hours}h ${minutes}m`;
  return `${minutes}m`;
};

export function ConversationDetail() {
  const { id } = useParams();
  const location = useLocation();
  const locationState = location.state as { purposeCategory?: string; sentiment?: string; outcomeCategory?: string } | null;
  const [conversation, setConversation] = useState<ConversationDetail | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [showInsights, setShowInsights] = useState(false);
  const [insights, setInsights] = useState<AiInsights | null>(null);
  const [insightsGeneratedAt, setInsightsGeneratedAt] = useState<string | null>(null);
  const [cooldownMs, setCooldownMs] = useState(0);
  const [insightsError, setInsightsError] = useState<string | null>(null);

  useEffect(() => {
    const fetchConversation = async () => {
      if (!id) return;

      try {
        setLoading(true);
        const data = await conversationsApi.getConversationById(id);
        // Merge location state with API data to include purposeCategory, sentiment, outcome
        const enrichedData = {
          ...data,
          purposeCategory: locationState?.purposeCategory || data.purposeCategory,
          sentiment: locationState?.sentiment || data.sentiment,
          outcomeCategory: locationState?.outcomeCategory || data.outcomeCategory,
        };
        setConversation(enrichedData);
        setError(null);
      } catch (err: any) {
        console.error('Failed to fetch conversation:', err);
        setError(err?.response?.data?.detail?.message || 'Failed to load conversation');
      } finally {
        setLoading(false);
      }
    };

    fetchConversation();
  }, [id]);

  useEffect(() => {
    if (!id) return;
    const stored = localStorage.getItem(getInsightsStorageKey(id));
    if (!stored) return;

    try {
      const parsed = JSON.parse(stored) as { generatedAt: string; aiInsights: AiInsights };
      const remaining = getRemainingCooldown(parsed.generatedAt);
      if (remaining === 0) {
        localStorage.removeItem(getInsightsStorageKey(id));
        return;
      }
      setInsights(parsed.aiInsights);
      setInsightsGeneratedAt(parsed.generatedAt);
      setCooldownMs(remaining);
      setShowInsights(true);
    } catch (parseError) {
      console.error("Failed to parse stored insights:", parseError);
      localStorage.removeItem(getInsightsStorageKey(id));
    }
  }, [id]);

  useEffect(() => {
    if (!insightsGeneratedAt) {
      setCooldownMs(0);
      return;
    }

    const updateRemaining = () => {
      setCooldownMs(getRemainingCooldown(insightsGeneratedAt));
    };

    updateRemaining();
    const interval = window.setInterval(updateRemaining, 60000);
    return () => window.clearInterval(interval);
  }, [insightsGeneratedAt]);

  if (loading) {
    return (
      <div className="p-6">
        <div className="text-center py-12">
          <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p className="text-muted-foreground">Loading conversation...</p>
        </div>
      </div>
    );
  }

  if (error || !conversation) {
    return (
      <div className="p-6">
        <div className="text-center py-12">
          <Bot className="w-12 h-12 mx-auto mb-3 text-muted-foreground" />
          <p className="text-sm text-muted-foreground">{error || 'Conversation not found'}</p>
          <Link to="/conversations" className="text-sm text-primary hover:underline mt-2 inline-block">
            Back to Conversations
          </Link>
        </div>
      </div>
    );
  }

  const handleGenerateInsights = async () => {
    if (!id) return;
    setIsGenerating(true);
    setInsightsError(null);

    try {
      const response = await conversationsApi.generateConversationInsights(id);
      setInsights(response.aiInsights);
      setInsightsGeneratedAt(response.generatedAt);
      setCooldownMs(getRemainingCooldown(response.generatedAt));
      setShowInsights(true);

      localStorage.setItem(
        getInsightsStorageKey(id),
        JSON.stringify({ generatedAt: response.generatedAt, aiInsights: response.aiInsights })
      );
    } catch (err: any) {
      console.error("Failed to generate insights:", err);
      setInsightsError(err?.response?.data?.detail?.message || "Failed to generate insights");
    } finally {
      setIsGenerating(false);
    }
  };

  const getSentimentColor = (sentiment: string) => {
    switch (sentiment) {
      case "positive":
        return "bg-[#10b981]/10 text-[#10b981]";
      case "negative":
        return "bg-[#ef4444]/10 text-[#ef4444]";
      case "neutral":
        return "bg-[#f59e0b]/10 text-[#f59e0b]";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  const getOutcomeColor = (outcome: string) => {
    switch (outcome) {
      case "success":
        return "bg-[#10b981]/10 text-[#10b981]";
      case "failed":
        return "bg-[#ef4444]/10 text-[#ef4444]";
      case "pending":
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
          to="/conversations"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-4"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Conversations
        </Link>

        <div className="flex items-start justify-between">
          <div>
            <h1 className="text-2xl font-semibold text-foreground mb-1">
              Conversation with {conversation.customerName}
            </h1>
            <p className="text-sm text-muted-foreground">
              {conversation.agentName} • {new Date(conversation.timestamp).toLocaleString()}
            </p>
          </div>
          <div className="flex items-center gap-2">
            {conversation.sentiment && (
              <span className={`text-xs px-3 py-1.5 rounded-full ${getSentimentColor(conversation.sentiment)}`}>
                {conversation.sentiment}
              </span>
            )}
            {conversation.outcomeCategory && (
              <span className={`text-xs px-3 py-1.5 rounded-full ${getOutcomeColor(conversation.outcomeCategory)}`}>
                {conversation.outcomeCategory}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Metadata */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-card rounded-lg p-4 border border-border">
          <p className="text-xs text-muted-foreground mb-1">Purpose</p>
          <p className="text-sm font-medium text-foreground capitalize">
            {conversation?.purposeCategory || 'N/A'}
          </p>
        </div>
        <div className="bg-card rounded-lg p-4 border border-border">
          <p className="text-xs text-muted-foreground mb-1">Duration</p>
          <p className="text-sm font-medium text-foreground">{conversation.duration}</p>
        </div>
        <div className="bg-card rounded-lg p-4 border border-border">
          <p className="text-xs text-muted-foreground mb-1">Channel</p>
          <p className="text-sm font-medium text-foreground capitalize">
            {conversation.channel}
          </p>
        </div>
        <div className="bg-card rounded-lg p-4 border border-border">
          <p className="text-xs text-muted-foreground mb-1">Conversation ID</p>
          <p className="text-xs font-medium text-foreground break-words">{conversation.id}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Chat Transcript */}
        <div className="lg:col-span-2 bg-card rounded-xl p-6 border border-border">
          <h2 className="text-lg font-semibold text-foreground mb-6">
            Conversation Transcript
          </h2>

          {conversation.messages ? (
            <div className="space-y-4">
              {conversation.messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex gap-3 ${message.role === "agent" ? "flex-row" : "flex-row-reverse"
                    }`}
                >
                  <div
                    className={`p-2 rounded-lg shrink-0 w-8 h-8 flex items-center justify-center ${message.role === "agent"
                      ? "bg-primary/10"
                      : "bg-muted"
                      }`}
                  >
                    {message.role === "agent" ? (
                      <Bot className="w-4 h-4 text-primary" />
                    ) : (
                      <User className="w-4 h-4 text-muted-foreground" />
                    )}
                  </div>
                  <div
                    className={`flex-1 ${message.role === "customer" ? "flex flex-col items-end" : ""
                      }`}
                  >
                    <div
                      className={`rounded-xl p-4 max-w-[85%] ${message.role === "agent"
                        ? "bg-muted/30"
                        : "bg-primary/10"
                        }`}
                    >
                      <div className="text-sm text-foreground">
                        <ReactMarkdown
                          components={{
                            p: ({ node, ...props }) => <p className="mb-2 last:mb-0" {...props} />,
                            a: ({ node, ...props }) => (
                              <a className="text-primary hover:underline" target="_blank" rel="noopener noreferrer" {...props} />
                            ),
                            strong: ({ node, ...props }) => <strong className="font-semibold" {...props} />,
                            em: ({ node, ...props }) => <em className="italic" {...props} />,
                            ul: ({ node, ...props }) => <ul className="list-disc list-inside mb-2" {...props} />,
                            ol: ({ node, ...props }) => <ol className="list-decimal list-inside mb-2" {...props} />,
                            li: ({ node, ...props }) => <li className="mb-1" {...props} />,
                          }}
                        >
                          {decodeMessage(message.content)}
                        </ReactMarkdown>
                      </div>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1 px-1">
                      {formatTime(message.timestamp)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-8">
              <p className="text-sm text-muted-foreground">
                Transcript not available for this conversation
              </p>
            </div>
          )}
        </div>

        {/* AI Insights Panel */}
        <div className="bg-card rounded-xl p-6 border border-border">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-primary" />
              <h2 className="text-lg font-semibold text-foreground">
                AI Insights
              </h2>
            </div>
          </div>

          {!showInsights ? (
            <div className="text-center py-8">
              <div className="p-4 bg-primary/10 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Sparkles className="w-8 h-8 text-primary" />
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                Generate AI-powered insights for this conversation
              </p>
              {insightsError && (
                <p className="text-xs text-destructive mb-3">{insightsError}</p>
              )}
              <button
                onClick={handleGenerateInsights}
                disabled={isGenerating || cooldownMs > 0}
                className="w-full px-4 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
              >
                {isGenerating ? (
                  <>
                    <RefreshCw className="w-4 h-4 animate-spin" />
                    Generating...
                  </>
                ) : (
                  <>
                    <Sparkles className="w-4 h-4" />
                    {cooldownMs > 0 ? "Insights Available Soon" : "Generate Insights"}
                  </>
                )}
              </button>
              {cooldownMs > 0 && (
                <p className="text-xs text-muted-foreground mt-3">
                  You can generate new insights in {formatCooldown(cooldownMs)}.
                </p>
              )}
            </div>
          ) : (
            <div className="space-y-6">
              {/* Sentiment */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <p className="text-xs text-muted-foreground">Sentiment</p>
                  <button
                    onClick={handleGenerateInsights}
                    disabled={isGenerating || cooldownMs > 0}
                    className="text-xs text-primary hover:underline flex items-center gap-1"
                  >
                    <RefreshCw className={`w-3 h-3 ${isGenerating ? 'animate-spin' : ''}`} />
                    {cooldownMs > 0 ? `Available in ${formatCooldown(cooldownMs)}` : "Refresh"}
                  </button>
                </div>
                {(() => {
                  const sentimentValue = insights?.sentiment || conversation.sentiment;
                  if (!sentimentValue) {
                    return <span className="text-sm text-muted-foreground">N/A</span>;
                  }
                  return (
                    <span
                      className={`inline-block text-sm px-3 py-1.5 rounded-full ${getSentimentColor(
                        sentimentValue
                      )}`}
                    >
                      {sentimentValue.charAt(0).toUpperCase() + sentimentValue.slice(1)}
                    </span>
                  );
                })()}
              </div>

              {/* Purpose */}
              {insights?.purpose && (
                <div>
                  <p className="text-xs text-muted-foreground mb-2">Purpose</p>
                  <p className="text-sm text-foreground">
                    {insights.purpose}
                  </p>
                </div>
              )}

              {/* Summary */}
              {insights?.summary && (
                <div>
                  <p className="text-xs text-muted-foreground mb-2">Summary</p>
                  <p className="text-sm text-foreground leading-relaxed">
                    {insights.summary}
                  </p>
                </div>
              )}

              {/* Outcome */}
              {insights?.outcome && (
                <div>
                  <p className="text-xs text-muted-foreground mb-2">Outcome</p>
                  <p className="text-sm text-foreground">
                    {insights.outcome}
                  </p>
                </div>
              )}

              {/* Key Topics */}
              {insights?.keyTopics && (
                <div>
                  <p className="text-xs text-muted-foreground mb-2">Key Topics</p>
                  <div className="flex flex-wrap gap-2">
                    {insights.keyTopics.map((topic, index) => (
                      <span
                        key={index}
                        className="text-xs px-2.5 py-1 rounded-full bg-muted text-foreground"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Recommendations */}
              {insights?.recommendations && (
                <div>
                  <p className="text-xs text-muted-foreground mb-2">
                    Recommendations
                  </p>
                  <ul className="space-y-2">
                    {insights.recommendations.map((rec, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-2 text-sm text-foreground"
                      >
                        <CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                        <span>{rec}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}