import { Reveal } from "@/components/reveal";
import { Section } from "@/components/section";
import { hours, shop } from "@/lib/content";

export function HoursMap() {
  return (
    <Section id="hours" eyebrow="03 · Hours & Location" title="Come see us.">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
        <Reveal>
          <dl className="font-mono text-sm">
            {hours.map((row) => (
              <div
                key={row.day}
                className="flex items-baseline justify-between gap-4 border-b border-line py-4"
              >
                <dt className="tracking-[0.15em] text-muted uppercase">
                  {row.day}
                </dt>
                <dd
                  className={row.time === "Closed" ? "text-faint" : "text-ink"}
                >
                  {row.time}
                </dd>
              </div>
            ))}
          </dl>
          <div className="mt-10">
            <p className="font-mono text-xs tracking-[0.15em] text-faint uppercase">
              Find us
            </p>
            <p className="mt-3 text-lg text-ink">{shop.address}</p>
            <div className="mt-6 flex flex-wrap items-center gap-4">
              <a
                href={shop.phoneHref}
                className="border border-orange px-6 py-3 font-mono text-sm tracking-[0.15em] text-orange uppercase transition-colors duration-300 hover:bg-orange hover:text-base"
              >
                Call {shop.phoneDisplay}
              </a>
              <a
                href={shop.mapLink}
                target="_blank"
                rel="noreferrer"
                className="px-2 py-3 font-mono text-sm text-muted transition-colors hover:text-ink"
              >
                Get directions ↗
              </a>
            </div>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="h-full min-h-[20rem] border border-line">
            <iframe
              src={shop.mapEmbed}
              title="Map showing the Louisville, KY area (demo placeholder)"
              className="map-dark h-full w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
