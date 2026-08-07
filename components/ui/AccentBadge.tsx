import type { LucideIcon } from "lucide-react";

export function AccentBadge({
  icon: Icon,
  size = 44,
}: {
  icon: LucideIcon;
  size?: number;
}) {
  return (
    <div
      className="flex shrink-0 items-center justify-center rounded-app-md border border-app-primary/30 bg-app-primary/[0.12]"
      style={{ width: size, height: size }}
    >
      <Icon className="text-app-primary" size={size * 0.48} />
    </div>
  );
}
