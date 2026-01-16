"use client";

import { motion } from "framer-motion";
import BeamAnimation from "./BeamAnimation";
import DecorativeBow from "./DecorativeBow";

export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      <BeamAnimation />
      
      {/* Decorative Bows */}
      <div className="absolute top-20 left-10 opacity-30">
        <DecorativeBow size="md" color="pink" />
      </div>
      <div className="absolute top-1/3 right-20 opacity-20">
        <DecorativeBow size="sm" color="lavender" />
      </div>
      <div className="absolute bottom-1/4 left-1/4 opacity-25">
        <DecorativeBow size="lg" color="gold" />
      </div>
      {/* Gradient blobs with flying animations */}
      <motion.div
        className="absolute top-0 -left-20 w-96 h-96 bg-pastel-pink-300/30 dark:bg-pastel-pink-600/20 rounded-full blur-3xl"
        animate={{
          x: [0, 150, 50, 0],
          y: [0, 100, 150, 0],
          scale: [1, 1.3, 1.1, 1],
          rotate: [0, 90, 180, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute top-1/2 -right-20 w-96 h-96 bg-pastel-lavender-300/30 dark:bg-pastel-lavender-600/20 rounded-full blur-3xl"
        animate={{
          x: [0, -150, -50, 0],
          y: [0, -100, -150, 0],
          scale: [1, 1.4, 1.2, 1],
          rotate: [0, -90, -180, 0],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-0 left-1/2 w-96 h-96 bg-pastel-peach-300/30 dark:bg-pastel-peach-600/20 rounded-full blur-3xl"
        animate={{
          x: [0, 100, -50, 0],
          y: [0, -150, -100, 0],
          scale: [1, 1.2, 1.1, 1],
          rotate: [0, 45, 90, 0],
        }}
        transition={{
          duration: 35,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      {/* Additional floating particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-pastel-pink-400/40 dark:bg-pastel-pink-500/30 rounded-full"
          style={{
            left: `${20 + i * 15}%`,
            top: `${10 + i * 12}%`,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, Math.sin(i) * 20, 0],
            opacity: [0.3, 0.7, 0.3],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 3 + i * 0.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.3,
          }}
        />
      ))}
    </div>
  );
}
