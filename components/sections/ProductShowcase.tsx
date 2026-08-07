import { Card } from "@/components/ui/Card";
import { Pill } from "@/components/ui/Pill";
import { SectionHeader } from "@/components/ui/SectionHeader";

const schedule = [
  { time: "06:00", name: "WOD", coach: "Coach Mara", spots: "16/16", status: "Full" as const },
  { time: "09:00", name: "Open Gym", coach: "Self-guided", spots: "6/20", status: "Booked" as const },
  { time: "17:30", name: "WOD", coach: "Coach Devon", spots: "14/16", status: "Booked" as const },
  { time: "18:30", name: "WOD", coach: "Coach Devon", spots: "16/16", status: "Waitlist" as const },
];

const statusIntent = {
  Full: "danger",
  Booked: "success",
  Waitlist: "warning",
} as const;

const leaderboard = [
  { name: "J. Alvarez", result: "4:12", pr: true },
  { name: "S. Okafor", result: "4:35", pr: false },
  { name: "T. Bergström", result: "4:41", pr: true },
  { name: "M. Reyes", result: "4:58", pr: false },
];

const members = [
  { name: "Priya Nair", plan: "Unlimited", status: "Active", visit: "Today" },
  { name: "Kofi Boateng", plan: "8x / month", status: "Active", visit: "Yesterday" },
  { name: "Elena Vasquez", plan: "Unlimited", status: "Overdue", visit: "6 days ago" },
  { name: "Noah Kim", plan: "Drop-in", status: "Active", visit: "Today" },
];

export function ProductShowcase() {
  return (
    <section id="product" className="border-b border-app-border bg-app-bg-soft py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          eyebrow="Inside the console"
          title="Built to look like an ops console, not a toy."
          subtitle="Sharp, dense, information-first — because the person running this screen is mid-shift, not browsing."
        />

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          <Card variant="panel" className="p-5">
            <p className="font-mono text-[10px] font-bold uppercase tracking-[0.14em] text-app-subtle">
              Today&rsquo;s schedule
            </p>
            <div className="mt-4 space-y-2">
              {schedule.map((row) => (
                <div
                  key={row.time}
                  className="flex items-center justify-between rounded-app-md border border-app-border bg-app-surface-alt px-3 py-2.5"
                >
                  <div>
                    <p className="font-mono text-xs font-semibold text-app-text">
                      {row.time} &middot; {row.name}
                    </p>
                    <p className="text-xs text-app-subtle">{row.coach}</p>
                  </div>
                  <div className="text-right">
                    <p className="mb-1 font-mono text-[11px] text-app-muted">
                      {row.spots}
                    </p>
                    <Pill label={row.status} intent={statusIntent[row.status]} dense />
                  </div>
                </div>
              ))}
            </div>
          </Card>

          <Card variant="panel" className="p-5">
            <p className="font-mono text-[10px] font-bold uppercase tracking-[0.14em] text-app-subtle">
              WOD whiteboard
            </p>
            <p className="mt-2 font-display text-lg font-semibold text-app-text">
              Tuesday &mdash; &ldquo;Grace&rdquo;
            </p>
            <p className="text-xs text-app-subtle">30 Clean &amp; Jerks for time</p>
            <div className="mt-4 space-y-2">
              {leaderboard.map((row, i) => (
                <div
                  key={row.name}
                  className="flex items-center justify-between rounded-app-md border border-app-border bg-app-surface-alt px-3 py-2.5"
                >
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs text-app-subtle">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-sm text-app-text">{row.name}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs font-semibold text-app-text">
                      {row.result}
                    </span>
                    {row.pr && <Pill label="PR" intent="primary" dense />}
                  </div>
                </div>
              ))}
            </div>
          </Card>

          <Card variant="panel" className="p-5">
            <p className="font-mono text-[10px] font-bold uppercase tracking-[0.14em] text-app-subtle">
              Members
            </p>
            <div className="mt-4 space-y-2">
              {members.map((row) => (
                <div
                  key={row.name}
                  className="flex items-center justify-between rounded-app-md border border-app-border bg-app-surface-alt px-3 py-2.5"
                >
                  <div>
                    <p className="text-sm text-app-text">{row.name}</p>
                    <p className="text-xs text-app-subtle">
                      {row.plan} &middot; {row.visit}
                    </p>
                  </div>
                  <Pill
                    label={row.status}
                    intent={row.status === "Active" ? "success" : "danger"}
                    dense
                  />
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
