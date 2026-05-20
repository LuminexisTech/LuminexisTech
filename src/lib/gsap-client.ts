"use client";

import gsap from "gsap";

let pluginsReady = false;

/** Register GSAP plugins once in the browser (avoids SSR/webpack chunk issues). */
export async function ensureGsapPlugins() {
  if (pluginsReady || typeof window === "undefined") return;
  const { ScrollTrigger } = await import("gsap/ScrollTrigger");
  gsap.registerPlugin(ScrollTrigger);
  pluginsReady = true;
}

export { gsap };
