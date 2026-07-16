import { Reveal } from "@/components/reveal";
import { Section } from "@/components/section";
import { services, shop } from "@/lib/content";

export function Services() {
  return (
    <Section id="services" eyebrow="01 · Services" title="What we fix.">
      <div className="grid grid-cols-1 gap-px sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, i) => (
          <Reveal key={service.title} delay={(i % 3) * 0.04}>
            <div className="group h-full border border-line bg-raised p-8 transition-colors duration-300 hover:border-orange/50">
              <span className="font-mono text-sm text-orange">
                {service.index}
              </span>
              <h3 className="mt-5 font-display text-2xl tracking-wide text-ink uppercase">
                {service.title}
              </h3>
              <p className="mt-3 leading-relaxed text-muted">
                {service.description}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
      <Reveal delay={0.1}>
        <p className="mt-10 font-mono text-sm text-faint">
          Something not on the list?{" "}
          <a
            href={shop.phoneHref}
            className="text-orange underline decoration-orange/40 underline-offset-4 transition-colors hover:decoration-orange"
          >
            Call {shop.phoneDisplay}
          </a>{" "}
          and ask. If we can&apos;t do it, we&apos;ll point you to someone who
          can.
        </p>
      </Reveal>
    </Section>
  );
}
