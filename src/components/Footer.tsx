"use client";

import { motion } from "framer-motion";
import { Heading, Text } from "@/components/ui";
import { BRAND_LINE, TAGLINE } from "@/lib/constants";
import { Logo } from "./Logo";
import { NotifyForm } from "./NotifyForm";

export function Footer() {
  return (
    <footer className="ds-footer-bar">
      <div className="ds-container py-20 sm:py-24">
        <motion.div
          className="mx-auto max-w-lg text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <Logo className="justify-center" />
          <Heading size="xl" className="mt-8">
            {TAGLINE}
          </Heading>
          <Text variant="muted" className="mt-3">
            Be the first to know when we launch.
          </Text>
          <div className="mt-8 flex justify-center">
            <NotifyForm />
          </div>
          <p className="ds-label-accent mt-12">{BRAND_LINE}</p>
          <p className="mt-4 text-body-sm font-light text-muted-foreground">
            © {new Date().getFullYear()} Luminexis. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
