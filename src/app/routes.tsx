import { createBrowserRouter } from "react-router";
import { Layout } from "@/app/components/Layout";
import { Login } from "@/app/pages/Login";
import { Dashboard } from "@/app/pages/Dashboard";
import { Agents } from "@/app/pages/Agents";
import { AgentDetail } from "@/app/pages/AgentDetail";
import { Conversations } from "@/app/pages/Conversations";
import { ConversationDetail } from "@/app/pages/ConversationDetail";
import { Reports } from "@/app/pages/Reports";
import { Settings } from "@/app/pages/Settings";
import { Notifications } from "@/app/pages/Notifications";
import { NotFound } from "@/app/components/NotFound";
import { ProtectedRoute } from "@/app/components/ProtectedRoute";

export const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <Layout />
      </ProtectedRoute>
    ),
    children: [
      {
        index: true,
        element: <Dashboard />
      },
      {
        path: "agents",
        element: <Agents />
      },
      {
        path: "agents/:id",
        element: <AgentDetail />
      },
      {
        path: "conversations",
        element: <Conversations />
      },
      {
        path: "conversations/:id",
        element: <ConversationDetail />
      },
      {
        path: "reports",
        element: <Reports />
      },
      {
        path: "settings",
        element: <Settings />
      },
      {
        path: "notifications",
        element: <Notifications />
      },
      {
        path: "*",
        element: <NotFound />
      },
    ],
  },
]);
