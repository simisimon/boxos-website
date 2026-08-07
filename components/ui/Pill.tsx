import type { ReactNode } from "react";

type Intent = "neutral" | "primary" | "success" | "warning" | "danger";

const intentClasses: Record<Intent, string> = {
  neutral: "text-app-muted bg-app-surface-alt border-app-border",
  primary: "text-app-primary bg-app-primary/14 border-app-primary/35",
  success: "text-app-success bg-app-success/20 border-app-success/35",
  warning: "text-app-warning bg-app-warning/20 border-app-warning/35",
  danger: "text-app-danger bg-app-danger/20 border-app-danger/35",
};

export function Pill({
  label,
  icon,
  intent = "neutral",
  dense = false,
}: {
  label: string;
  icon?: ReactNode;
  intent?: Intent;
  dense?: boolean;
}) {
  return (
    <span
      className={`inline-flex items-center gap-1 rounded-[2px] border font-mono font-bold uppercase tracking-[0.14em] ${
        dense ? "px-2 py-0.5 text-[9px]" : "px-2.5 py-1 text-[10px]"
      } ${intentClasses[intent]}`}
    >
      {icon}
      {label}
    </span>
  );
}
