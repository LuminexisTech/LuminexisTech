"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Card, CardContent, Heading, Section, Text } from "@/components/ui";
import { PILLARS } from "@/lib/constants";

export function Pillars() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <Section ref={ref} className="section-divider bg-surface-muted">
      <motion.div
        className="ds-container"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-xl">
          <p className="ds-label mb-4">Three Pillars</p>
          <Heading size="xl">Guide. Protect. Empower.</Heading>
          <Text variant="muted" className="mt-4">
            Technology that removes dependency — not adds it.
          </Text>
        </div>

        <div className="mt-12 grid gap-4 lg:grid-cols-3">
          {PILLARS.map((pillar, i) => (
            <motion.article
              key={pillar.id}
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.06 + i * 0.05, duration: 0.45 }}
              className="h-full"
            >
              <Card className="h-full shadow-none">
                <CardContent className="flex flex-col">
                  <p className="ds-label-accent">{pillar.label}</p>
                  <Heading as="h3" size="lg" emphasis="title" className="mt-4">
                    {pillar.title}
                  </Heading>
                  <Text variant="body-sm" className="mt-3 text-muted-foreground">
                    {pillar.detail}
                  </Text>
                  <p className="mt-6 border-t border-border pt-4 text-body-sm font-medium text-foreground">
                    {pillar.product}
                  </p>
                </CardContent>
              </Card>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </Section>
  );
}
