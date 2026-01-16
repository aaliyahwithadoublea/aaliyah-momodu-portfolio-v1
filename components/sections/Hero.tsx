"use client";

import { motion } from "framer-motion";
import { fadeInUp, fadeIn, floatAnimation } from "@/lib/animations";
import { MapPin, ArrowDown, Sparkles, Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import SocialLinks from "@/components/ui/SocialLinks";
import FlyingPrincess from "@/components/ui/FlyingPrincess";
import TypewriterText from "@/components/ui/TypewriterText";
import { useState, useEffect, useRef } from "react";
import { useInView } from "framer-motion";
import AvailableBadge from "@/components/ui/AvailableBadge";

export default function Hero() {
  const [showContent, setShowContent] = useState(false);
  const [startTyping, setStartTyping] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  useEffect(() => {
    // Small delay to ensure smooth transition from intro
    const timer = setTimeout(() => setShowContent(true), 100);
    return () => clearTimeout(timer);
  }, []);

  // Trigger typing animation when hero comes into view
  useEffect(() => {
    if (isInView && !startTyping) {
      setStartTyping(true);
    } else if (!isInView) {
      // Reset when out of view to retrigger on scroll back
      setStartTyping(false);
    }
  }, [isInView, startTyping]);

  return (
    <section
      id="hero"
      ref={ref}
      className="min-h-screen flex items-center justify-center px-4 pt-32 pb-10 relative overflow-hidden"
    >
      {/* Animated Sparkle Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            initial={{
              x: Math.random() * 100 + "%",
              y: Math.random() * 100 + "%",
              opacity: 0,
            }}
            animate={{
              y: [null, (Math.random() - 0.5) * 100 + "%"],
              x: [null, (Math.random() - 0.5) * 50 + "%"],
              opacity: [0, 0.6, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut",
            }}
          >
            <Sparkles className="w-3 h-3 text-pastel-pink-300 dark:text-pastel-pink-600" />
          </motion.div>
        ))}
      </div>
      {/* Flying Princess */}
      <FlyingPrincess enabled={true} section="hero" />

      <div className="max-w-5xl mx-auto text-center relative z-10">
        {/* Profile Picture */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          className="mb-8 flex justify-center"
        >
          <motion.div
            whileHover={{ scale: 1.05, rotate: 5 }}
            className="relative group"
          >
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-pastel-pink-300 dark:border-pastel-pink-600 shadow-lg shadow-pastel-pink-200/50 dark:shadow-pastel-pink-900/50 relative">
              <img
                src="/images/profile.jpg"
                alt="Aaliyah Momodu"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                onError={(e) => {
                  console.error("Profile image failed to load");
                  e.currentTarget.src = "/api/placeholder/400/400";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-pastel-pink-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <motion.div
              className="absolute inset-0 rounded-full border-4 border-pastel-lavender-300 dark:border-pastel-lavender-600 opacity-0 group-hover:opacity-100 pointer-events-none"
              animate={{
                rotate: [0, 360],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          </motion.div>
        </motion.div>

        {/* Available Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-6 z-20 relative"
        >
          <AvailableBadge />
        </motion.div>

        {/* Animated Name with Typewriter - Triggers on Viewport */}
        <motion.h1
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          className="text-6xl md:text-8xl font-bold mb-6 gradient-text font-elegant relative z-20 min-h-[120px] md:min-h-[160px] flex items-center justify-center"
        >
          {startTyping ? (
            <>
              <TypewriterText
                text="Aaliyah Momodu"
                speed={100}
                delay={0}
                className="block"
                showCursor={true}
              />
              {/* Decorative underline */}
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ delay: 2, duration: 0.8, ease: "easeInOut" }}
                className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-pastel-pink-400 via-pastel-lavender-400 to-pastel-peach-400 rounded-full"
              />
            </>
          ) : (
            <span>Aaliyah Momodu</span>
          )}
        </motion.h1>

        {/* Role with Typewriter - Triggers on Viewport */}
        <motion.p
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          className="text-2xl md:text-3xl text-foreground/90 mb-6 font-medium font-elegant z-20 relative min-h-[40px] md:min-h-[50px] flex items-center justify-center"
        >
          {startTyping ? (
            <TypewriterText
              text="Mid-Level Frontend Developer"
              speed={50}
              delay={2.5}
              className="block"
              showCursor={true}
            />
          ) : (
            <span>Mid-Level Frontend Developer</span>
          )}
        </motion.p>

        {/* Location with Flags and Typewriter - Always Visible */}
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          className="flex items-center justify-center gap-3 text-lg text-foreground/80 mb-8 z-20 relative flex-wrap min-h-[40px]"
        >
          <MapPin className="w-5 h-5 text-pastel-pink-500 flex-shrink-0" />
          <span className="font-elegant flex items-center gap-2">
            {startTyping ? (
              <TypewriterText
                text="Paris, France"
                speed={50}
                delay={5}
                className="inline"
                showCursor={false}
              />
            ) : (
              <span>Paris, France</span>
            )}
            <motion.img
              src="https://flagsapi.com/FR/flat/32.png"
              alt="France flag"
              className="w-6 h-6 inline-block ml-1"
              initial={{ scale: 0 }}
              animate={startTyping ? { scale: 1 } : { scale: 1 }}
              transition={{ delay: startTyping ? 6 : 0, type: "spring", stiffness: 200 }}
              whileHover={{ scale: 1.2, rotate: [0, -5, 5, 0] }}
            />
          </span>
          <span className="text-pastel-lavender-400">•</span>
          <span className="font-elegant flex items-center gap-2">
            {startTyping ? (
              <TypewriterText
                text="Nigerian"
                speed={50}
                delay={6.5}
                className="inline"
                showCursor={false}
              />
            ) : (
              <span>Nigerian</span>
            )}
            <motion.img
              src="https://flagsapi.com/NG/flat/32.png"
              alt="Nigeria flag"
              className="w-6 h-6 inline-block ml-1"
              initial={{ scale: 0 }}
              animate={startTyping ? { scale: 1 } : { scale: 1 }}
              transition={{ delay: startTyping ? 7.5 : 0, type: "spring", stiffness: 200 }}
              whileHover={{ scale: 1.2, rotate: [0, -5, 5, 0] }}
            />
          </span>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-12"
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="#projects"
              className="px-8 py-3 bg-gradient-to-r from-pastel-pink-500 to-pastel-lavender-500 text-white rounded-full font-semibold hover-glow transition-all duration-300 inline-block"
            >
              View Projects
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="#contact"
              className="px-8 py-3 glass-card text-foreground font-semibold hover-glow transition-all duration-300 inline-block"
            >
              Contact Me
            </Link>
          </motion.div>
        </motion.div>

        {/* Social Links */}
        <motion.div
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.8 }}
          className="flex items-center justify-center gap-4"
        >
          <SocialLinks size="lg" />
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{
              y: [0, -20, 0],
              transition: {
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
            className="flex flex-col items-center gap-2 text-foreground/60"
          >
            <span className="text-sm">Scroll to explore</span>
            <ArrowDown className="w-5 h-5" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
