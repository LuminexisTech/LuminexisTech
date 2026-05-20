"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Heading, Section, Text } from "@/components/ui";
import { VALUES } from "@/lib/constants";

const itemMotion = {
  hidden: { opacity: 0, y: 16 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.08 + i * 0.06, duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

export function Values() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <Section ref={ref} className="border-y border-border bg-surface-muted">
      <div className="ds-container">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-10 lg:items-start">
          <motion.header
            className="lg:col-span-4 lg:sticky lg:top-28"
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55 }}
          >
            <p className="ds-label">What we stand for</p>
            <Heading size="lg" className="mt-5 max-w-[14ch]">
              Principles in every product decision.
            </Heading>
            <Text variant="lead" className="mt-6 max-w-sm border-l-2 border-foreground pl-5">
              Four commitments from our offer — independence, place, coverage, and how you
              are seen in the world.
            </Text>
          </motion.header>

          <div className="lg:col-span-8">
            <ul className="divide-y divide-border rounded-lg border border-border bg-surface lg:divide-y-0 lg:grid lg:grid-cols-2 lg:divide-x lg:divide-border">
              {VALUES.map((value, i) => (
                <motion.li
                  key={value.id}
                  custom={i}
                  variants={itemMotion}
                  initial="hidden"
                  animate={inView ? "show" : "hidden"}
                  className="px-6 py-9 sm:px-8 sm:py-10"
                >
                  <div className="flex items-baseline justify-between gap-4">
                    <span className="font-mono-label text-[2.75rem] font-extralight leading-none tracking-tight text-border-strong tabular-nums">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="shrink-0 font-mono-label text-caption font-medium uppercase tracking-[0.14em] text-muted-foreground">
                      {value.phrase}
                    </span>
                  </div>
                  <h3 className="mt-6 text-heading-lg font-semibold tracking-tight text-foreground">
                    {value.title}
                  </h3>
                  <Text variant="body-sm" className="mt-3 max-w-md text-muted-foreground">
                    {value.detail}
                  </Text>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
}
