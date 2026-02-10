import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { useAuth } from "@/app/context/AuthContext";
import { Lock, Mail, LogIn, Eye, EyeOff } from "lucide-react";
import { toast } from "sonner";

export function Login() {
  const navigate = useNavigate();
  const { login, isAuthenticated } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  // Redirect to dashboard if already logged in
  useEffect(() => {
    if (isAuthenticated) {
      navigate("/", { replace: true });
    }
  }, [isAuthenticated, navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await login({ email, password });
      toast.success("Login successful!", {
        description: "Welcome back to NextCognit Customer Portal",
      });
      navigate("/");
    } catch (err: any) {
      console.error('Login error full object:', err);
      console.error('Login error response:', err?.response);
      console.error('Login error response data:', err?.response?.data);
      console.error('Login error response data detail:', err?.response?.data?.detail);

      // Handle backend error format: { detail: { code: "INVALID_CREDENTIALS", message: "..." } }
      let errorMessage = "Unable to sign in. Please try again.";

      if (err?.response?.data?.detail?.message) {
        // Backend error with detail object
        errorMessage = err.response.data.detail.message;
      } else if (err?.response?.data?.message) {
        // Alternative backend error format
        errorMessage = err.response.data.message;
      } else if (err?.message) {
        // Generic error message
        errorMessage = err.message;
      }

      toast.error("Login Failed", {
        description: errorMessage,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f1729] via-[#1d283a] to-[#0f1729] flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        {/* Logo/Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-blue-600 mb-4">
            <Lock className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-white mb-2">
            NextCognit Customer Portal
          </h1>
          <p className="text-gray-400">
            Sign in to manage your AI Chat Agents
          </p>
        </div>

        {/* Login Form */}
        <div className="bg-[#1d283a] rounded-2xl border border-gray-700 p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email Field */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Email Address
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="w-5 h-5 text-gray-500" />
                </div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="owner@goldmaster.com"
                  required
                  className="w-full pl-10 pr-4 py-3 bg-[#0f1729] border border-gray-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Password Field */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="w-5 h-5 text-gray-500" />
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  required
                  className="w-full pl-10 pr-12 py-3 bg-[#0f1729] border border-gray-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((prev) => !prev)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500 hover:text-gray-300 transition-colors"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? (
                    <EyeOff className="w-5 h-5" />
                  ) : (
                    <Eye className="w-5 h-5" />
                  )}
                </button>
              </div>
            </div>

            {/* Remember Me */}
            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  className="w-4 h-4 rounded border-gray-600 bg-[#0f1729] text-blue-600 focus:ring-2 focus:ring-blue-500"
                />
                <span className="text-sm text-gray-400">Remember me</span>
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-600/50 disabled:cursor-not-allowed text-white font-medium rounded-lg transition-colors flex items-center justify-center gap-2"
            >
              {loading ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  Signing in...
                </>
              ) : (
                <>
                  <LogIn className="w-5 h-5" />
                  Sign In
                </>
              )}
            </button>
          </form>

        </div>

        {/* Footer */}
        <p className="text-center text-sm text-gray-500 mt-6">
          © 2026 NextCognit. All rights reserved.
        </p>
      </div>
    </div>
  );
}