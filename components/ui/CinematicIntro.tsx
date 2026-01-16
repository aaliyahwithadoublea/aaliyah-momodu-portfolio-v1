"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useMemo } from "react";
import { Sparkles, X } from "lucide-react";
import FlyingPrincess from "./FlyingPrincess";
import { useTypewriter } from "@/hooks/useTypewriter";

// Separate component for sparkle particles to avoid hydration issues
function SparkleParticles() {
  const [mounted, setMounted] = useState(false);
  const particles = useMemo(() => {
    if (typeof window === "undefined") return [];
    return Array.from({ length: 30 }, (_, i) => ({
      id: i,
      initialX: Math.random() * window.innerWidth,
      initialY: Math.random() * window.innerHeight,
      animateY: Math.random() * window.innerHeight,
      animateX: (Math.random() - 0.5) * 200,
      duration: 2 + Math.random() * 2,
      delay: Math.random() * 2,
    }));
  }, [mounted]);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="absolute inset-0 overflow-hidden">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute"
          initial={{
            x: particle.initialX,
            y: particle.initialY,
            opacity: 0,
          }}
          animate={{
            y: particle.animateY,
            x: particle.animateX,
            opacity: [0, 0.8, 0],
            scale: [0, 1.5, 0],
            rotate: [0, 360],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: "easeInOut",
          }}
        >
          <Sparkles className="w-4 h-4 text-pastel-pink-400 dark:text-pastel-pink-500" />
        </motion.div>
      ))}
    </div>
  );
}

interface CinematicIntroProps {
  onComplete: () => void;
}

export default function CinematicIntro({ onComplete }: CinematicIntroProps) {
  const [showIntro, setShowIntro] = useState(true);
  const [skipRequested, setSkipRequested] = useState(false);
  const [princessExit, setPrincessExit] = useState(false);
  const [typewriterComplete, setTypewriterComplete] = useState(false);

  // Check for reduced motion
  const prefersReducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const handleComplete = () => {
    setPrincessExit(true);
    // Smooth fade out before showing main content
    setTimeout(() => {
      setShowIntro(false);
      // Small delay to ensure smooth transition
      setTimeout(() => {
        onComplete();
      }, 100);
    }, 600);
  };

  // Wait for typewriter to finish before auto-completing
  useEffect(() => {
    if (prefersReducedMotion) {
      setShowIntro(false);
      onComplete();
      return;
    }

    if (typewriterComplete && !skipRequested) {
      // Wait a bit after typewriter finishes, then complete
      const timer = setTimeout(() => {
        handleComplete();
      }, 1000); // 1 second after typing finishes

      return () => clearTimeout(timer);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [typewriterComplete, skipRequested, prefersReducedMotion]);

  const handleSkip = () => {
    setSkipRequested(true);
    handleComplete();
  };

  // Typewriter for welcome text - with onComplete callback
  const welcomeText = useTypewriter({
    text: "Welcome to Aaliyah's World",
    speed: 80,
    delay: 0.8,
    onComplete: () => {
      setTypewriterComplete(true);
    },
  });

  if (prefersReducedMotion) {
    return null;
  }

  return (
    <AnimatePresence mode="wait">
      {showIntro && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ 
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1]
          }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-pink-50 via-rose-50 to-pink-100 dark:from-gray-900 dark:via-purple-900 dark:to-gray-900"
        >
          {/* Skip Button - Always visible and accessible */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            onClick={handleSkip}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                handleSkip();
              }
            }}
            className="absolute top-6 right-6 z-50 px-4 py-2 glass-card rounded-full text-sm font-medium text-foreground/80 hover:text-foreground transition-colors flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-pastel-pink-500"
            aria-label="Skip intro"
            tabIndex={0}
          >
            <X className="w-4 h-4" />
            Skip Intro
          </motion.button>

          {/* Sparkle and Glow Particles */}
          <SparkleParticles />

          {/* Flying Princess - Moves across viewport */}
          <motion.div
            className="absolute inset-0 pointer-events-none"
            initial={{ x: "-100%", y: "50%" }}
            animate={{
              x: princessExit ? "200%" : ["-100%", "50%", "150%"],
              y: "50%",
            }}
            transition={{
              x: {
                duration: 3,
                times: [0, 0.5, 1],
                ease: "easeInOut",
              },
            }}
          >
            <div className="relative w-20 h-20">
              <FlyingPrincess enabled={true} />
            </div>
          </motion.div>

          {/* Main Content with Typewriter */}
          <div className="relative z-10 text-center px-4">
            <motion.h1
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ 
                delay: 0.5, 
                duration: 1,
                ease: [0.22, 1, 0.36, 1]
              }}
              className="text-5xl md:text-7xl font-bold mb-8 font-elegant"
            >
              <span className="bg-gradient-to-r from-pastel-pink-500 via-pastel-lavender-500 to-pastel-peach-500 bg-clip-text text-transparent">
                {welcomeText.displayedText}
                {welcomeText.isTyping && (
                  <motion.span
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{ duration: 0.8, repeat: Infinity }}
                    className="inline-block w-1 h-12 md:h-16 bg-pastel-pink-500 ml-2"
                  />
                )}
              </span>
            </motion.h1>

            {/* Glitter Effect */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2 }}
              className="flex justify-center gap-2 mt-8"
            >
              {[...Array(7)].map((_, i) => (
                <motion.div
                  key={i}
                  className="w-2 h-2 bg-pastel-pink-400 dark:bg-pastel-pink-500 rounded-full"
                  animate={{
                    y: [0, -15, 0],
                    opacity: [0.5, 1, 0.5],
                    scale: [1, 1.3, 1],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    delay: i * 0.15,
                    ease: "easeInOut",
                  }}
                />
              ))}
            </motion.div>
          </div>

          {/* Magical Glow Wipe Transition */}
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{
              delay: 2.8,
              duration: 1,
              ease: "easeInOut",
            }}
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 dark:via-purple-500/20 to-transparent pointer-events-none"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
