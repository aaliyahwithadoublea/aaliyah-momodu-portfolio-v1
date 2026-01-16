"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Experience from "@/components/sections/Experience";
import Education from "@/components/sections/Education";
import Certifications from "@/components/sections/Certifications";
import Hobbies from "@/components/sections/Hobbies";
import Blog from "@/components/sections/Blog";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";
import AnimatedBackground from "@/components/ui/AnimatedBackground";
import ThemeToggle from "@/components/ui/ThemeToggle";
import Navigation from "@/components/ui/Navigation";
import CinematicIntro from "@/components/ui/CinematicIntro";
import FloatingElements from "@/components/ui/FloatingElements";

export default function Home() {
  const [introComplete, setIntroComplete] = useState(false);

  return (
    <>
      <CinematicIntro onComplete={() => setIntroComplete(true)} />
      {introComplete && (
        <motion.main 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="relative min-h-screen overflow-x-hidden"
        >
          <AnimatedBackground />
          <FloatingElements />
          <Navigation />
          <ThemeToggle />
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Education />
          <Certifications />
          <Hobbies />
          <Blog />
          <Contact />
          <Footer />
        </motion.main>
      )}
    </>
  );
}
