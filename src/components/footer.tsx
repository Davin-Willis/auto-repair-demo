import { shop } from "@/lib/content";

export function Footer() {
  return (
    <footer>
      <div className="hazard h-2 opacity-60" aria-hidden="true" />
      <div className="mx-auto flex max-w-[1200px] flex-col gap-8 px-6 py-12 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="font-display text-xl tracking-wide text-ink uppercase">
            Crank <span className="text-orange">&amp;</span> Torque Auto
          </p>
          <p className="mt-3 font-mono text-xs leading-relaxed text-faint">
            {shop.address}
            <br />
            <a href={shop.phoneHref} className="hover:text-orange">
              {shop.phoneDisplay}
            </a>
          </p>
        </div>
        <p className="font-mono text-xs leading-relaxed text-faint">
          Demo site by{" "}
          <a
            href={shop.builderUrl}
            target="_blank"
            rel="noreferrer"
            className="text-muted underline decoration-line underline-offset-4 transition-colors hover:text-orange hover:decoration-orange"
          >
            {shop.builderName}
          </a>
          . Fictional business, all details are placeholders.
        </p>
      </div>
    </footer>
  );
}
