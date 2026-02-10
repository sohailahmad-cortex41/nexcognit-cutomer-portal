import { Link, Outlet, useLocation, useNavigate } from "react-router";
import {
  LayoutDashboard,
  Bot,
  MessageSquare,
  FileText,
  Lightbulb,
  Bell,
  Settings,
  User,
  ChevronLeft,
  ChevronRight,
  LogOut,
  RefreshCw
} from "lucide-react";
import * as Tooltip from "@radix-ui/react-tooltip";
import { useState } from "react";
import { useAuth } from "@/app/context/AuthContext";
import { useAgent } from "@/app/context/AgentContext";
import { toast } from "sonner";
import logoImage from "../../assets/5005960e021232f9e7021db0c228553d8327784d.png";

const navItems = [
  { path: "/", label: "Dashboard", icon: LayoutDashboard },
  { path: "/agents", label: "Agents", icon: Bot },
  { path: "/conversations", label: "Conversations", icon: MessageSquare },
  { path: "/reports", label: "Reports", icon: FileText },
];


export function Layout() {
  const location = useLocation();
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const { agents, selectedAgent, setSelectedAgent, resetAgents } = useAgent();
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isLoggingOut, setIsLoggingOut] = useState(false);

  const isActive = (path: string) => {
    if (path === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(path);
  };

  const handleLogout = async () => {
    try {
      setIsLoggingOut(true);
      await logout();
      resetAgents(); // Clear agent data on logout
      toast.success("Logged out successfully", {
        description: "See you next time!",
      });
      navigate("/login");
    } catch (error) {
      console.error("Logout failed:", error);
      toast.error("Logout failed", {
        description: "Please try again",
      });
    } finally {
      setIsLoggingOut(false);
    }
  };

  return (
    <Tooltip.Provider delayDuration={100}>
      <div className="flex h-screen bg-background">
        {/* Sidebar */}
        <aside className={`bg-sidebar border-r border-border flex flex-col transition-all duration-300 ${isCollapsed ? "w-20" : "w-64"
          }`}>
          {/* Logo/Brand with Collapse Button */}
          <div className={`border-b border-border ${isCollapsed ? "p-4" : "p-6"}`}>
            {isCollapsed ? (
              <div className="flex flex-col items-center gap-3">
                <div className="w-10 h-10 shrink-0">
                  <img src={logoImage} alt="NexCognit Logo" className="w-full h-full object-contain" />
                </div>
                <button
                  onClick={() => setIsCollapsed(!isCollapsed)}
                  className="p-1.5 rounded-lg transition-colors text-muted-foreground hover:bg-sidebar-accent/50 hover:text-sidebar-accent-foreground"
                  title="Expand sidebar"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            ) : (
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 shrink-0">
                    <img src={logoImage} alt="NexCognit Logo" className="w-full h-full object-contain" />
                  </div>
                  <div>
                    <h1 className="text-base text-foreground font-semibold">NexCognit</h1>
                    <p className="text-xs text-muted-foreground">Customer Portal</p>
                  </div>
                </div>
                <button
                  onClick={() => setIsCollapsed(!isCollapsed)}
                  className="p-1.5 rounded-lg transition-colors text-muted-foreground hover:bg-sidebar-accent/50 hover:text-sidebar-accent-foreground shrink-0"
                  title="Collapse sidebar"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-4 space-y-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const active = isActive(item.path);

              const linkContent = (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors ${active
                    ? "bg-sidebar-accent text-sidebar-accent-foreground"
                    : "text-muted-foreground hover:bg-sidebar-accent/50 hover:text-sidebar-accent-foreground"
                    } ${isCollapsed ? "justify-center" : ""}`}
                >
                  <Icon className="w-5 h-5 shrink-0" />
                  {!isCollapsed && <span className="text-sm font-medium">{item.label}</span>}
                </Link>
              );

              if (isCollapsed) {
                return (
                  <Tooltip.Root key={item.path}>
                    <Tooltip.Trigger asChild>
                      {linkContent}
                    </Tooltip.Trigger>
                    <Tooltip.Portal>
                      <Tooltip.Content
                        side="right"
                        className="bg-popover text-popover-foreground px-3 py-2 rounded-lg text-sm shadow-lg border border-border z-50"
                        sideOffset={5}
                      >
                        {item.label}
                        <Tooltip.Arrow className="fill-popover" />
                      </Tooltip.Content>
                    </Tooltip.Portal>
                  </Tooltip.Root>
                );
              }

              return linkContent;
            })}
          </nav>

          {/* User Section */}
          <div className="p-4 border-t border-border space-y-2">
            {isCollapsed ? (
              <>
                <Tooltip.Root>
                  <Tooltip.Trigger asChild>
                    <div className="flex justify-center">
                      <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center cursor-pointer hover:bg-blue-700 transition-colors">
                        <User className="w-4 h-4 text-white" />
                      </div>
                    </div>
                  </Tooltip.Trigger>
                  <Tooltip.Portal>
                    <Tooltip.Content
                      side="right"
                      className="bg-popover text-popover-foreground px-3 py-2 rounded-lg text-sm shadow-lg border border-border z-50"
                      sideOffset={5}
                    >
                      {user?.name || "User"}
                      <Tooltip.Arrow className="fill-popover" />
                    </Tooltip.Content>
                  </Tooltip.Portal>
                </Tooltip.Root>

                <Tooltip.Root>
                  <Tooltip.Trigger asChild>
                    <button
                      onClick={handleLogout}
                      className="w-full flex justify-center p-2 rounded-lg hover:bg-sidebar-accent/50 text-muted-foreground hover:text-destructive transition-colors"
                    >
                      <LogOut className="w-4 h-4" />
                    </button>
                  </Tooltip.Trigger>
                  <Tooltip.Portal>
                    <Tooltip.Content
                      side="right"
                      className="bg-popover text-popover-foreground px-3 py-2 rounded-lg text-sm shadow-lg border border-border z-50"
                      sideOffset={5}
                    >
                      Logout
                      <Tooltip.Arrow className="fill-popover" />
                    </Tooltip.Content>
                  </Tooltip.Portal>
                </Tooltip.Root>
              </>
            ) : (
              <>
                <div className="flex items-center gap-3 px-3 py-2">
                  <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center shrink-0">
                    <User className="w-4 h-4 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-foreground font-medium truncate">{user?.name || "User"}</p>
                    <p className="text-xs text-muted-foreground truncate">{user?.email || ""}</p>
                  </div>
                </div>

                <button
                  onClick={handleLogout}
                  disabled={isLoggingOut}
                  className="w-full flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-sidebar-accent/50 text-muted-foreground hover:text-destructive transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {isLoggingOut ? (
                    <RefreshCw className="w-4 h-4 animate-spin" />
                  ) : (
                    <LogOut className="w-4 h-4" />
                  )}
                  <span className="text-sm font-medium">
                    {isLoggingOut ? "Logging out..." : "Logout"}
                  </span>
                </button>
              </>
            )}
          </div>
        </aside>

        {/* Main Content */}
        <div className="flex-1 flex flex-col overflow-hidden">
          {/* Top Bar */}
          <header className="h-16 bg-background border-b border-border flex items-center justify-between px-6">
            <div>
              <p className="text-xs text-muted-foreground">
                Monday, Feb 9, 2026
                {/* • {new Date().toLocaleTimeString()} */}
              </p>
            </div>
            <div className="flex items-center gap-4">
              {/* Agent Selector - Only show if multiple agents */}
              {agents.length > 1 && selectedAgent && (
                <div className="flex items-center gap-2">
                  <Bot className="w-4 h-4 text-muted-foreground" />
                  <select
                    value={selectedAgent.id}
                    onChange={(e) => {
                      const agent = agents.find(a => a.id === e.target.value);
                      if (agent) {
                        setSelectedAgent(agent);
                        toast.success(`Switched to ${agent.name}`, {
                          description: `Now viewing data for ${agent.name}`,
                        });
                      }
                    }}
                    className="px-3 py-1.5 bg-card border border-border rounded-lg text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    {agents.map((agent) => (
                      <option key={agent.id} value={agent.id}>
                        {agent.name}
                      </option>
                    ))}
                  </select>
                </div>
              )}

              {/* Organization Badge */}
              {user?.organizationName && (
                <div className="px-3 py-1.5 rounded-lg bg-blue-600/10 border border-blue-600/20">
                  <p className="text-xs font-medium text-blue-400">{user.organizationName}</p>
                </div>
              )}

              {/* <Link
                to="/notifications"
                className="p-2 rounded-lg hover:bg-muted transition-colors relative"
              >
                <Bell className="w-5 h-5 text-muted-foreground" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-destructive rounded-full"></span>
              </Link>
              <Link
                to="/settings"
                className="p-2 rounded-lg hover:bg-muted transition-colors"
              >
                <Settings className="w-5 h-5 text-muted-foreground" />
              </Link> */}
            </div>
          </header>

          {/* Page Content */}
          <main className="flex-1 overflow-auto">
            <Outlet />
          </main>
        </div>
      </div>
    </Tooltip.Provider>
  );
}