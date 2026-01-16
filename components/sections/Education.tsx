"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, slideInFromRight } from "@/lib/animations";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Award, BookOpen } from "lucide-react";

const education = [
  {
    institution: "EPITA - École Pour l'Informatique et les Techniques Avancées",
    location: "Paris, France 🇫🇷",
    degree: "Masters in Cybersecurity",
    period: "2026 - 2027",
    status: "Upcoming",
  },
  {
    institution: "Crescent University Abeokuta",
    location: "Ogun, NG",
    degree: "Bsc. in Computer Science",
    grade: "First Class",
    period: "NOV 2020 - AUG 2023",
    thesis: {
      topic: "A web based conversational Agent for Mental Health Support",
      description: "This paper presents the development of a Chatbot leveraging advanced natural language processing techniques and Flask web framework, designed to engage users in natural language conversations and deliver personalized assistance. The Chatbot's architecture, combining rule-based and AI-driven message selection, ensures seamless and tailored interactions. Evaluation and continuous learning capabilities demonstrate its accuracy and potential to enhance support services and user experiences within evolving web applications, marking a significant advancement in AI-driven customer interactions.",
    },
  },
  {
    institution: "University of Lagos",
    location: "Lagos, NG",
    degree: "A Levels : Computer Science",
    period: "SEPT 2019 - AUG 2020",
  },
];

export default function Education() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="education"
      ref={ref}
      className="min-h-screen flex items-center justify-center px-4 py-20"
    >
      <motion.div 
        className="max-w-4xl mx-auto w-full"
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
            Education
          </motion.h2>

          <div className="space-y-8">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="glass-card hover-glow"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-pastel-pink-400 to-pastel-lavender-400 rounded-full flex items-center justify-center flex-shrink-0">
                    <GraduationCap className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold text-pastel-pink-600 dark:text-pastel-pink-400 mb-1 font-elegant">
                      {edu.institution}
                    </h3>
                    <p className="text-foreground/70 mb-2">{edu.location}</p>
                    <p className="text-lg font-medium text-foreground/90 mb-2">
                      {edu.degree}
                    </p>
                    {edu.grade && (
                      <p className="text-pastel-lavender-600 dark:text-pastel-lavender-400 font-medium mb-2">
                        Grade: {edu.grade}
                      </p>
                    )}
                    {edu.status && (
                      <p className="text-pastel-peach-600 dark:text-pastel-peach-400 font-medium mb-2">
                        {edu.status}
                      </p>
                    )}
                    <p className="text-sm text-foreground/60">{edu.period}</p>
                  </div>
                </div>

                {edu.thesis && (
                  <div className="mt-6 pt-6 border-t border-border/50">
                    <div className="flex items-center gap-2 mb-3">
                      <BookOpen className="w-5 h-5 text-pastel-peach-500" />
                      <h4 className="font-semibold text-foreground/90">Thesis</h4>
                    </div>
                    <p className="font-medium text-pastel-pink-600 dark:text-pastel-pink-400 mb-2">
                      Topic: {edu.thesis.topic}
                    </p>
                    <p className="text-foreground/80 leading-relaxed text-sm">
                      {edu.thesis.description}
                    </p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
