import type { ReactNode } from "react";

type Variant = "panel" | "hero" | "inset";

const variants: Record<Variant, string> = {
  panel:
    "bg-app-surface border border-app-border rounded-app-lg shadow-[0_14px_24px_-6px_rgb(0_0_0_/_0.5)]",
  hero: "bg-gradient-to-br from-app-surface-elevated to-app-surface border border-app-border-strong rounded-app-xl shadow-[0_22px_36px_-8px_rgb(0_0_0_/_0.6)]",
  inset: "bg-app-surface-alt border border-app-border rounded-app-md",
};

export function Card({
  variant = "panel",
  className = "",
  children,
}: {
  variant?: Variant;
  className?: string;
  children: ReactNode;
}) {
  return <div className={`${variants[variant]} ${className}`}>{children}</div>;
}
