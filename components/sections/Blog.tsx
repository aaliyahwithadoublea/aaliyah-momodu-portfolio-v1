"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, rotateZoomIn } from "@/lib/animations";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, BookOpen } from "lucide-react";
import MagicCard from "@/components/ui/MagicCard";

const featuredPost = {
  title: "A Niche Comparison: ReactJS vs. Svelte in Modern Frontend Development",
  excerpt:
    "In the ever-evolving landscape of frontend development, the choice of technology can significantly impact the performance, maintainability, and scalability of web applications. While mainstream frameworks like ReactJS have dominated the scene, niche alternatives like Svelte are gaining traction.",
  url: "https://medium.com/@momoduaaliyah1/a-niche-comparison-reactjs-vs-svelte-in-modern-frontend-development-a786579c81de",
  readTime: "10 min read",
  date: "2024",
  tags: ["Frontend", "React", "Svelte", "Comparison", "HNG"],
};

const blogPosts = [
  {
    title: "Why I Want to Be a Front-End Developer and How HNG Will Help Me Achieve My Goals",
    excerpt: "From the moment I discovered web development, I've been captivated by how frontend developers shape the user experience. They build the face of the web — transforming designs and concepts into interactive, visually appealing websites.",
    url: "https://medium.com/@momoduaaliyah1/why-i-want-to-be-a-front-end-developer-and-how-hng-will-help-me-achieve-my-goals-f1e4a55adb40",
    readTime: "5 min read",
  },
];

export default function Blog() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="blog"
      ref={ref}
      className="min-h-screen flex items-center justify-center px-4 py-20"
    >
      <motion.div 
        className="max-w-6xl mx-auto w-full"
        variants={rotateZoomIn}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div
            variants={fadeInUp}
            className="flex flex-col items-center gap-4 mb-12 text-center"
          >
            <div className="flex items-center gap-3">
              <BookOpen className="w-8 h-8 text-pastel-pink-500" />
              <motion.h2
                variants={fadeInUp}
                className="text-4xl md:text-5xl font-bold gradient-text font-elegant"
              >
                Content & Blog
              </motion.h2>
            </div>
            <motion.p
              variants={fadeInUp}
              className="text-lg text-foreground/70 max-w-2xl font-body"
            >
              Sharing knowledge and insights about frontend development, UI/UX
              design, and web technologies.
            </motion.p>
          </motion.div>

          {/* All Blog Posts Side by Side */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {/* Featured Post */}
            <MagicCard>
              <motion.div
                variants={fadeInUp}
                className="glass-card overflow-hidden hover-glow h-full flex flex-col"
              >
                <div className="p-6 flex-1 flex flex-col">
                  <div className="mb-4">
                    <span className="px-3 py-1 bg-pastel-pink-500 text-white rounded-full text-xs font-semibold font-body">
                      Featured
                    </span>
                  </div>
                  <h4 className="text-xl font-semibold mb-3 text-pastel-pink-600 dark:text-pastel-pink-400 font-elegant leading-tight">
                    {featuredPost.title}
                  </h4>
                  <p className="text-foreground/70 mb-6 flex-1 text-sm leading-relaxed font-body">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {featuredPost.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-pastel-pink-100 dark:bg-pastel-pink-900/30 text-pastel-pink-700 dark:text-pastel-pink-300 rounded-full text-xs font-medium font-body"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between pt-4 border-t border-pastel-pink-200 dark:border-pastel-pink-800">
                    <span className="text-xs text-foreground/60 font-body flex items-center gap-1">
                      <BookOpen className="w-3 h-3" />
                      {featuredPost.readTime}
                    </span>
                    <motion.a
                      href={featuredPost.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, x: 3 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-pastel-pink-500 to-pastel-lavender-500 text-white rounded-full text-sm font-medium hover-glow transition-all duration-300"
                    >
                      Read More
                      <ExternalLink className="w-3 h-3" />
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            </MagicCard>

            {/* Other Posts */}
            {blogPosts.map((post, index) => (
              <MagicCard key={index}>
                <motion.div
                  variants={fadeInUp}
                  className="glass-card overflow-hidden hover-glow h-full flex flex-col"
                >
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="mb-4">
                      <span className="px-3 py-1 bg-pastel-lavender-100 dark:bg-pastel-lavender-900/30 text-pastel-lavender-700 dark:text-pastel-lavender-300 rounded-full text-xs font-semibold font-body">
                        Article
                      </span>
                    </div>
                    <h4 className="text-xl font-semibold mb-3 text-pastel-pink-600 dark:text-pastel-pink-400 font-elegant leading-tight">
                      {post.title}
                    </h4>
                    <p className="text-foreground/70 mb-6 flex-1 text-sm leading-relaxed font-body">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between pt-4 border-t border-pastel-pink-200 dark:border-pastel-pink-800">
                      <span className="text-xs text-foreground/60 font-body flex items-center gap-1">
                        <BookOpen className="w-3 h-3" />
                        {post.readTime}
                      </span>
                      <motion.a
                        href={post.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1, x: 3 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-pastel-lavender-500 to-pastel-pink-500 text-white rounded-full text-sm font-medium hover-glow transition-all duration-300"
                      >
                        Read More
                        <ExternalLink className="w-3 h-3" />
                      </motion.a>
                    </div>
                  </div>
                </motion.div>
              </MagicCard>
            ))}
          </div>

          {/* Coming Soon Message */}
          <motion.div
            variants={fadeInUp}
            className="text-center p-6 glass-card rounded-2xl bg-gradient-to-r from-pastel-pink-50 to-pastel-lavender-50 dark:from-pastel-pink-900/20 dark:to-pastel-lavender-900/20 border border-pastel-pink-200 dark:border-pastel-pink-800"
          >
            <p className="text-foreground/70 font-body">
              ✨ More articles coming soon! Stay tuned for more frontend development insights and tutorials. ✨
            </p>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
