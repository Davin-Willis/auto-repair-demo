import { Reveal } from "@/components/reveal";
import { Section } from "@/components/section";
import { trustPoints } from "@/lib/content";

export function Trust() {
  return (
    <Section
      id="why-us"
      eyebrow="02 · Why choose us"
      title="Straight answers. No upsell."
    >
      <div className="grid grid-cols-1 gap-x-12 gap-y-10 sm:grid-cols-2">
        {trustPoints.map((point, i) => (
          <Reveal key={point.title} delay={(i % 2) * 0.06}>
            <div className="border-t border-line pt-8">
              <span className="font-display text-3xl text-orange">
                {point.index}
              </span>
              <h3 className="mt-4 font-display text-xl tracking-wide text-ink uppercase">
                {point.title}
              </h3>
              <p className="mt-3 max-w-md leading-relaxed text-muted">
                {point.description}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
