import { Bell, X, CheckCircle, AlertTriangle, Info, TrendingUp, Bot, MessageSquare } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router";
import { getRelativeDate } from "@/app/utils/dateUtils";

interface Notification {
  id: string;
  type: "success" | "warning" | "info" | "alert";
  title: string;
  message: string;
  timestamp: string;
  read: boolean;
  actionLink?: string;
  actionLabel?: string;
}

const mockNotifications: Notification[] = [
  {
    id: "1",
    type: "alert",
    title: "Negative Sentiment Detected",
    message: "Support Assistant received 3 negative sentiment conversations in the last hour. Review required.",
    timestamp: "2026-02-03T10:45:00",
    read: false,
    actionLink: "/conversations",
    actionLabel: "View Conversations",
  },
  {
    id: "2",
    type: "success",
    title: "Sales Target Achieved",
    message: "Sales Agent Pro has successfully closed 15 deals today, exceeding the daily target by 25%.",
    timestamp: "2026-02-03T09:30:00",
    read: false,
    actionLink: "/agents/1",
    actionLabel: "View Agent",
  },
  {
    id: "3",
    type: "info",
    title: "Weekly Report Available",
    message: "Your weekly performance report for Jan 27 - Feb 2 is now ready to download.",
    timestamp: "2026-02-03T08:00:00",
    read: true,
    actionLink: "/reports",
    actionLabel: "View Report",
  },
  {
    id: "4",
    type: "warning",
    title: "Agent Response Time Increased",
    message: "BookBot Scheduler's average response time has increased by 35% compared to last week.",
    timestamp: "2026-02-02T16:20:00",
    read: true,
    actionLink: "/agents/2",
    actionLabel: "View Details",
  },
  {
    id: "5",
    type: "success",
    title: "New Integration Connected",
    message: "Slack workspace successfully connected. Notifications will now be sent to #ai-agents channel.",
    timestamp: "2026-02-02T14:15:00",
    read: true,
  },
  {
    id: "6",
    type: "info",
    title: "System Maintenance Scheduled",
    message: "Scheduled maintenance on Feb 5, 2026 at 2:00 AM EST. Expected downtime: 30 minutes.",
    timestamp: "2026-02-01T11:00:00",
    read: true,
  },
  {
    id: "7",
    type: "alert",
    title: "API Rate Limit Warning",
    message: "You've used 85% of your monthly API quota. Consider upgrading your plan.",
    timestamp: "2026-01-31T18:45:00",
    read: true,
    actionLink: "/settings",
    actionLabel: "Upgrade Plan",
  },
  {
    id: "8",
    type: "success",
    title: "Agent Training Completed",
    message: "E-commerce Helper has completed training and is now ready for deployment.",
    timestamp: "2026-01-30T10:30:00",
    read: true,
    actionLink: "/agents/5",
    actionLabel: "View Agent",
  },
  {
    id: "9",
    type: "info",
    title: "New Feature: AI Insights",
    message: "Generate AI-powered insights for any conversation with a single click. Try it now!",
    timestamp: "2026-01-29T09:00:00",
    read: true,
    actionLink: "/conversations",
    actionLabel: "Explore",
  },
  {
    id: "10",
    type: "warning",
    title: "Failed Conversations Spike",
    message: "20% increase in failed conversations detected in the last 24 hours. Investigation recommended.",
    timestamp: "2026-01-28T15:20:00",
    read: true,
    actionLink: "/dashboard",
    actionLabel: "View Dashboard",
  },
];

