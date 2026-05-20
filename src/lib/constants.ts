export const TAGLINE = "Walk freely. Live independently.";
export const DESCRIPTION =
  "Standalone smart wearables that guide, protect, and empower people with vision and hearing loss — designed for India, worn with dignity.";

export const BRAND_LINE = "Built from Kerala. Built for India.";

/** Phrases shown in the curved marquee band between major sections */
export const LOOP_BAND_PHRASES = [
  "Guide · Protect · Empower",
  "Walk freely · Live independently",
  "Built for India",
  "Dignity by design",
  "Offline-first · Phone-free",
] as const;

export const PILLARS = [
  {
    id: "guide",
    label: "Guide",
    title: "See the path ahead",
    detail:
      "Spatial awareness, turn-by-turn guidance, and clear voice cues — without a phone, without dependency.",
    product: "Smart Glasses",
  },
  {
    id: "protect",
    label: "Protect",
    title: "Sense what lies below",
    detail:
      "Ground-level hazard detection and haptic alerts keep every step informed — especially for deaf-blind users.",
    product: "Smart Wristband",
  },
  {
    id: "empower",
    label: "Empower",
    title: "Move on your own terms",
    detail:
      "An integrated ecosystem that works offline, looks like premium eyewear, and restores confidence in daily life.",
    product: "Smart Earbud",
  },
] as const;

export const VALUES = [
  {
    id: "independence",
    title: "Independence",
    detail: "No smartphone tether. No family member required to operate your assistive tech.",
    phrase: "Self-reliance",
  },
  {
    id: "india-first",
    title: "India-first",
    detail: "Built for Kerala roads — open drains, monsoon rain, zero signal, and voices you understand.",
    phrase: "Context",
  },
  {
    id: "coverage",
    title: "Complete coverage",
    detail: "Eyes forward, ground below, audio beside you — one connected experience.",
    phrase: "Wholeness",
  },
  {
    id: "dignity",
    title: "Dignity",
    detail: "Designed to look like premium eyewear — worn with pride, not hidden away.",
    phrase: "Respect",
  },
] as const;

export const PRODUCTS = [
  {
    id: "glasses",
    label: "Smart Glasses",
    detail:
      "Object detection, navigation, and voice guidance in frames that feel like everyday eyewear.",
  },
  {
    id: "earbud",
    label: "Smart Earbud",
    detail:
      "Discrete audio cues and alerts — clear, comfortable, always within reach.",
  },
  {
    id: "wristband",
    label: "Smart Wristband",
    detail:
      "Haptic feedback for ground hazards and safety signals the glasses cannot see.",
  },
] as const;
