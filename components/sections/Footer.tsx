import { CONTACT_EMAIL, CONTACT_MAILTO } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="border-t border-app-border py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 text-center sm:flex-row sm:text-left">
        <div>
          <p className="font-display text-base font-bold tracking-tight text-app-text">
            BOX<span className="text-app-primary">OS</span>
          </p>
          <p className="mt-1 text-xs text-app-subtle">
            Operations platform for CrossFit boxes.
          </p>
          <p className="mt-1 text-xs text-app-subtle">
            A spare-time project by Sebastian Simon — not a commercial product.
          </p>
        </div>
        <a
          href={CONTACT_MAILTO}
          className="font-mono text-xs font-semibold uppercase tracking-[0.14em] text-app-muted hover:text-app-primary"
        >
          {CONTACT_EMAIL}
        </a>
      </div>
    </footer>
  );
}
