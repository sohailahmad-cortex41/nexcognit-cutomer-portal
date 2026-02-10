import { Search, Filter, MessageSquare, Calendar, ChevronLeft, ChevronRight, Bot } from "lucide-react";
import { Link } from "react-router";
import { useState, useEffect } from "react";
import { agentsApi } from "@/app/services/api";
import { useAgent } from "@/app/context/AgentContext";
import type { Conversation } from "@/app/types/api";

export function Conversations() {
  const { selectedAgent } = useAgent();
  const [searchTerm, setSearchTerm] = useState("");
  const [sentimentFilter, setSentimentFilter] = useState<string>("all");
  const [purposeFilter, setPurposeFilter] = useState<string>("all");
  const [showFilters, setShowFilters] = useState(false);

  // Pagination and data state
  const [conversations, setConversations] = useState<Conversation[]>([]);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(5);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [pagination, setPagination] = useState({
    total: 0,
    totalPages: 0,
    hasNext: false,
    hasPrev: false,
  });

  // Fetch conversations from API
  useEffect(() => {
    const fetchConversations = async () => {
      if (!selectedAgent) return;

      try {
        setLoading(true);
        const { conversations: data, pagination: paginationData } = await agentsApi.getAgentConversations(
          selectedAgent.id,
          { page, limit }
        );
        setConversations(data || []);
        setPagination(paginationData || {});
        setError(null);
      } catch (err: any) {
        console.error('Failed to fetch conversations:', err);
        setError(err?.response?.data?.detail?.message || 'Failed to load conversations');
      } finally {
        setLoading(false);
      }
    };

    fetchConversations();
  }, [selectedAgent, page, limit]);

  // Filter conversations locally
  const filteredConversations = conversations.filter((conv) => {
    const matchesSearch =
      conv.customerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      conv.agentName.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSentiment =
      sentimentFilter === "all" || (conv.sentiment && conv.sentiment === sentimentFilter);
    const matchesPurpose =
      purposeFilter === "all" || (conv.purposeCategory && conv.purposeCategory === purposeFilter);
    return matchesSearch && matchesSentiment && matchesPurpose;
  });

  const getSentimentColor = (sentiment: string | null) => {
    if (!sentiment) return "bg-gray-500/10 text-gray-500";
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

  const getOutcomeColor = (outcome: string | null) => {
    if (!outcome) return "bg-gray-500/10 text-gray-500";
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
      {/* No Agent Selected */}
      {!selectedAgent && (
        <div className="text-center py-12 bg-card rounded-xl border border-border">
          <Bot className="w-12 h-12 mx-auto mb-3 text-muted-foreground" />
          <p className="text-sm text-muted-foreground">
            No agent selected. Please select an agent from the header.
          </p>
        </div>
      )}

      {selectedAgent && (
        <>
          {/* Header */}
          <div>
            <h1 className="text-2xl font-semibold text-foreground mb-1">Conversations</h1>
            <p className="text-sm text-muted-foreground">
              Browse and analyze all customer conversations for {selectedAgent.name}
            </p>
          </div>

          {/* Search and Filters */}
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search by customer or agent name..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 bg-card border border-border rounded-lg text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <button
                onClick={() => setShowFilters(!showFilters)}
                className={`px-4 py-2.5 rounded-lg text-sm font-medium transition-colors flex items-center gap-2 ${showFilters
                  ? "bg-primary text-primary-foreground"
                  : "bg-card border border-border text-muted-foreground hover:text-foreground"
                  }`}
              >
                <Filter className="w-4 h-4" />
                Filters
              </button>
            </div>

            {showFilters && (
              <div className="bg-card rounded-lg p-4 border border-border space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs text-muted-foreground mb-2 block">
                      Sentiment
                    </label>
                    <select
                      value={sentimentFilter}
                      onChange={(e) => setSentimentFilter(e.target.value)}
                      className="w-full px-3 py-2 bg-background border border-border rounded-lg text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                      <option value="all">All Sentiments</option>
                      <option value="positive">Positive</option>
                      <option value="neutral">Neutral</option>
                      <option value="negative">Negative</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-xs text-muted-foreground mb-2 block">
                      Purpose
                    </label>
                    <select
                      value={purposeFilter}
                      onChange={(e) => setPurposeFilter(e.target.value)}
                      className="w-full px-3 py-2 bg-background border border-border rounded-lg text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                      <option value="all">All Purposes</option>
                      <option value="sales">Sales</option>
                      <option value="booking">Booking</option>
                      <option value="support">Support</option>
                      <option value="complaint">Complaint</option>
                    </select>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Results and Pagination Controls */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              Showing {filteredConversations.length} of {pagination.total || 0} conversations
            </p>

            <div className="flex items-center gap-3">
              <div>
                <label className="text-xs text-muted-foreground mr-2">Per page:</label>
                <select
                  value={limit}
                  onChange={(e) => {
                    setLimit(parseInt(e.target.value));
                    setPage(1); // Reset to first page when limit changes
                  }}
                  className="px-3 py-2 bg-card border border-border rounded-lg text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value={5}>5</option>
                  <option value={10}>10</option>
                  <option value={15}>15</option>
                  <option value={20}>20</option>
                </select>
              </div>
            </div>
          </div>

          {/* Loading State */}
          {loading && (
            <div className="flex items-center justify-center py-12">
              <div className="text-center">
                <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4" />
                <p className="text-muted-foreground">Loading conversations...</p>
              </div>
            </div>
          )}

          {/* Error State */}
          {error && !loading && (
            <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-4 text-center">
              <p className="text-destructive">{error}</p>
            </div>
          )}

          {/* Conversations List */}
          {!loading && !error && (
            <div className="space-y-3">
              {filteredConversations.map((conv) => (
                <Link
                  key={conv.id}
                  to={`/conversations/${conv.id}`}
                  state={{
                    purposeCategory: conv.purposeCategory,
                    sentiment: conv.sentiment,
                    outcomeCategory: conv.outcomeCategory
                  }}
                  className="block bg-card rounded-xl p-5 border border-border hover:border-primary/50 transition-all hover:shadow-lg"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-start gap-4">
                      <div className="p-2.5 bg-primary/10 rounded-lg">
                        <MessageSquare className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-base font-semibold text-foreground mb-1">
                          {conv.customerName}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {conv.agentName} • {conv.channel}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className={`text-xs px-2.5 py-1 rounded-full ${getSentimentColor(conv.sentiment)}`}>
                        {conv.sentiment || "N/A"}
                      </span>
                      <span className={`text-xs px-2.5 py-1 rounded-full ${getOutcomeColor(conv.outcomeCategory)}`}>
                        {conv.outcomeCategory || "N/A"}
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5" />
                      {new Date(conv.timestamp).toLocaleString()}
                    </div>
                    <div>
                      Purpose: <span className="text-foreground font-medium">{conv.purposeCategory || "N/A"}</span>
                    </div>
                    <div>
                      Duration: <span className="text-foreground font-medium">{conv.duration}</span>
                    </div>
                    <div>
                      Messages: <span className="text-foreground font-medium">{conv.messageCount}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}

          {/* Empty State */}
          {!loading && !error && filteredConversations.length === 0 && (
            <div className="text-center py-12 bg-card rounded-xl border border-border">
              <MessageSquare className="w-12 h-12 mx-auto mb-3 text-muted-foreground" />
              <p className="text-sm text-muted-foreground">
                No conversations found matching your criteria
              </p>
            </div>
          )}

          {/* Pagination */}
          {!loading && !error && pagination.totalPages > 1 && (
            <div className="flex items-center justify-center gap-2 mt-6">
              <button
                onClick={() => setPage(Math.max(1, page - 1))}
                disabled={!pagination.hasPrev}
                className="p-2 rounded-lg border border-border hover:bg-card disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              <div className="flex items-center gap-2">
                {Array.from({ length: pagination.totalPages }, (_, i) => i + 1).map((pageNum) => (
                  <button
                    key={pageNum}
                    onClick={() => setPage(pageNum)}
                    className={`w-8 h-8 rounded-lg text-sm font-medium transition-colors ${page === pageNum
                      ? "bg-primary text-primary-foreground"
                      : "border border-border hover:bg-card"
                      }`}
                  >
                    {pageNum}
                  </button>
                ))}
              </div>

              <button
                onClick={() => setPage(Math.min(pagination.totalPages, page + 1))}
                disabled={!pagination.hasNext}
                className="p-2 rounded-lg border border-border hover:bg-card disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                <ChevronRight className="w-4 h-4" />
              </button>

              <span className="ml-4 text-sm text-muted-foreground">
                Page {page} of {pagination.totalPages}
              </span>
            </div>
          )}
        </>
      )}
    </div>
  );
}
