"use client";

import { motion } from "framer-motion";

interface CinematicGlowProps {
  children: React.ReactNode;
  intensity?: "low" | "medium" | "high";
  color?: "pink" | "lavender" | "gold" | "rose-gold";
}

export default function CinematicGlow({
  children,
  intensity = "medium",
  color = "pink",
}: CinematicGlowProps) {
  const intensityClasses = {
    low: "opacity-30 blur-xl",
    medium: "opacity-50 blur-2xl",
    high: "opacity-70 blur-3xl",
  };

  const colorClasses = {
    pink: "from-pastel-pink-400 to-pastel-pink-600",
    lavender: "from-pastel-lavender-400 to-pastel-lavender-600",
    gold: "from-yellow-400 to-yellow-600",
    "rose-gold": "from-orange-300 to-pink-400",
  };

  return (
    <div className="relative inline-block">
      {children}
      <motion.div
        className={`absolute inset-0 bg-gradient-to-r ${colorClasses[color]} ${intensityClasses[intensity]} -z-10`}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
}
