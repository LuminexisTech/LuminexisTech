"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap-client";
import { cn } from "@/lib/cn";

type ImmersivePortraitProps = {
  src: string;
  alt: string;
  priority?: boolean;
  variant?: "light" | "dark";
  className?: string;
};

export function ImmersivePortrait({
  src,
  alt,
  priority,
  variant = "light",
  className,
}: ImmersivePortraitProps) {
  const stageRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: stageRef,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [12, -12]);

  useGSAP(
    () => {
      const subject = stageRef.current?.querySelector(".scene-subject");
      if (!subject) return;
      gsap.fromTo(
        subject,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 1.1, ease: "power2.out", delay: 0.1 },
      );
    },
    { scope: stageRef },
  );

  return (
    <div
      ref={stageRef}
      className={cn(
        "scene-stage",
        variant === "dark" && "scene-stage--compact",
        className,
      )}
    >
      <motion.div className="scene-subject-wrap" style={{ y }}>
        <Image
          src={src}
          alt={alt}
          width={720}
          height={900}
          priority={priority}
          quality={95}
          className="scene-subject"
          sizes="(max-width: 768px) 88vw, 520px"
        />
      </motion.div>
    </div>
  );
}
