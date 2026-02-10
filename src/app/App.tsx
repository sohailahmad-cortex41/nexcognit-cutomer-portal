import { RouterProvider } from "react-router";
import { AuthProvider } from "@/app/context/AuthContext";
import { AgentProvider } from "@/app/context/AgentContext";
import { Toaster } from "sonner";
import { router } from "@/app/routes.tsx";

export default function App() {
  return (
    <AuthProvider>
      <AgentProvider>
        <Toaster
          position="top-right"
          richColors
          closeButton
          theme="dark"
        />
        <RouterProvider router={router} />
      </AgentProvider>
    </AuthProvider>
  );
}