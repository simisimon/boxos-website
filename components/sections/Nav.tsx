import { Button } from "@/components/ui/Button";
import { DEMO_MAILTO } from "@/lib/constants";

const links = [
  { href: "#features", label: "Features" },
  { href: "#product", label: "Product" },
  { href: "#athletes", label: "Athletes" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-app-border bg-app-bg/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a
          href="#top"
          className="font-display text-lg font-bold tracking-tight text-app-text"
        >
          BOX<span className="text-app-primary">OS</span>
        </a>
        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-mono text-xs font-semibold uppercase tracking-[0.14em] text-app-muted transition-colors hover:text-app-primary"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <Button as="a" href={DEMO_MAILTO} size="md" className="hidden sm:inline-flex">
          Request a demo
        </Button>
      </div>
    </header>
  );
}
