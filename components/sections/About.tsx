"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, slideInFromLeft } from "@/lib/animations";
import { useInView } from "framer-motion";
import { useRef } from "react";
import MagicCard from "@/components/ui/MagicCard";
import FlyingPrincess from "@/components/ui/FlyingPrincess";
import DecorativeBow from "@/components/ui/DecorativeBow";
import CinematicGlow from "@/components/ui/CinematicGlow";
import CountryFlag from "@/components/ui/CountryFlag";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="about"
      ref={ref}
      className="min-h-screen flex items-center justify-center px-4 py-20 relative"
    >
      {/* Flying Princess in About Section */}
      <FlyingPrincess enabled={true} section="about" />
      
      {/* Decorative Elements */}
      <div className="absolute top-10 right-10 opacity-20">
        <DecorativeBow size="md" color="pink" />
      </div>
      
      <motion.div 
        className="max-w-4xl mx-auto relative z-10"
        variants={slideInFromLeft}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.h2
            variants={fadeInUp}
            className="text-4xl md:text-5xl font-bold text-center mb-12 gradient-text font-elegant relative"
          >
            <CinematicGlow intensity="medium" color="pink">
              Professional Summary
            </CinematicGlow>
          </motion.h2>

          <MagicCard>
            <motion.div
              variants={fadeInUp}
              className="glass-card space-y-8 p-8 md:p-10"
            >
              {/* Enhanced intro paragraph */}
              <div className="space-y-4">
                <p className="text-xl md:text-2xl leading-relaxed text-foreground font-body font-medium">
                  Results-driven <span className="text-pastel-pink-600 dark:text-pastel-pink-400 font-semibold">Frontend Developer</span> with expertise in React.js, Next.js, and React Native, 
                  experienced in building responsive, scalable, and user-friendly applications.
                </p>
                <p className="text-lg leading-relaxed text-foreground/90 font-body">
                  Skilled at translating Figma and design systems into pixel-perfect UIs, optimizing performance, 
                  and integrating APIs. Complemented by a background in cybersecurity, ensuring applications are both 
                  high-performing and secure.
                </p>
              </div>

              {/* Location with flags - enhanced */}
              <motion.div
                variants={fadeInUp}
                className="flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r from-pastel-pink-50 to-pastel-lavender-50 dark:from-pastel-pink-900/20 dark:to-pastel-lavender-900/20 border border-pastel-pink-200 dark:border-pastel-pink-800"
              >
                <div className="flex items-center gap-3">
                  <CountryFlag country="FR" location="Paris, France" size="md" />
                  <div>
                    <p className="text-sm font-medium text-foreground/70 font-body">Location</p>
                    <p className="text-lg font-semibold text-foreground font-body">Paris, France</p>
                  </div>
                </div>
                <div className="h-12 w-px bg-pastel-pink-300 dark:bg-pastel-pink-700" />
                <div className="flex items-center gap-3">
                  <CountryFlag country="NG" location="Nigerian Heritage" size="md" />
                  <div>
                    <p className="text-sm font-medium text-foreground/70 font-body">Heritage</p>
                    <p className="text-lg font-semibold text-foreground font-body">Nigerian</p>
                  </div>
                </div>
              </motion.div>

              {/* Closing paragraph */}
            <p className="text-lg leading-relaxed text-foreground/90 font-body">
              With a keen eye for design and a love for clean code, I bring together aesthetics and 
              functionality to build user-centric applications. I&apos;m particularly passionate about 
              creating inclusive digital experiences that everyone can enjoy, regardless of their 
              abilities or devices.
            </p>
            </motion.div>
          </MagicCard>

          {/* Stats or highlights */}
          <motion.div
            variants={fadeInUp}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12"
          >
            {[
              { label: "Years of Experience", value: "3+" },
              { label: "Projects Completed", value: "10+" },
              { label: "Technologies Mastered", value: "20+" },
            ].map((stat, index) => (
              <MagicCard key={index}>
                <motion.div
                  variants={fadeInUp}
                  className="glass-card text-center hover-glow"
                >
                <div className="text-3xl font-bold gradient-text mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-foreground/70">
                  {stat.label}
                </div>
                </motion.div>
              </MagicCard>
            ))}
          </motion.div>
          </motion.div>
      </motion.div>
    </section>
  );
}
