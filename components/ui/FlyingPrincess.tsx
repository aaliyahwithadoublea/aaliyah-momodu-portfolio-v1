"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useState, useRef, useMemo } from "react";
import { Sparkles, Heart } from "lucide-react";

// Separate component for floating hearts to avoid hydration issues
function FloatingHearts() {
  const heartPositions = useMemo(() => {
    return Array.from({ length: 3 }, (_, i) => ({
      id: i,
      initialX: Math.random() * 20 - 10,
      initialY: Math.random() * 20 - 10,
    }));
  }, []);

  return (
    <>
      {heartPositions.map((heart) => (
        <motion.div
          key={heart.id}
          className="absolute"
          initial={{
            x: heart.initialX,
            y: heart.initialY,
            opacity: 0,
          }}
          animate={{
            y: [null, -30, -60],
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: heart.id * 1.2,
            ease: "easeOut",
          }}
        >
          <Heart className="w-3 h-3 text-pastel-pink-400 fill-pastel-pink-400" />
        </motion.div>
      ))}
    </>
  );
}

interface FlyingPrincessProps {
  enabled?: boolean;
  section?: string;
}

export default function FlyingPrincess({ enabled = true, section }: FlyingPrincessProps) {
  const [isVisible, setIsVisible] = useState(true);
  const [mounted, setMounted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Check for reduced motion (must be before hooks to ensure consistent hook order)
  const prefersReducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 500, damping: 100 });
  const mouseYSpring = useSpring(y, { stiffness: 500, damping: 100 });

  // Create all transforms upfront (hooks must be called at top level)
  const trail0X = useTransform(mouseXSpring, (v) => v + 0 * 5);
  const trail0Y = useTransform(mouseYSpring, (v) => v + 0 * 5);
  const trail1X = useTransform(mouseXSpring, (v) => v + 1 * 5);
  const trail1Y = useTransform(mouseYSpring, (v) => v + 1 * 5);
  const trail2X = useTransform(mouseXSpring, (v) => v + 2 * 5);
  const trail2Y = useTransform(mouseYSpring, (v) => v + 2 * 5);
  const trail3X = useTransform(mouseXSpring, (v) => v + 3 * 5);
  const trail3Y = useTransform(mouseYSpring, (v) => v + 3 * 5);
  const trail4X = useTransform(mouseXSpring, (v) => v + 4 * 5);
  const trail4Y = useTransform(mouseYSpring, (v) => v + 4 * 5);

  const trailTransforms = [
    { trailX: trail0X, trailY: trail0Y },
    { trailX: trail1X, trailY: trail1Y },
    { trailX: trail2X, trailY: trail2Y },
    { trailX: trail3X, trailY: trail3Y },
    { trailX: trail4X, trailY: trail4Y },
  ];

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    
    if (!enabled) {
      setIsVisible(false);
      return;
    }

    setIsVisible(true);

    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const distanceX = (e.clientX - centerX) / window.innerWidth;
        const distanceY = (e.clientY - centerY) / window.innerHeight;

        x.set(distanceX * 30);
        y.set(distanceY * 30);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [enabled, x, y, mounted]);

  // Early return after all hooks are called
  if (!mounted || !enabled || prefersReducedMotion || !isVisible) {
    return null;
  }

  return (
    <div
      ref={containerRef}
      className="fixed top-16 right-10 z-40 pointer-events-none"
      style={{ willChange: "transform" }}
    >
      {/* Sparkle Trail */}
      <div className="absolute inset-0">
        {trailTransforms.map((transform, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              x: transform.trailX,
              y: transform.trailY,
            }}
            animate={{
              rotate: [0, 360],
              scale: [0.8, 1.2, 0.8],
              opacity: [0.4, 0.8, 0.4],
            }}
            transition={{
              duration: 2 + i * 0.3,
              repeat: Infinity,
              delay: i * 0.2,
            }}
          >
            <Sparkles className="w-3 h-3 text-pastel-pink-400" />
          </motion.div>
        ))}
      </div>

      {/* Princess Character */}
      <motion.div
        style={{
          x: mouseXSpring,
          y: mouseYSpring,
        }}
        animate={{
          y: [0, -15, 0],
          rotate: [0, 5, -5, 0],
        }}
        transition={{
          y: {
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          },
          rotate: {
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}
        className="relative"
      >
        {/* Princess Body (Stylized) */}
        <div className="relative w-16 h-16">
          {/* Glow Effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-pastel-pink-400/30 to-pastel-lavender-400/30 rounded-full blur-xl"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.5, 0.8, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Main Circle (Head/Body) */}
          <div className="relative w-16 h-16 bg-gradient-to-br from-pastel-pink-300 via-pastel-lavender-300 to-pastel-peach-300 rounded-full border-2 border-white/50 shadow-lg flex items-center justify-center">
            {/* Face */}
            <div className="relative">
              {/* Eyes */}
              <div className="flex gap-2 mb-1">
                <motion.div
                  className="w-2 h-2 bg-gray-800 rounded-full"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: 0.5,
                  }}
                />
                <motion.div
                  className="w-2 h-2 bg-gray-800 rounded-full"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: 0.7,
                  }}
                />
              </div>
              {/* Smile */}
              <svg
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <motion.path
                  d="M 8 12 Q 12 16 16 12"
                  stroke="gray"
                  strokeWidth="1.5"
                  fill="none"
                  strokeLinecap="round"
                  animate={{ pathLength: [0, 1, 0] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                />
              </svg>
            </div>

            {/* Crown/Headpiece */}
            <motion.div
              className="absolute -top-2 left-1/2 transform -translate-x-1/2"
              animate={{
                rotate: [0, 10, -10, 0],
                y: [0, -2, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Sparkles className="w-6 h-6 text-yellow-400" />
            </motion.div>

            {/* Wings */}
            <motion.div
              className="absolute -left-4 top-1/2 transform -translate-y-1/2"
              animate={{
                scaleX: [1, -1, 1],
                rotate: [0, 15, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <div className="w-8 h-12 bg-gradient-to-r from-pastel-lavender-200/50 to-transparent rounded-full blur-sm" />
            </motion.div>
            <motion.div
              className="absolute -right-4 top-1/2 transform -translate-y-1/2"
              animate={{
                scaleX: [1, -1, 1],
                rotate: [0, -15, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.3,
              }}
            >
              <div className="w-8 h-12 bg-gradient-to-l from-pastel-pink-200/50 to-transparent rounded-full blur-sm" />
            </motion.div>
          </div>

          {/* Floating Hearts */}
          <FloatingHearts />
        </div>
      </motion.div>
    </div>
  );
}
