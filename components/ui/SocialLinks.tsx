"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ExternalLink } from "lucide-react";

interface SocialLinksProps {
  size?: "sm" | "md" | "lg";
  showLabels?: boolean;
  className?: string;
}

const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/aaliyahwithadoublea",
    icon: Github,
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/aaliyahmomodu",
    icon: Linkedin,
  },
  {
    name: "Medium",
    url: "https://medium.com/@momoduaaliyah1",
    icon: ExternalLink,
  },
  {
    name: "Email",
    url: "mailto:momoduaaliyah1@gmail.com",
    icon: Mail,
  },
];

const sizeClasses = {
  sm: "w-8 h-8",
  md: "w-10 h-10",
  lg: "w-12 h-12",
};

const iconSizeClasses = {
  sm: "w-4 h-4",
  md: "w-5 h-5",
  lg: "w-6 h-6",
};

export default function SocialLinks({ 
  size = "md", 
  showLabels = false,
  className = "" 
}: SocialLinksProps) {
  return (
    <div className={`flex items-center gap-4 ${className}`}>
      {socialLinks.map((social, index) => {
        const IconComponent = social.icon;
        return (
          <motion.a
            key={social.name}
            href={social.url}
            target={social.name === "Email" ? undefined : "_blank"}
            rel={social.name === "Email" ? undefined : "noopener noreferrer"}
            aria-label={social.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.15, y: -3, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
            className={`${sizeClasses[size]} glass-card rounded-full flex items-center justify-center hover-glow transition-all duration-300 group ${
              social.name === "GitHub"
                ? "bg-gradient-to-br from-pastel-pink-100 to-pastel-pink-200 dark:from-pastel-pink-900/40 dark:to-pastel-pink-800/40 border-2 border-pastel-pink-400 dark:border-pastel-pink-500"
                : social.name === "LinkedIn"
                ? "bg-gradient-to-br from-pastel-lavender-100 to-pastel-lavender-200 dark:from-pastel-lavender-900/40 dark:to-pastel-lavender-800/40 border-2 border-pastel-lavender-400 dark:border-pastel-lavender-500"
                : social.name === "Medium"
                ? "bg-gradient-to-br from-rose-100 to-pink-200 dark:from-rose-900/40 dark:to-pink-800/40 border-2 border-rose-400 dark:border-rose-500"
                : "bg-gradient-to-br from-pastel-peach-100 to-pastel-pink-100 dark:from-pastel-peach-900/40 dark:to-pastel-pink-800/40 border-2 border-pastel-peach-400 dark:border-pastel-peach-500"
            } relative z-30 shadow-md shadow-pastel-pink-200/50 dark:shadow-pastel-pink-900/50`}
            style={{ willChange: "transform" }}
          >
            <IconComponent 
              className={`${iconSizeClasses[size]} ${
                social.name === "GitHub"
                  ? "text-pastel-pink-600 dark:text-pastel-pink-400"
                  : social.name === "LinkedIn"
                  ? "text-pastel-lavender-600 dark:text-pastel-lavender-400"
                  : social.name === "Medium"
                  ? "text-rose-600 dark:text-rose-400"
                  : "text-pastel-peach-600 dark:text-pastel-peach-400"
              } transition-colors duration-300 ${
                social.name === "GitHub" 
                  ? "group-hover:text-pastel-pink-700 dark:group-hover:text-pastel-pink-300"
                  : social.name === "LinkedIn"
                  ? "group-hover:text-pastel-lavender-700 dark:group-hover:text-pastel-lavender-300"
                  : social.name === "Medium"
                  ? "group-hover:text-rose-700 dark:group-hover:text-rose-300"
                  : "group-hover:text-pastel-peach-700 dark:group-hover:text-pastel-peach-300"
              }`}
              style={{ 
                display: "block", 
                width: "100%", 
                height: "100%",
                minWidth: "24px",
                minHeight: "24px"
              }}
              strokeWidth={2.5}
              fill="none"
            />
            {showLabels && (
              <span className="ml-2 text-sm font-medium">{social.name}</span>
            )}
          </motion.a>
        );
      })}
    </div>
  );
}
