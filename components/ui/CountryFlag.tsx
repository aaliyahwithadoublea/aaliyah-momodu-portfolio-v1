"use client";

import { motion } from "framer-motion";
import { useState } from "react";

interface CountryFlagProps {
  country: "FR" | "NG" | "France" | "Nigeria";
  location?: string;
  size?: "sm" | "md" | "lg";
  showTooltip?: boolean;
}

const countryCodes: Record<string, string> = {
  FR: "FR",
  France: "FR",
  NG: "NG",
  Nigeria: "NG",
};

const sizeMap = {
  sm: 24,
  md: 32,
  lg: 64,
};

export default function CountryFlag({
  country,
  location,
  size = "md",
  showTooltip = true,
}: CountryFlagProps) {
  const [showTooltipState, setShowTooltipState] = useState(false);
  const code = countryCodes[country] || country;
  const flagSize = sizeMap[size];

  return (
    <div className="relative inline-block">
      <motion.img
        src={`https://flagsapi.com/${code}/flat/${flagSize}.png`}
        alt={`${country} flag`}
        className="inline-block cursor-pointer"
        style={{ width: flagSize, height: flagSize }}
        whileHover={{ scale: 1.2, rotate: [0, -5, 5, 0] }}
        whileTap={{ scale: 0.9 }}
        onHoverStart={() => showTooltip && setShowTooltipState(true)}
        onHoverEnd={() => setShowTooltipState(false)}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
        loading="lazy"
      />

      {/* Tooltip */}
      {showTooltip && showTooltipState && location && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1.5 glass-card rounded-lg text-xs font-medium whitespace-nowrap z-50"
        >
          {location}
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 -mt-1">
            <div className="w-2 h-2 bg-white/70 dark:bg-gray-900/70 rotate-45" />
          </div>
        </motion.div>
      )}
    </div>
  );
}
