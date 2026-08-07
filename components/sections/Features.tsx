import {
  BarChart3,
  CalendarClock,
  Dumbbell,
  MessagesSquare,
  Users,
} from "lucide-react";
import { AccentBadge } from "@/components/ui/AccentBadge";
import { Card } from "@/components/ui/Card";
import { SectionHeader } from "@/components/ui/SectionHeader";

const features = [
  {
    icon: Users,
    title: "Members",
    description:
      "Roster, memberships, and join requests in one filterable table — approve, manage, and message members without leaving the console.",
  },
  {
    icon: BarChart3,
    title: "Analytics",
    description:
      "Real business numbers: attendance trends, revenue signals, and engagement — the metrics that tell you whether the box is actually healthy.",
  },
  {
    icon: CalendarClock,
    title: "Scheduling",
    description:
      "Class calendars, bookings, and waitlists that manage themselves — athletes book, you see exactly who's coming.",
  },
  {
    icon: Dumbbell,
    title: "Programming",
    description:
      "Build and publish WODs, import workouts, and keep a whiteboard history athletes actually check.",
  },
  {
    icon: MessagesSquare,
    title: "Community",
    description:
      "Announcements, box-wide chat, and shared stats that make the box feel like a team, not a gym membership.",
  },
];

export function Features() {
  return (
    <section id="features" className="border-b border-app-border py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          eyebrow="All-in-one ops"
          title="Everything running your box, in one place."
          subtitle="Five systems your box already needs — replacing the spreadsheet-and-app-stack most boxes duct-tape together."
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <Card key={feature.title} variant="panel" className="p-6">
              <AccentBadge icon={feature.icon} />
              <h3 className="mt-5 font-display text-xl font-semibold text-app-text">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-app-muted">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
