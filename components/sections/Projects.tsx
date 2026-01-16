"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, hoverScale, cardHover, zoomIn } from "@/lib/animations";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Github, ExternalLink } from "lucide-react";
import AnimatedCard from "@/components/ui/AnimatedCard";

const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "A modern, full-featured e-commerce platform built with Next.js, featuring product catalog, shopping cart, and checkout flow. Optimized for performance and accessibility.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Zustand", "Zod"],
    github: "https://github.com",
    demo: "https://demo.com",
    image: "/api/placeholder/600/400",
  },
  {
    title: "Task Management App",
    description:
      "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features. Built with React and modern state management.",
    tech: ["React", "TypeScript", "Zustand", "Framer Motion", "Tailwind CSS"],
    github: "https://github.com",
    demo: "https://demo.com",
    image: "/api/placeholder/600/400",
  },
  {
    title: "Portfolio Website",
    description:
      "A beautiful, responsive portfolio website showcasing projects and skills. Features smooth animations, glassmorphism design, and full accessibility compliance.",
    tech: ["Next.js", "TypeScript", "Framer Motion", "Tailwind CSS"],
    github: "https://github.com",
    demo: "https://demo.com",
    image: "/api/placeholder/600/400",
  },
  {
    title: "Weather Dashboard",
    description:
      "An elegant weather dashboard with location-based forecasts, interactive maps, and beautiful data visualizations. Includes dark mode and responsive design.",
    tech: ["React", "TypeScript", "Chart.js", "OpenWeather API", "Tailwind CSS"],
    github: "https://github.com",
    demo: "https://demo.com",
    image: "/api/placeholder/600/400",
  },
];

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
            {projects.map((project, index) => (
              <AnimatedCard key={project.title}>
                <motion.div
                  variants={fadeInUp}
                  whileHover={cardHover}
                  className="glass-card overflow-hidden hover-glow group h-full"
                >
                {/* Project Image Placeholder */}
                <div className="w-full h-48 bg-gradient-to-br from-pastel-pink-200 via-pastel-lavender-200 to-pastel-peach-200 rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-foreground/50 text-sm font-medium">
                    {project.title}
                  </span>
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
        </motion.div>
      </motion.div>
    </section>
  );
}
