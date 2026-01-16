"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, zoomIn } from "@/lib/animations";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Github, ExternalLink, ArrowLeft } from "lucide-react";
import AnimatedCard from "@/components/ui/AnimatedCard";
import { allProjects } from "@/lib/projects";
import Link from "next/link";
import Navigation from "@/components/ui/Navigation";
import ThemeToggle from "@/components/ui/ThemeToggle";
import AnimatedBackground from "@/components/ui/AnimatedBackground";
import FloatingElements from "@/components/ui/FloatingElements";

export default function AllProjects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <AnimatedBackground />
      <FloatingElements />
      <Navigation />
      <ThemeToggle />
      
      <div className="relative z-10 min-h-screen pt-20 px-4 py-20">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="mb-12"
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Link
                href="/#projects"
                className="inline-flex items-center gap-2 text-foreground/70 hover:text-pastel-pink-500 transition-colors duration-300 mb-6 group"
              >
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                <span>Back to Home</span>
              </Link>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-4xl md:text-6xl font-bold mb-4 gradient-text font-elegant"
            >
              All Projects
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-foreground/70 text-lg md:text-xl"
            >
              A comprehensive collection of my work, showcasing various technologies and solutions.
            </motion.p>
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            ref={ref}
            variants={zoomIn}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="w-full"
          >
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {allProjects.map((project, index) => (
                <AnimatedCard key={project.title}>
                  <motion.div
                    variants={fadeInUp}
                    whileHover={{ y: -8, scale: 1.02 }}
                    className="glass-card overflow-hidden hover-glow group h-full flex flex-col transition-all duration-300"
                  >
                    {/* Project Image */}
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="w-full h-48 rounded-lg mb-4 overflow-hidden bg-gradient-to-br from-pastel-pink-200 via-pastel-lavender-200 to-pastel-peach-200 relative"
                    >
                      {project.image && project.image !== "/api/placeholder/600/400" ? (
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover transition-transform duration-500"
                          onError={(e) => {
                            e.currentTarget.style.display = 'none';
                          }}
                        />
                      ) : null}
                      {(!project.image || project.image === "/api/placeholder/600/400") && (
                        <div className="w-full h-full flex items-center justify-center">
                          <span className="text-foreground/50 text-sm font-medium">
                            {project.title}
                          </span>
                        </div>
                      )}
                    </motion.div>

                    <div className="flex-1 flex flex-col p-4">
                      <h3 className="text-xl md:text-2xl font-semibold mb-3 text-pastel-pink-600 dark:text-pastel-pink-400 group-hover:text-pastel-pink-700 dark:group-hover:text-pastel-pink-300 transition-colors">
                        {project.title}
                      </h3>

                      <p className="text-foreground/80 mb-4 leading-relaxed text-sm md:text-base flex-1">
                        {project.description}
                      </p>

                      {/* Tech Stack Tags */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tech.slice(0, 4).map((tech) => (
                          <motion.span
                            key={tech}
                            whileHover={{ scale: 1.05 }}
                            className="px-2.5 py-1 bg-pastel-pink-100 dark:bg-pastel-pink-900/30 text-pastel-pink-700 dark:text-pastel-pink-300 rounded-md text-xs font-medium"
                          >
                            {tech}
                          </motion.span>
                        ))}
                        {project.tech.length > 4 && (
                          <motion.span
                            whileHover={{ scale: 1.05 }}
                            className="px-2.5 py-1 bg-pastel-lavender-100 dark:bg-pastel-lavender-900/30 text-pastel-lavender-700 dark:text-pastel-lavender-300 rounded-md text-xs font-medium"
                          >
                            +{project.tech.length - 4}
                          </motion.span>
                        )}
                      </div>

                      {/* Links */}
                      <div className="flex items-center gap-4 mt-auto pt-4 border-t border-border/30">
                        {project.github && (
                          <motion.a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`View ${project.title} on GitHub`}
                            whileHover={{ scale: 1.1, x: 5 }}
                            whileTap={{ scale: 0.95 }}
                            className="flex items-center gap-2 text-foreground/70 hover:text-pastel-pink-500 transition-colors duration-300"
                          >
                            <Github className="w-4 h-4" />
                            <span className="text-xs font-medium">Code</span>
                          </motion.a>
                        )}
                        {project.demo && project.demo !== "#" && (
                          <motion.a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`View ${project.title} live demo`}
                            whileHover={{ scale: 1.1, x: 5 }}
                            whileTap={{ scale: 0.95 }}
                            className="flex items-center gap-2 text-foreground/70 hover:text-pastel-lavender-500 transition-colors duration-300"
                          >
                            <ExternalLink className="w-4 h-4" />
                            <span className="text-xs font-medium">Live Demo</span>
                          </motion.a>
                        )}
                      </div>
                    </div>
                  </motion.div>
                </AnimatedCard>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
