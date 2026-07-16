import { PhotoPlaceholder } from "@/components/photo-placeholder";
import { Reveal } from "@/components/reveal";
import { gallery } from "@/lib/content";

export function Gallery() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-6 px-6 sm:grid-cols-3">
        {gallery.map((photo, i) => (
          <Reveal key={photo.label} delay={i * 0.08}>
            <PhotoPlaceholder label={photo.label} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
