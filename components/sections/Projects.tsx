"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, hoverScale, cardHover, zoomIn } from "@/lib/animations";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Github, ExternalLink } from "lucide-react";
import AnimatedCard from "@/components/ui/AnimatedCard";
import { allProjects } from "@/lib/projects";

// Featured projects for the main page: Grundpay, Color Game, HESED EduSuite, PDF Annotation Tool
const featuredProjectTitles = ["Grundpay", "Color Master Game", "HESED EduSuite", "PDF Annotation Tool"];
const featuredProjects = allProjects.filter(project => featuredProjectTitles.includes(project.title));

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="projects"
      ref={ref}
      className="min-h-screen flex items-center justify-center px-4 py-20"
    >
      <motion.div 
        className="max-w-7xl mx-auto w-full"
        variants={zoomIn}
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
            Featured Projects
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredProjects.map((project, index) => (
              <AnimatedCard key={project.title}>
                <motion.div
                  variants={fadeInUp}
                  whileHover={cardHover}
                  className="glass-card overflow-hidden hover-glow group h-full"
                >
                {/* Project Image */}
                <div className="w-full h-48 rounded-lg mb-4 overflow-hidden bg-gradient-to-br from-pastel-pink-200 via-pastel-lavender-200 to-pastel-peach-200 relative">
                  {project.image && project.image !== "/api/placeholder/600/400" ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
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
                </div>

                <h3 className="text-2xl font-semibold mb-3 text-pastel-pink-600 dark:text-pastel-pink-400">
                  {project.title}
                </h3>

                <p className="text-foreground/80 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 bg-pastel-pink-100 dark:bg-pastel-pink-900/30 text-pastel-pink-700 dark:text-pastel-pink-300 rounded-md text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center gap-4">
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
                      <Github className="w-5 h-5" />
                      <span className="text-sm font-medium">Code</span>
                    </motion.a>
                  )}
                  <motion.a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${project.title} live demo`}
                    whileHover={{ scale: 1.1, x: 5 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 text-foreground/70 hover:text-pastel-lavender-500 transition-colors duration-300"
                  >
                    <ExternalLink className="w-5 h-5" />
                    <span className="text-sm font-medium">Live Demo</span>
                  </motion.a>
                </div>
                </motion.div>
              </AnimatedCard>
            ))}
          </div>

          {/* View All Button */}
          <motion.div
            variants={fadeInUp}
            className="flex justify-center mt-12"
          >
            <motion.a
              href="/projects"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-gradient-to-r from-pastel-pink-500 to-pastel-lavender-500 text-white rounded-lg font-medium hover:shadow-lg hover:shadow-pastel-pink-500/50 transition-all duration-300 flex items-center gap-2"
            >
              <span>View All Projects</span>
              <ExternalLink className="w-4 h-4" />
            </motion.a>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
