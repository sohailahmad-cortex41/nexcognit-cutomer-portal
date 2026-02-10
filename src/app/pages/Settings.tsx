import { useState, useEffect } from "react";
import { Save, Check } from "lucide-react";
import { useAuth } from "@/app/context/AuthContext";

export function Settings() {
  const { user } = useAuth();
  const [saved, setSaved] = useState(false);
  
  // Profile form state - initialize with user data
  const [profile, setProfile] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
  });

  // Update profile when user data is loaded
  useEffect(() => {
    if (user) {
      setProfile({
        name: user.name || "",
        email: user.email || "",
        company: user.organizationName || "",
        phone: "",
      });
    }
  }, [user]);

  const handleSave = () => {
    // TODO: Integrate with API to save profile
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <div className="p-6 max-w-4xl mx-auto space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-semibold text-foreground mb-1">Settings</h1>
        <p className="text-sm text-muted-foreground">
          Manage your account settings and preferences
        </p>
      </div>

      {/* Profile Section */}
      <div className="bg-card rounded-xl border border-border p-6">
        <div className="space-y-6">
          <div>
            <h2 className="text-lg font-semibold text-foreground mb-1">Profile Information</h2>
            <p className="text-sm text-muted-foreground">
              Update your account profile information and email address
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Full Name
              </label>
              <input
                type="text"
                value={profile.name}
                onChange={(e) => setProfile({ ...profile, name: e.target.value })}
                className="w-full px-3 py-2 bg-background border border-border rounded-lg text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Email Address
              </label>
              <input
                type="email"
                value={profile.email}
                onChange={(e) => setProfile({ ...profile, email: e.target.value })}
                className="w-full px-3 py-2 bg-background border border-border rounded-lg text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Organization
              </label>
              <input
                type="text"
                value={profile.company}
                disabled
                className="w-full px-3 py-2 bg-muted/30 border border-border rounded-lg text-sm text-muted-foreground cursor-not-allowed"
              />
              <p className="text-xs text-muted-foreground mt-1">
                Contact support to change organization
              </p>
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                value={profile.phone}
                onChange={(e) => setProfile({ ...profile, phone: e.target.value })}
                placeholder="Optional"
                className="w-full px-3 py-2 bg-background border border-border rounded-lg text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
            </div>
          </div>

          <div className="flex justify-end">
            <button
              onClick={handleSave}
              className="px-6 py-2.5 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors flex items-center gap-2"
            >
              {saved ? (
                <>
                  <Check className="w-4 h-4" />
                  Saved
                </>
              ) : (
                <>
                  <Save className="w-4 h-4" />
                  Save Changes
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}