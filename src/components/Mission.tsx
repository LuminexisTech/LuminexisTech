"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useGSAP } from "@gsap/react";
import { Heading, Text } from "@/components/ui";
import { ensureGsapPlugins, gsap } from "@/lib/gsap-client";
import { ImmersivePortrait } from "./ImmersivePortrait";

export function Mission() {
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: "-60px" });

  useGSAP(
    () => {
      if (!sectionRef.current || !textRef.current) return;
      void ensureGsapPlugins().then(() => {
        gsap.from(textRef.current!.querySelectorAll(".mission-reveal"), {
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
          y: 16,
          opacity: 0,
          duration: 0.7,
          stagger: 0.06,
          ease: "power2.out",
        });
      });
    },
    { scope: sectionRef },
  );

  return (
    <section ref={sectionRef} className="bg-inverse text-inverse-foreground">
      <div className="ds-container grid items-center gap-12 py-16 sm:py-24 lg:grid-cols-2 lg:gap-20 lg:py-28">
        <ImmersivePortrait
          src="/images/hero-portrait.png"
          alt="Person representing confidence and independence with Luminexis"
          variant="dark"
        />

        <motion.div
          ref={textRef}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          className="max-w-lg"
        >
          <p className="mission-reveal ds-label mb-6 !text-inverse-subtle">Our Mission</p>
          <Heading className="mission-reveal text-inverse-foreground" size="xl">
            Human technology, not clinical hardware.
          </Heading>
          <Text variant="body-lg" className="mission-reveal mt-6 text-inverse-muted">
            Twelve million blind Indians deserve assistive technology built for their roads,
            their languages, and their dignity.
          </Text>
          <Text variant="body-sm" className="mission-reveal mt-4 text-inverse-subtle">
            Luminexis is standalone, offline-capable, and designed to be worn with pride.
            Join the waitlist to be first when we launch.
          </Text>
        </motion.div>
      </div>
    </section>
  );
}
