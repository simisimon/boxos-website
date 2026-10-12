import { ArrowRight, TrendingUp, Users, CalendarClock, Flame } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Pill } from "@/components/ui/Pill";
import { DEMO_MAILTO } from "@/lib/constants";

const stats = [
  { label: "Active members", value: "118", icon: Users },
  { label: "Classes today", value: "9", icon: CalendarClock },
  { label: "PRs this week", value: "24", icon: TrendingUp },
  { label: "Attendance rate", value: "92%", icon: Flame },
];

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden border-b border-app-border">
      <div className="bg-grid absolute inset-0 [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,black,transparent)]" />
      <div className="pointer-events-none absolute left-1/2 top-[-10rem] h-[26rem] w-[26rem] -translate-x-1/2 rounded-full bg-app-primary/10 blur-[120px]" />

      <div className="relative mx-auto grid max-w-6xl gap-16 px-6 py-24 lg:grid-cols-[1.05fr_1fr] lg:items-center lg:py-32">
        <div>
          <div className="mb-5">
            <Pill label="Spare-time project · in development" intent="primary" />
          </div>
          <p className="mb-5 font-mono text-xs font-bold uppercase tracking-[0.2em] text-app-primary">
            Operations platform for CrossFit boxes
          </p>
          <h1 className="font-display text-4xl font-semibold leading-[1.08] tracking-tight text-app-text sm:text-5xl lg:text-[3.25rem]">
            Run your box like a system,
            <br />
            not a spreadsheet.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-app-muted">
            BoxOS brings scheduling, programming, membership, and analytics
            into one operations console built for CrossFit boxes — so you
            spend less time juggling tools and more time coaching.
          </p>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <Button as="a" href={DEMO_MAILTO} icon={<ArrowRight size={18} />}>
              Request a demo
            </Button>
            <Button as="a" href="#features" variant="secondary">
              See what&rsquo;s inside
            </Button>
          </div>
        </div>

        <Card variant="hero" className="p-5 sm:p-6">
          <div className="mb-5 flex items-center justify-between">
            <div>
              <p className="font-mono text-[10px] font-bold uppercase tracking-[0.16em] text-app-subtle">
                Dashboard
              </p>
              <p className="font-display text-lg font-semibold text-app-text">
                Iron Yard CrossFit
              </p>
            </div>
            <Pill label="Live" intent="success" dense />
          </div>
          <div className="grid grid-cols-2 gap-3">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-app-lg border border-app-border bg-app-surface-alt p-4"
              >
                <div className="mb-2 flex items-center justify-between">
                  <p className="font-mono text-[10px] font-bold uppercase tracking-[0.14em] text-app-subtle">
                    {stat.label}
                  </p>
                  <stat.icon size={14} className="text-app-primary" />
                </div>
                <p className="font-display text-2xl font-bold text-app-text">
                  {stat.value}
                </p>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
}
