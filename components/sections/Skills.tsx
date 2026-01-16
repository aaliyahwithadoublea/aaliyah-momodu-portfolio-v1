"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, slideInFromRight, zoomIn } from "@/lib/animations";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { getSkillIcon } from "@/lib/skillIcons";

const skillCategories = [
  {
    title: "Frontend Development",
    skills: [
      "JavaScript (ES6+)",
      "TypeScript",
      "React.js",
      "Next.js",
      "Angular",
      "React Native",
      "Redux",
      "HTML5",
      "CSS3",
    ],
    color: "pastel-pink",
  },
  {
    title: "UI Design & Layout",
    skills: [
      "Responsive Design",
      "Tailwind CSS",
      "Bootstrap",
      "Ant Design",
      "Figma",
    ],
    color: "pastel-lavender",
  },
  {
    title: "Testing & Accessibility",
    skills: [
      "Jest",
      "Playwright",
      "Axe DevTools",
      "Google Lighthouse",
      "OWASP ZAP",
    ],
    color: "pastel-peach",
  },
  {
    title: "APIs & Data Handling",
    skills: [
      "REST APIs",
      "GraphQL",
      "Axios",
      "Postman",
      "Cloudinary",
    ],
    color: "pastel-pink",
  },
  {
    title: "Tools & Deployment",
    skills: [
      "Git",
      "GitHub",
      "Vercel",
      "Netlify",
    ],
    color: "pastel-lavender",
  },
];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="skills"
      ref={ref}
      className="min-h-screen flex items-center justify-center px-4 py-20"
    >
      <motion.div 
        className="max-w-6xl mx-auto w-full"
        variants={slideInFromRight}
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
            Skills & Technologies
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                variants={fadeInUp}
                className="glass-card hover-glow"
              >
                <h3 className="text-xl font-semibold mb-4 text-pastel-pink-600 dark:text-pastel-pink-400">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={
                        isInView
                          ? { opacity: 1, scale: 1 }
                          : { opacity: 0, scale: 0.8 }
                      }
                      transition={{
                        delay: categoryIndex * 0.1 + skillIndex * 0.05,
                        duration: 0.3,
                      }}
                      whileHover={{ scale: 1.1 }}
                      className="px-3 py-1.5 bg-gradient-to-r from-pastel-pink-100 to-pastel-lavender-100 dark:from-pastel-pink-900/30 dark:to-pastel-lavender-900/30 rounded-full text-sm font-medium text-foreground border border-pastel-pink-200/50 dark:border-pastel-pink-700/50 flex items-center gap-1.5"
                    >
                      <span className="text-pastel-pink-600 dark:text-pastel-pink-400">
                        {getSkillIcon(skill)}
                      </span>
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
