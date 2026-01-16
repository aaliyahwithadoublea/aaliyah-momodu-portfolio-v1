"use client";

import { motion } from "framer-motion";
import { Sparkles, Heart, Star } from "lucide-react";
import { useState, useEffect, useMemo } from "react";

export default function FloatingElements() {
  const [mounted, setMounted] = useState(false);
  
  const elements = [
    { icon: Sparkles, color: "text-pastel-pink-400", size: "w-4 h-4", delay: 0 },
    { icon: Heart, color: "text-pastel-lavender-400", size: "w-5 h-5", delay: 0.5 },
    { icon: Star, color: "text-yellow-400", size: "w-4 h-4", delay: 1 },
    { icon: Sparkles, color: "text-orange-300", size: "w-3 h-3", delay: 1.5 },
    { icon: Heart, color: "text-pastel-pink-300", size: "w-4 h-4", delay: 2 },
    { icon: Star, color: "text-pastel-lavender-300", size: "w-5 h-5", delay: 2.5 },
  ];

  const elementPositions = useMemo(() => {
    if (typeof window === "undefined") return [];
    return elements.map((element, index) => ({
      ...element,
      initialX: Math.random() * window.innerWidth,
      initialY: Math.random() * window.innerHeight,
      animateY: (Math.random() - 0.5) * 200,
      animateX: (Math.random() - 0.5) * 100,
      duration: 4 + Math.random() * 2,
      transitionDelay: element.delay + Math.random() * 2,
    }));
  }, [mounted]);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {elementPositions.map((element, index) => {
        const Icon = element.icon;
        return (
          <motion.div
            key={index}
            className="absolute"
            initial={{
              x: element.initialX,
              y: element.initialY,
              opacity: 0,
            }}
            animate={{
              y: element.animateY,
              x: element.animateX,
              opacity: [0, 0.6, 0],
              scale: [0, 1.2, 0],
              rotate: [0, 360],
            }}
            transition={{
              duration: element.duration,
              repeat: Infinity,
              delay: element.transitionDelay,
              ease: "easeInOut",
            }}
          >
            <Icon className={`${element.size} ${element.color} opacity-60`} />
          </motion.div>
        );
      })}
    </div>
  );
}
