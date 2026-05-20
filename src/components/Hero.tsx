"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { Heading, Text } from "@/components/ui";
import { gsap } from "@/lib/gsap-client";
import { BRAND_LINE, TAGLINE, DESCRIPTION } from "@/lib/constants";
import { ImmersivePortrait } from "./ImmersivePortrait";
import { NotifyForm } from "./NotifyForm";

export function Hero() {
  const copyRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!copyRef.current) return;
      gsap.from(".hero-line", {
        y: 20,
        opacity: 0,
        duration: 0.75,
        stagger: 0.05,
        ease: "power2.out",
        delay: 0.08,
      });
    },
    { scope: copyRef },
  );

  return (
    <section className="bg-surface pt-16 sm:pt-20 lg:pt-28 overflow-hidden pb-0">
      <div className="ds-container grid items-end gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-16 pb-0">
        <div ref={copyRef} className="order-2 max-w-lg lg:order-1 pb-16 lg:pb-24 z-10">
          <p className="ds-label mb-8">Assistive Wearables</p>

          <Heading as="h1" size="2xl">
            {TAGLINE.split(". ").map((line, i) => (
              <span key={line} className="hero-line block">
                {line}
                {i === 0 ? "." : ""}
              </span>
            ))}
          </Heading>

          <Text variant="muted" className="mt-6 max-w-md">
            {DESCRIPTION}
          </Text>

          <div className="mt-10">
            <NotifyForm />
          </div>

          <div className="mt-12 flex flex-col gap-2 border-t border-border pt-8">
            <p className="ds-label-accent">Guide · Protect · Empower</p>
            <p className="text-body-sm font-light text-muted-foreground">{BRAND_LINE}</p>
          </div>
        </div>

        <div className="order-1 lg:order-2 relative w-full h-[50vh] lg:h-[75vh] flex items-end justify-center lg:-mr-24">
          <ImmersivePortrait
            src="/images/hero-wearables.png"
            alt="Person wearing Luminexis smart glasses, earbud, and wristband"
            variant="light"
            priority
            className="!max-w-none w-[115%] lg:w-[125%] !aspect-auto h-full"
          />
        </div>
      </div>
    </section>
  );
}
