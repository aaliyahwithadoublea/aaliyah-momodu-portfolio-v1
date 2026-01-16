"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, slideInFromLeft } from "@/lib/animations";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Calendar, MapPin, Briefcase } from "lucide-react";

const experiences = [
  {
    title: "Lead Frontend Developer",
    company: "Grundpay",
    location: "Lagos State, NG · Remote",
    period: "APR 2025 - PRESENT",
    description: [
      "Leading frontend development for a fintech platform specializing in real estate installment payments, managing structured payment plans and transaction tracking",
      "Architecting and implementing scalable React applications using Vite, TypeScript, and modern state management patterns",
      "Building secure payment interfaces with seamless user experiences, integrating payment gateways and wallet systems",
      "Mentoring and guiding frontend team members, establishing coding standards and best practices for React development",
      "Optimizing application performance and implementing Progressive Web App (PWA) features for enhanced mobile experience",
      "Collaborating with cross-functional teams to deliver high-quality fintech solutions with focus on security and user experience",
    ],
  },
  {
    title: "Frontend Developer",
    company: "HESED Edusuite",
    location: "Lagos, NG",
    period: "OCT 2024 - PRESENT",
    description: [
      "Developed and debugged responsive landing pages and key platform pages using React.js and Tailwind CSS to enhance performance and user experience",
      "Tested and refined the e-learning platform software",
      "Ensured cross-browser compatibility, improving accessibility across major browsers",
      "Supported user onboarding, ensuring seamless adoption of the application",
    ],
  },
  {
    title: "Frontend Developer",
    company: "Sidmach Technologies",
    location: "Lagos, NG",
    period: "JAN 2023 - AUG 2024",
    description: [
      "Led the development of a class management web application using React.js and Tailwind CSS, significantly enhancing user experience",
      "Resolved bugs, minimizing system downtime and improving user satisfaction",
      "Collaborated with a team to integrate and optimize a live project, ensuring smooth platform operation",
    ],
  },
  {
    title: "Software Engineer",
    company: "Imprinmo",
    location: "Lagos, NG",
    period: "AUG 2022 - NOV 2022",
    description: [
      "Enhanced software interfaces in collaboration with engineers, leading to improved system efficiency",
      "Refactored core modules, achieving faster system load times",
      "Built scalable and high-performance software solutions with cross-functional teams tailored to client needs",
    ],
  },
  {
    title: "Frontend Developer",
    company: "Byaxiom Solutions Limited",
    location: "Lagos, NG",
    period: "AUG 2021 - NOV 2021",
    description: [
      "Built reusable UI components, reducing development time for future projects",
      "Integrated APIs in collaboration with backend developers to ensure seamless data flow",
      "Optimized page load performance, improving user experience across devices",
    ],
  },
];

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="experience"
      ref={ref}
      className="min-h-screen flex items-center justify-center px-4 py-20"
    >
      <motion.div 
        className="max-w-4xl mx-auto w-full"
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
            className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text font-elegant"
          >
            Experience
          </motion.h2>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-pastel-pink-300 via-pastel-lavender-300 to-pastel-peach-300 hidden md:block" />

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="relative pl-0 md:pl-20"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-6 top-2 w-4 h-4 bg-pastel-pink-500 rounded-full border-4 border-background hidden md:block" />

                  <div className="glass-card hover-glow">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-semibold text-pastel-pink-600 dark:text-pastel-pink-400 mb-1">
                          {exp.title}
                        </h3>
                        <div className="flex items-center gap-2 text-foreground/70 mb-2">
                          <Briefcase className="w-4 h-4" />
                          <span className="font-medium">{exp.company}</span>
                        </div>
                        <div className="flex items-center gap-2 text-foreground/60 text-sm">
                          <MapPin className="w-4 h-4" />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-pastel-lavender-600 dark:text-pastel-lavender-400 mt-4 md:mt-0">
                        <Calendar className="w-4 h-4" />
                        <span className="font-medium">{exp.period}</span>
                      </div>
                    </div>

                    <ul className="space-y-2 mt-4">
                      {exp.description.map((item, itemIndex) => (
                        <li
                          key={itemIndex}
                          className="flex items-start gap-2 text-foreground/80"
                        >
                          <span className="text-pastel-pink-500 mt-1.5">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