export function Notifications() {
  const [notifications, setNotifications] = useState(mockNotifications);
  const [filter, setFilter] = useState<"all" | "unread">("all");

  const unreadCount = notifications.filter((n) => !n.read).length;

  const filteredNotifications =
    filter === "unread" ? notifications.filter((n) => !n.read) : notifications;

  const markAsRead = (id: string) => {
    setNotifications(
      notifications.map((n) => (n.id === id ? { ...n, read: true } : n))
    );
  };

  const markAllAsRead = () => {
    setNotifications(notifications.map((n) => ({ ...n, read: true })));
  };

  const deleteNotification = (id: string) => {
    setNotifications(notifications.filter((n) => n.id !== id));
  };

  const getIcon = (type: string) => {
    switch (type) {
      case "success":
        return <CheckCircle className="w-5 h-5 text-[#10b981]" />;
      case "warning":
        return <AlertTriangle className="w-5 h-5 text-[#f59e0b]" />;
      case "alert":
        return <AlertTriangle className="w-5 h-5 text-[#ef4444]" />;
      case "info":
      default:
        return <Info className="w-5 h-5 text-primary" />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case "success":
        return "bg-[#10b981]/10 border-[#10b981]/20";
      case "warning":
        return "bg-[#f59e0b]/10 border-[#f59e0b]/20";
      case "alert":
        return "bg-[#ef4444]/10 border-[#ef4444]/20";
      case "info":
      default:
        return "bg-primary/10 border-primary/20";
    }
  };

  return (
    <div className="p-6 max-w-5xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-foreground mb-1">Notifications</h1>
          <p className="text-sm text-muted-foreground">
            Stay updated with your AI agents' performance and system alerts
          </p>
        </div>
        {unreadCount > 0 && (
          <button
            onClick={markAllAsRead}
            className="text-sm text-primary hover:underline"
          >
            Mark all as read
          </button>
        )}
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-card rounded-xl p-4 border border-border">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-primary/10">
              <Bell className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Total Notifications</p>
              <p className="text-xl font-semibold text-foreground">{notifications.length}</p>
            </div>
          </div>
        </div>

        <div className="bg-card rounded-xl p-4 border border-border">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-[#ef4444]/10">
              <AlertTriangle className="w-5 h-5 text-[#ef4444]" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Unread</p>
              <p className="text-xl font-semibold text-foreground">{unreadCount}</p>
            </div>
          </div>
        </div>

        <div className="bg-card rounded-xl p-4 border border-border">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-[#10b981]/10">
              <CheckCircle className="w-5 h-5 text-[#10b981]" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Read</p>
              <p className="text-xl font-semibold text-foreground">
                {notifications.length - unreadCount}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Filter */}
      <div className="flex items-center gap-2">
        <button
          onClick={() => setFilter("all")}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
            filter === "all"
              ? "bg-primary text-primary-foreground"
              : "bg-background border border-border text-muted-foreground hover:text-foreground hover:bg-muted"
          }`}
        >
          All ({notifications.length})
        </button>
        <button
          onClick={() => setFilter("unread")}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
            filter === "unread"
              ? "bg-primary text-primary-foreground"
              : "bg-background border border-border text-muted-foreground hover:text-foreground hover:bg-muted"
          }`}
        >
          Unread ({unreadCount})
        </button>
      </div>

      {/* Notifications List */}
      <div className="space-y-3">
        {filteredNotifications.length === 0 ? (
          <div className="bg-card rounded-xl p-12 border border-border text-center">
            <Bell className="w-12 h-12 mx-auto mb-3 text-muted-foreground" />
            <p className="text-sm text-muted-foreground">
              {filter === "unread"
                ? "No unread notifications"
                : "No notifications yet"}
            </p>
          </div>
        ) : (
          filteredNotifications.map((notification) => (
            <div
              key={notification.id}
              className={`bg-card rounded-xl p-4 border transition-all ${
                notification.read
                  ? "border-border"
                  : `border-2 ${getTypeColor(notification.type)}`
              }`}
            >
              <div className="flex items-start gap-4">
                <div className="shrink-0 mt-1">{getIcon(notification.type)}</div>
                
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-3 mb-1">
                    <h3 className="text-sm font-semibold text-foreground">
                      {notification.title}
                    </h3>
                    <div className="flex items-center gap-2 shrink-0">
                      {!notification.read && (
                        <button
                          onClick={() => markAsRead(notification.id)}
                          className="text-xs text-primary hover:underline"
                        >
                          Mark read
                        </button>
                      )}
                      <button
                        onClick={() => deleteNotification(notification.id)}
                        className="p-1 rounded hover:bg-muted transition-colors"
                      >
                        <X className="w-4 h-4 text-muted-foreground" />
                      </button>
                    </div>
                  </div>
                  
                  <p className="text-sm text-muted-foreground mb-2">
                    {notification.message}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <p className="text-xs text-muted-foreground">
                      {getRelativeDate(notification.timestamp)} • {new Date(notification.timestamp).toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true })}
                    </p>
                    
                    {notification.actionLink && (
                      <Link
                        to={notification.actionLink}
                        className="text-xs text-primary hover:underline font-medium"
                      >
                        {notification.actionLabel}
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
