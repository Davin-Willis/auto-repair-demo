import { CtaBand } from "@/components/cta-band";
import { Footer } from "@/components/footer";
import { Gallery } from "@/components/gallery";
import { Hero } from "@/components/hero";
import { HoursMap } from "@/components/hours-map";
import { Nav } from "@/components/nav";
import { Services } from "@/components/services";
import { Trust } from "@/components/trust";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Services />
        <Trust />
        <CtaBand />
        <Gallery />
        <HoursMap />
      </main>
      <Footer />
    </>
  );
}
