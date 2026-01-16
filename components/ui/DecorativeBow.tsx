"use client";

import { motion } from "framer-motion";

interface DecorativeBowProps {
  size?: "sm" | "md" | "lg";
  color?: "pink" | "lavender" | "gold";
  className?: string;
}

export default function DecorativeBow({
  size = "md",
  color = "pink",
  className = "",
}: DecorativeBowProps) {
  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-12 h-12",
    lg: "w-16 h-16",
  };

  const colorClasses = {
    pink: "from-pastel-pink-400 to-pastel-pink-600",
    lavender: "from-pastel-lavender-400 to-pastel-lavender-600",
    gold: "from-yellow-400 to-yellow-600",
  };

  return (
    <motion.div
      className={`${sizeClasses[size]} ${className} relative`}
      animate={{
        rotate: [0, 10, -10, 0],
        scale: [1, 1.1, 1],
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      {/* Bow Shape */}
      <div className="relative w-full h-full">
        {/* Left Loop */}
        <div
          className={`absolute left-0 top-0 w-1/2 h-1/2 bg-gradient-to-br ${colorClasses[color]} rounded-full opacity-80`}
          style={{
            clipPath: "ellipse(50% 50% at 25% 25%)",
          }}
        />
        {/* Right Loop */}
        <div
          className={`absolute right-0 top-0 w-1/2 h-1/2 bg-gradient-to-bl ${colorClasses[color]} rounded-full opacity-80`}
          style={{
            clipPath: "ellipse(50% 50% at 75% 25%)",
          }}
        />
        {/* Center Knot */}
        <div
          className={`absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1/3 h-1/3 bg-gradient-to-br ${colorClasses[color]} rounded-full`}
        />
        {/* Ribbon Tails */}
        <motion.div
          className={`absolute left-1/2 top-3/4 transform -translate-x-1/2 w-1/4 h-1/4 bg-gradient-to-b ${colorClasses[color]} rounded-full`}
          animate={{
            scaleY: [1, 1.2, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>
    </motion.div>
  );
}
