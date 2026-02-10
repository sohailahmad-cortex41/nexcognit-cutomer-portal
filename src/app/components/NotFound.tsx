import { Link } from "react-router";
import { AlertCircle, Home } from "lucide-react";

export function NotFound() {
  return (
    <div className="min-h-screen bg-[#0f1729] flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-[#1d283a] mb-6">
          <AlertCircle className="w-10 h-10 text-blue-400" />
        </div>
        
        <h1 className="text-6xl font-bold text-white mb-4">404</h1>
        
        <h2 className="text-2xl font-semibold text-white mb-3">
          Page Not Found
        </h2>
        
        <p className="text-gray-400 mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
        >
          <Home className="w-5 h-5" />
          Back to Dashboard
        </Link>
      </div>
    </div>
  );
}
