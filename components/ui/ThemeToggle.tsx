"use client";

import { motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/components/providers/ThemeProvider";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div 
        className="fixed right-6 z-[100] w-16 h-16 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center shadow-xl border-4 border-pastel-pink-400" 
        style={{ top: '220px', position: 'fixed' }}
      />
    );
  }

  return (
    <motion.button
      onClick={toggleTheme}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed right-6 z-[100] w-16 h-16 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center shadow-2xl border-4 border-pastel-pink-500 dark:border-pastel-pink-400 transition-all duration-300 hover:shadow-pastel-pink-500/50"
      aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
      style={{ top: '220px', position: 'fixed' }}
    >
      {theme === "dark" ? (
        <Sun 
          className="w-8 h-8 text-yellow-500" 
          fill="currentColor"
          strokeWidth={2}
          style={{ display: "block" }}
        />
      ) : (
        <Moon 
          className="w-8 h-8 text-gray-800 dark:text-gray-200" 
          fill="currentColor"
          strokeWidth={2}
          style={{ display: "block" }}
        />
      )}
    </motion.button>
  );
}
