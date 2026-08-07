import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { DEMO_MAILTO } from "@/lib/constants";

export function CtaBand() {
  return (
    <section id="contact" className="relative overflow-hidden py-24">
      <div className="bg-grid absolute inset-0 opacity-60" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[22rem] w-[22rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-app-primary/10 blur-[110px]" />
      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <p className="mb-4 font-mono text-xs font-bold uppercase tracking-[0.2em] text-app-primary">
          Get started
        </p>
        <h2 className="font-display text-3xl font-semibold tracking-tight text-app-text sm:text-4xl">
          Ready to see BoxOS running your box?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-lg text-app-muted">
          Tell us about your box and we&rsquo;ll walk you through a live demo
          — scheduling, programming, members, and analytics, all in one
          console.
        </p>
        <div className="mt-9 flex justify-center">
          <Button as="a" href={DEMO_MAILTO} icon={<ArrowRight size={18} />}>
            Request a demo
          </Button>
        </div>
      </div>
    </section>
  );
}
