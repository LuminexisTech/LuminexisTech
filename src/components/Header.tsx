"use client";

import { motion } from "framer-motion";
import { Logo } from "./Logo";

export function Header() {
  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="ds-header-bar"
    >
      <div className="ds-container flex h-16 items-center justify-between">
        <Logo />
        <span className="ds-label">Coming Soon</span>
      </div>
    </motion.header>
  );
}
