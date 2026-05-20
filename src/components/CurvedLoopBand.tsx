"use client";

import { LOOP_BAND_PHRASES } from "@/lib/constants";
import CurvedLoop from "@/components/CurvedLoop";

export function CurvedLoopBand() {
  const marqueeText = LOOP_BAND_PHRASES.join(" ✦ ");

  return (
    <section className="relative overflow-hidden py-8 px-12 text-inverse-foreground sm:pb-32" aria-label="Brand highlights">
      <CurvedLoop 
        marqueeText={marqueeText}
        speed={1.5}
        curveAmount={250}
        direction="left"
        interactive={true}
        className="font-mono-label font-semibold uppercase tracking-[0.2em] text-inverse"
      />
    </section>
  );
}
