"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export default function AvailableBadge() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.5 }}
      className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-green-100 to-emerald-100 dark:from-green-900/30 dark:to-emerald-900/30 border-2 border-green-400 dark:border-green-500 shadow-lg"
    >
      <motion.div
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400" fill="currentColor" />
      </motion.div>
      <span className="text-sm font-semibold text-green-700 dark:text-green-300 font-body">
        Available for Work
      </span>
    </motion.div>
  );
}
