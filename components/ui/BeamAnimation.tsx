"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function BeamAnimation() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [beams, setBeams] = useState<Array<{ id: number; x: number; y: number }>>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const newBeam = {
          id: Date.now(),
          x: Math.random() * rect.width,
          y: Math.random() * rect.height,
        };
        setBeams((prev) => [...prev.slice(-4), newBeam]);
      }
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden pointer-events-none">
      {beams.map((beam) => (
        <motion.div
          key={beam.id}
          className="absolute w-1 h-20 bg-gradient-to-b from-pastel-pink-400/50 to-transparent"
          initial={{
            x: beam.x,
            y: beam.y,
            opacity: 0,
            rotate: Math.random() * 360,
          }}
          animate={{
            y: beam.y - 200,
            opacity: [0, 1, 0],
            scale: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 2,
            ease: "easeOut",
          }}
        />
      ))}
    </div>
  );
}
