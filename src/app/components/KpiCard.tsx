import { LucideIcon } from "lucide-react";

interface KpiCardProps {
  title: string;
  value: string | number;
  subtitle?: string;
  icon: LucideIcon;
  trend?: {
    value: string;
    positive: boolean;
  };
}

export function KpiCard({ title, value, subtitle, icon: Icon, trend }: KpiCardProps) {
  return (
    <div className="bg-card rounded-xl p-6 border border-border">
      <div className="flex items-start justify-between mb-4">
        <div className="p-2.5 bg-primary/10 rounded-lg">
          <Icon className="w-5 h-5 text-primary" />
        </div>
        {trend && (
          <div
            className={`text-xs font-medium px-2 py-1 rounded ${
              trend.positive
                ? "bg-[#10b981]/10 text-[#10b981]"
                : "bg-[#ef4444]/10 text-[#ef4444]"
            }`}
          >
            {trend.positive ? "+" : ""}{trend.value}
          </div>
        )}
      </div>
      <div>
        <p className="text-xs text-muted-foreground mb-1">{title}</p>
        <h3 className="text-2xl font-semibold text-foreground mb-1">{value}</h3>
        {subtitle && <p className="text-xs text-muted-foreground">{subtitle}</p>}
      </div>
    </div>
  );
}
