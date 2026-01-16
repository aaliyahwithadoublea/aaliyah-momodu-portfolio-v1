"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, slideInFromBottom } from "@/lib/animations";
import { useInView } from "framer-motion";
import { useRef } from "react";
import MagicCard from "@/components/ui/MagicCard";
import { 
  Heart, 
  Music, 
  Book, 
  Languages, 
  Activity, 
  Circle,
  Mic,
  Compass,
  Gamepad2,
  Users,
  Film
} from "lucide-react";

const hobbies = [
  { name: "Running", icon: Activity, color: "text-green-500" },
  { name: "Basketball", icon: Circle, color: "text-orange-500" },
  { name: "Football", icon: Circle, color: "text-blue-500" },
  { name: "Singing", icon: Mic, color: "text-pink-500" },
  { name: "Adventure", icon: Compass, color: "text-purple-500" },
  { name: "Console Games", icon: Gamepad2, color: "text-indigo-500" },
  { name: "Friends & Family", icon: Users, color: "text-rose-500" },
  { name: "Reading", icon: Book, color: "text-cyan-500" },
  { name: "Listening to Music", icon: Music, color: "text-violet-500" },
  { name: "Watching Shows/Movies", icon: Film, color: "text-red-500" },
];

const softSkills = [
  "Leadership",
  "Team Collaboration",
  "Problem-Solving",
  "Communication",
  "Adaptability",
  "Time Management",
  "Creative Thinking",
  "Attention to Detail",
];

export default function Hobbies() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="hobbies"
      ref={ref}
      className="min-h-screen flex items-center justify-center px-4 py-20 relative"
    >
      <motion.div 
        className="max-w-6xl mx-auto w-full"
        variants={slideInFromBottom}
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
            className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text font-elegant"
          >
            Hobbies & Soft Skills
          </motion.h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Hobbies - Left Side (equal width) */}
            <div>
              <MagicCard>
                <motion.div
                  variants={fadeInUp}
                  className="glass-card p-8 h-full"
                >
                  <h3 className="text-2xl font-bold mb-6 text-pastel-pink-600 dark:text-pastel-pink-400 font-elegant text-center">
                    Hobbies & Interests
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
                    {hobbies.map((hobby, index) => {
                      const Icon = hobby.icon;
                      return (
                        <motion.div
                          key={hobby.name}
                          variants={fadeInUp}
                          whileHover={{ scale: 1.05, y: -5 }}
                          className="flex flex-col items-center p-4 rounded-lg bg-gradient-to-br from-pastel-pink-50 to-pastel-lavender-50 dark:from-pastel-pink-900/20 dark:to-pastel-lavender-900/20 border border-pastel-pink-200 dark:border-pastel-pink-800"
                        >
                          <Icon className={`w-8 h-8 mb-2 ${hobby.color}`} strokeWidth={2} />
                          <span className="text-sm font-medium text-foreground font-body text-center">
                            {hobby.name}
                          </span>
                        </motion.div>
                      );
                    })}
                  </div>
                </motion.div>
              </MagicCard>
            </div>

            {/* Soft Skills & Languages - Right Side (equal width, stacked) */}
            <div className="space-y-6">
              {/* Soft Skills */}
              <MagicCard>
                <motion.div
                  variants={fadeInUp}
                  className="glass-card p-8"
                >
                  <h3 className="text-2xl font-bold mb-6 text-pastel-lavender-600 dark:text-pastel-lavender-400 font-elegant text-center">
                    Soft Skills
                  </h3>
                  <div className="flex flex-wrap gap-3 justify-center">
                    {softSkills.map((skill, index) => (
                      <motion.span
                        key={skill}
                        variants={fadeInUp}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ scale: 1.1, y: -2 }}
                        className="px-4 py-2 rounded-full bg-gradient-to-r from-pastel-pink-100 to-pastel-lavender-100 dark:from-pastel-pink-900/30 dark:to-pastel-lavender-900/30 border border-pastel-pink-300 dark:border-pastel-pink-700 text-sm font-medium text-foreground font-body"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              </MagicCard>

              {/* Languages */}
              <MagicCard>
                <motion.div
                  variants={fadeInUp}
                  className="glass-card p-8"
                >
                  <div className="flex items-center justify-center gap-2 mb-6">
                    <Languages className="w-6 h-6 text-pastel-peach-600 dark:text-pastel-peach-400" />
                    <h3 className="text-2xl font-bold text-pastel-peach-600 dark:text-pastel-peach-400 font-elegant">
                      Languages
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-3 justify-center">
                    <motion.div
                      whileHover={{ scale: 1.05, y: -2 }}
                      className="px-4 py-2 rounded-full bg-gradient-to-r from-pastel-pink-100 to-pastel-lavender-100 dark:from-pastel-pink-900/30 dark:to-pastel-lavender-900/30 border border-pastel-pink-300 dark:border-pastel-pink-700"
                    >
                      <span className="text-sm font-medium text-foreground font-body">
                        English <span className="text-pastel-pink-600 dark:text-pastel-pink-400">(Native)</span>
                      </span>
                    </motion.div>
                    <motion.div
                      whileHover={{ scale: 1.05, y: -2 }}
                      className="px-4 py-2 rounded-full bg-gradient-to-r from-pastel-lavender-100 to-pastel-pink-100 dark:from-pastel-lavender-900/30 dark:to-pastel-pink-900/30 border border-pastel-lavender-300 dark:border-pastel-lavender-700"
                    >
                      <span className="text-sm font-medium text-foreground font-body">
                        French <span className="text-pastel-lavender-600 dark:text-pastel-lavender-400">(B1)</span>
                      </span>
                    </motion.div>
                  </div>
                </motion.div>
              </MagicCard>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
