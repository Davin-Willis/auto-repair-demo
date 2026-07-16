import { shop } from "@/lib/content";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Why us", href: "#why-us" },
  { label: "Hours", href: "#hours" },
];

export function Nav() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line bg-base/85 backdrop-blur">
      <nav className="mx-auto flex max-w-[1200px] items-center justify-between px-6 py-4">
        <a
          href="#top"
          className="font-display text-lg tracking-wide text-ink uppercase"
        >
          Crank <span className="text-orange">&amp;</span> Torque
        </a>
        <div className="hidden items-center gap-8 font-mono text-xs tracking-[0.15em] uppercase md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-muted transition-colors hover:text-ink"
            >
              {link.label}
            </a>
          ))}
        </div>
        <a
          href={shop.phoneHref}
          className="border border-orange px-4 py-2 font-mono text-xs tracking-[0.15em] text-orange uppercase transition-colors duration-300 hover:bg-orange hover:text-base"
        >
          {shop.phoneDisplay}
        </a>
      </nav>
    </header>
  );
}
