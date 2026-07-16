import type { ReactNode } from "react";
import { Reveal } from "@/components/reveal";

export function Section({
  id,
  eyebrow,
  title,
  children,
}: {
  id: string;
  eyebrow: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24 py-24 sm:py-32">
      <div className="mx-auto max-w-[1200px] px-6">
        <Reveal>
          <p className="font-mono text-xs tracking-[0.2em] text-orange uppercase">
            {eyebrow}
          </p>
          <h2 className="mt-5 max-w-3xl font-display text-4xl tracking-wide text-balance uppercase sm:text-5xl">
            {title}
          </h2>
        </Reveal>
        <div className="mt-14">{children}</div>
      </div>
    </section>
  );
}
