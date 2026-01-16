"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Education", href: "#education" },
  { name: "Hobbies", href: "#hobbies" },
  { name: "Blog", href: "#blog" },
  { name: "Contact", href: "#contact" },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => item.href.substring(1));
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      setActiveSection(current ? `#${current}` : "");
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 left-0 right-0 z-40 glass border-b border-border/50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <motion.a
              href="#hero"
              whileHover={{ scale: 1.05 }}
              className="text-xl font-bold gradient-text font-elegant"
            >
              Aaliyah Momodu
            </motion.a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
              {navItems.map((item) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-300 ${
                    activeSection === item.href
                      ? "text-pastel-pink-600 dark:text-pastel-pink-400 bg-pastel-pink-100/50 dark:bg-pastel-pink-900/20"
                      : "text-foreground/70 hover:text-pastel-pink-500 hover:bg-pastel-pink-100/30 dark:hover:bg-pastel-pink-900/10"
                  }`}
                >
                  {item.name}
                </motion.a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="md:hidden w-12 h-12 rounded-lg flex items-center justify-center border-2 border-pastel-pink-400 dark:border-pastel-pink-500 bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 relative z-50"
              aria-label="Toggle menu"
            >
              <span className="sr-only">Toggle menu</span>
              {isOpen ? (
                <X 
                  className="w-6 h-6 text-pastel-pink-600 dark:text-pastel-pink-400 flex-shrink-0 pointer-events-none" 
                  strokeWidth={2.5}
                  aria-hidden="true"
                />
              ) : (
                <Menu 
                  className="w-6 h-6 text-pastel-pink-600 dark:text-pastel-pink-400 flex-shrink-0 pointer-events-none" 
                  strokeWidth={2.5}
                  aria-hidden="true"
                />
              )}
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-border/50 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md"
          >
            <div className="px-4 py-4 space-y-2">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => setIsOpen(false)}
                  className={`block px-4 py-3 rounded-lg text-sm font-medium transition-colors duration-300 ${
                    activeSection === item.href
                      ? "text-pastel-pink-600 dark:text-pastel-pink-400 bg-pastel-pink-100/50 dark:bg-pastel-pink-900/20"
                      : "text-foreground hover:text-pastel-pink-500 hover:bg-pastel-pink-100/30 dark:hover:bg-pastel-pink-900/10"
                  }`}
                >
                  {item.name}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </motion.nav>
    </>
  );
}
