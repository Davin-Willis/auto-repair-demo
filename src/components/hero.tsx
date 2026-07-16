"use client";

import { motion, useReducedMotion } from "framer-motion";
import { PhotoPlaceholder } from "@/components/photo-placeholder";
import { shop } from "@/lib/content";

export function Hero() {
  const reduceMotion = useReducedMotion();

  const container = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.12, delayChildren: 0.15 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
    },
  };

  return (
    <section id="top" className="flex min-h-screen items-center pt-24">
      <div className="mx-auto w-full max-w-[1200px] px-6 pb-16">
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1fr_22rem]"
        >
          <div>
            <motion.p
              variants={item}
              className="font-mono text-xs tracking-[0.2em] text-orange uppercase"
            >
              Louisville, KY · Independent since 2011
            </motion.p>
            <motion.h1
              variants={item}
              className="mt-8 font-display text-[clamp(3.5rem,9vw,7.5rem)] leading-[0.95] tracking-wide uppercase"
            >
              Fixed <span className="text-orange">right.</span>
              <br />
              First time.
            </motion.h1>
            <motion.p
              variants={item}
              className="mt-8 max-w-xl text-lg leading-relaxed text-muted"
            >
              Full-service auto repair on Piston Way. Straight answers, honest
              estimates, and a 12-month warranty on every job we touch.
            </motion.p>
            <motion.div
              variants={item}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <a
                href={shop.phoneHref}
                className="bg-orange px-7 py-4 font-mono text-sm tracking-[0.15em] text-base uppercase transition-colors duration-300 hover:bg-ink"
              >
                Call {shop.phoneDisplay}
              </a>
              <a
                href="#services"
                className="border border-line px-7 py-4 font-mono text-sm tracking-[0.15em] text-muted uppercase transition-colors duration-300 hover:border-ink hover:text-ink"
              >
                See services
              </a>
            </motion.div>
            <motion.p
              variants={item}
              className="mt-14 border-t border-line pt-6 font-mono text-xs tracking-[0.15em] text-faint uppercase"
            >
              Mon-Fri 7:30-6 · Sat 8-2 · Walk-ins welcome · ASE certified
            </motion.p>
          </div>
          <motion.div variants={item} className="hidden lg:block">
            <PhotoPlaceholder label="Front of shop" aspect="aspect-[3/4]" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
