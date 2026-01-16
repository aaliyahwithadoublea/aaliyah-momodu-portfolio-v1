"use client";

import { motion } from "framer-motion";
import { Sparkles, Star } from "lucide-react";

interface MagicalTrailProps {
  x: number;
  y: number;
  enabled?: boolean;
}

export default function MagicalTrail({ x, y, enabled = true }: MagicalTrailProps) {
  if (!enabled) return null;

  return (
    <motion.div
      className="absolute pointer-events-none"
      style={{ left: x, top: y }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: [0, 1, 0], scale: [0, 1, 0] }}
      transition={{ duration: 1 }}
    >
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute"
          initial={{ x: 0, y: 0, opacity: 0 }}
          animate={{
            x: (Math.random() - 0.5) * 50,
            y: (Math.random() - 0.5) * 50,
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: 1.5,
            delay: i * 0.2,
            ease: "easeOut",
          }}
        >
          {i % 2 === 0 ? (
            <Sparkles className="w-3 h-3 text-pastel-pink-400" />
          ) : (
            <Star className="w-2 h-2 text-yellow-400 fill-yellow-400" />
          )}
        </motion.div>
      ))}
    </motion.div>
  );
}
