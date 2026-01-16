"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface MagicCardProps {
  children: ReactNode;
  className?: string;
}

export default function MagicCard({ children, className = "" }: MagicCardProps) {
  return (
    <motion.div
      className={`relative group ${className}`}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      {/* Shimmer effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-pastel-pink-200/20 to-transparent dark:via-pastel-pink-800/20 transform -skew-x-12 animate-shimmer" />
      </div>
      
      {/* Content */}
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}
