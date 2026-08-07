import { CalendarCheck, MessageCircle, TrendingUp } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";

const items = [
  {
    icon: TrendingUp,
    title: "Track every PR",
    description:
      "Log lifts and benchmarks, watch progress over time, and see personal records the moment they happen.",
  },
  {
    icon: CalendarCheck,
    title: "Book classes in seconds",
    description:
      "See the schedule, grab a spot or a waitlist slot, and get reminded before class starts.",
  },
  {
    icon: MessageCircle,
    title: "Stay part of the box",
    description:
      "Announcements, whiteboard results, and box-wide chat — the same app coaches use to run things.",
  },
];

export function AthleteProof() {
  return (
    <section id="athletes" className="border-b border-app-border py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          eyebrow="For your athletes"
          title="The same system, built for the people on the floor."
          subtitle="BoxOS isn't just a backoffice — it's the app your members open every day to book, log, and stay connected."
        />
        <div className="mt-14 grid gap-8 sm:grid-cols-3">
          {items.map((item) => (
            <div key={item.title}>
              <item.icon size={22} className="text-app-primary" />
              <h3 className="mt-4 font-display text-lg font-semibold text-app-text">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-app-muted">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
