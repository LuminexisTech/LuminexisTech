"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Heading, Section, Text } from "@/components/ui";
import { PRODUCTS } from "@/lib/constants";

export function Products() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <Section ref={ref} className="bg-surface">
      <motion.div
        className="ds-container"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
      >
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="ds-label mb-4">The Ecosystem</p>
            <Heading size="xl">Three devices. One experience.</Heading>
          </div>
          <Text variant="muted" className="max-w-sm lg:text-right">
            Glasses, wristband, and earbud — complete environmental coverage.
          </Text>
        </div>

        <div className="mt-12 grid gap-4 lg:grid-cols-3">
          {PRODUCTS.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.05 + i * 0.04, duration: 0.45 }}
              className="border border-border bg-surface-muted p-6 sm:p-8"
            >
              <span className="font-mono-label text-caption text-muted-foreground">
                {String(i + 1).padStart(2, "0")}
              </span>
              <Heading as="h3" size="lg" emphasis="title" className="mt-4">
                {product.label}
              </Heading>
              <Text variant="body-sm" className="mt-3 text-muted-foreground">
                {product.detail}
              </Text>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </Section>
  );
}
