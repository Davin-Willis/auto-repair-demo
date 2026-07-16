import { Reveal } from "@/components/reveal";
import { shop } from "@/lib/content";

export function CtaBand() {
  return (
    <section className="bg-raised">
      <div className="hazard h-3 opacity-80" aria-hidden="true" />
      <div className="mx-auto max-w-[1200px] px-6 py-20 text-center">
        <Reveal>
          <h2 className="font-display text-4xl tracking-wide text-balance uppercase sm:text-6xl">
            Hear it? Feel it?{" "}
            <span className="text-orange">Don&apos;t wait on it.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-balance text-muted">
            Small noises become big invoices. Call now and talk to a tech, not
            a phone tree.
          </p>
          <a
            href={shop.phoneHref}
            className="mt-10 inline-block bg-orange px-8 py-4 font-mono text-sm tracking-[0.15em] text-base uppercase transition-colors duration-300 hover:bg-ink"
          >
            Call {shop.phoneDisplay}
          </a>
        </Reveal>
      </div>
      <div className="hazard h-3 opacity-80" aria-hidden="true" />
    </section>
  );
}
