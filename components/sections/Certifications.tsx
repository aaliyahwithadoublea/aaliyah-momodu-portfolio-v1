"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, zoomIn } from "@/lib/animations";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Award, ExternalLink } from "lucide-react";

const certifications = [
  {
    title: "Frontend Developer",
    issuer: "HiSkyTech",
    completed: "June 2024",
    link: null,
  },
  {
    title: "Frontend Intern",
    issuer: "HNG",
    completed: "August 2024",
    link: "View Certificate",
  },
  {
    title: "Web Developer",
    issuer: "Cognorise INFOTECH",
    completed: "July 2024",
    link: "View Certificate",
  },
  {
    title: "Frontend Development (CSS)",
    issuer: "Great Learning",
    completed: "May 2024",
    link: "View Certificate",
  },
  {
    title: "Frontend Development (HTML)",
    issuer: "Great Learning",
    completed: "May 2024",
    link: "View Certificate",
  },
  {
    title: "Frontend Development",
    issuer: "Africa Agility Foundation",
    completed: "July 2024",
    link: "View Certificate",
  },
];

// const achievements = [
//   {
//     title: "Tenor Line Major",
//     organization: "NYSC, Lagos",
//     period: "November 2023 - October 2024",
//     description: "Led the tenor line, managing and organizing rehearsals. Successfully taught new batches essential line sequences for each swearing in at the orientation camp, fostering teamwork and performance excellence.",
//   },
// ];

export default function Certifications() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="certifications"
      ref={ref}
      className="min-h-screen flex items-center justify-center px-4 py-20"
    >
      <motion.div 
        className="max-w-6xl mx-auto w-full"
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
            Certifications & Achievements
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="glass-card hover-glow"
              >
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-pastel-peach-400 to-pastel-pink-400 rounded-full flex items-center justify-center flex-shrink-0">
                    <Award className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-pastel-pink-600 dark:text-pastel-pink-400 mb-1">
                      {cert.title}
                    </h3>
                    <p className="text-foreground/70 text-sm mb-1">{cert.issuer}</p>
                    <p className="text-foreground/60 text-xs mb-2">Completed: {cert.completed}</p>
                    {cert.link && (
                      <a
                        href="#"
                        className="text-pastel-lavender-600 dark:text-pastel-lavender-400 text-sm hover:underline flex items-center gap-1"
                      >
                        {cert.link}
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* <motion.div variants={fadeInUp}>
            <h3 className="text-3xl font-bold text-center mb-8 gradient-text font-elegant">
              Achievements & Volunteering
            </h3>
            <div className="space-y-6">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="glass-card hover-glow"
                >
                  <h4 className="text-xl font-semibold text-pastel-pink-600 dark:text-pastel-pink-400 mb-2">
                    {achievement.title}
                  </h4>
                  <p className="text-foreground/70 mb-2">{achievement.organization}</p>
                  <p className="text-foreground/60 text-sm mb-3">{achievement.period}</p>
                  <p className="text-foreground/80 leading-relaxed">{achievement.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div> */}
        </motion.div>
      </motion.div>
    </section>
  );
}
