"use client";

import { motion } from "framer-motion";
import { fadeIn } from "@/lib/animations";
import { MapPin } from "lucide-react";
import SocialLinks from "@/components/ui/SocialLinks";

export default function Footer() {
  return (
    <footer className="relative px-4 py-12 border-t border-border/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-between gap-6"
        >
          {/* Brand Info */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold gradient-text mb-2 font-elegant">
              Aaliyah Momodu
            </h3>
            <p className="text-foreground/70 mb-2">Mid-Level Frontend Developer</p>
            <div className="flex items-center justify-center md:justify-start gap-2 text-foreground/60 text-sm">
              <MapPin className="w-4 h-4" />
              <span className="font-elegant">Paris, France 🇫🇷</span>
            </div>
          </div>

          {/* Social Links */}
          <SocialLinks size="md" />
        </motion.div>

        {/* Copyright */}
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-8 pt-8 border-t border-border/50 text-center text-sm text-foreground/60"
        >
          <p>
            © {new Date().getFullYear()} Aaliyah Momodu. Built with Next.js,
            TypeScript, and ❤️
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
