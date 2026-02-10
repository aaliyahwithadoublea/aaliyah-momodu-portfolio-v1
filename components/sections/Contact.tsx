"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, fadeIn } from "@/lib/animations";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Send, Mail, MapPin, Phone, Download, Eye } from "lucide-react";
import SocialLinks from "@/components/ui/SocialLinks";
import PDFViewer from "@/components/ui/PDFViewer";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [isPDFViewerOpen, setIsPDFViewerOpen] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log("Form submitted:", data);
    setSubmitSuccess(true);
    setIsSubmitting(false);
    reset();
    setTimeout(() => setSubmitSuccess(false), 5000);
  };

  return (
    <section
      id="contact"
      ref={ref}
      className="min-h-screen flex items-center justify-center px-4 py-20"
    >
      <motion.div 
        className="max-w-4xl mx-auto w-full"
        variants={fadeIn}
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
            Get In Touch
          </motion.h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Info */}
            <motion.div variants={fadeInUp} className="space-y-6">
              <div className="glass-card">
                <h3 className="text-2xl font-semibold mb-6 text-pastel-pink-600 dark:text-pastel-pink-400 font-elegant">
                  Let&apos;s Connect
                </h3>
                <p className="text-foreground/80 mb-6 leading-relaxed font-body">
                  I&apos;m always open to discussing new opportunities, interesting
                  projects, or just having a chat about frontend development.
                  Feel free to reach out!
                </p>

                <div className="space-y-4">
                  <a
                    href="mailto:momoduaaliyah1@gmail.com"
                    className="flex items-center gap-3 text-foreground/80 hover:text-pastel-pink-500 transition-colors duration-300"
                  >
                    <Mail className="w-5 h-5" />
                    <span>momoduaaliyah1@gmail.com</span>
                  </a>
                  <a
                    href="tel:+33765141852"
                    className="flex items-center gap-3 text-foreground/80 hover:text-pastel-pink-500 transition-colors duration-300"
                  >
                    <Phone className="w-5 h-5" />
                    <span>+33 7651 418 52</span>
                  </a>
                  <div className="flex items-center gap-3 text-foreground/80">
                    <MapPin className="w-5 h-5" />
                    <span className="font-elegant">Paris, France 🇫🇷</span>
                  </div>
                </div>

                <div className="mt-6">
                  <SocialLinks size="md" />
                </div>

                {/* CV Buttons */}
                <div className="mt-6 flex flex-col sm:flex-row gap-3">
                  <motion.div 
                    className="flex-1"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <button
                      onClick={() => setIsPDFViewerOpen(true)}
                      className="w-full px-6 py-3 glass-card text-foreground font-semibold hover:shadow-lg hover:shadow-pastel-pink-500/30 dark:hover:shadow-pastel-pink-900/30 transition-all duration-300 flex items-center justify-center gap-2 rounded-lg border border-pastel-pink-200/50 dark:border-pastel-pink-800/50 hover:border-pastel-pink-300 dark:hover:border-pastel-pink-700"
                    >
                      <Eye className="w-5 h-5" />
                      <span>View CV</span>
                    </button>
                  </motion.div>
                  <motion.div 
                    className="flex-1"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <a
                      href="/CV/AALIYAH MOMODU CV.pdf"
                      download="Aaliyah_Momodu_CV.pdf"
                      className="w-full px-6 py-3 bg-gradient-to-r from-pastel-pink-500 to-pastel-lavender-500 text-white rounded-lg font-semibold hover-glow transition-all duration-300 flex items-center justify-center gap-2"
                    >
                      <Download className="w-5 h-5" />
                      <span>Download CV</span>
                    </a>
                  </motion.div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div variants={fadeInUp}>
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="glass-card space-y-6"
              >
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-2 text-foreground/80"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    {...register("name")}
                    className="w-full px-4 py-3 bg-background/50 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-pastel-pink-500 focus:border-transparent transition-all duration-300"
                    placeholder="Your name"
                    aria-invalid={errors.name ? "true" : "false"}
                    aria-describedby={errors.name ? "name-error" : undefined}
                  />
                  {errors.name && (
                    <p
                      id="name-error"
                      className="mt-1 text-sm text-red-500"
                      role="alert"
                    >
                      {errors.name.message}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-2 text-foreground/80"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    {...register("email")}
                    className="w-full px-4 py-3 bg-background/50 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-pastel-pink-500 focus:border-transparent transition-all duration-300"
                    placeholder="your.email@example.com"
                    aria-invalid={errors.email ? "true" : "false"}
                    aria-describedby={errors.email ? "email-error" : undefined}
                  />
                  {errors.email && (
                    <p
                      id="email-error"
                      className="mt-1 text-sm text-red-500"
                      role="alert"
                    >
                      {errors.email.message}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium mb-2 text-foreground/80"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    {...register("message")}
                    rows={5}
                    className="w-full px-4 py-3 bg-background/50 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-pastel-pink-500 focus:border-transparent transition-all duration-300 resize-none"
                    placeholder="Your message..."
                    aria-invalid={errors.message ? "true" : "false"}
                    aria-describedby={
                      errors.message ? "message-error" : undefined
                    }
                  />
                  {errors.message && (
                    <p
                      id="message-error"
                      className="mt-1 text-sm text-red-500"
                      role="alert"
                    >
                      {errors.message.message}
                    </p>
                  )}
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full px-6 py-3 bg-gradient-to-r from-pastel-pink-500 to-pastel-lavender-500 text-white rounded-lg font-semibold hover-glow disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <span className="animate-spin">⏳</span>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Send Message</span>
                    </>
                  )}
                </motion.button>

                {submitSuccess && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-green-100 dark:bg-green-900/30 border border-green-300 dark:border-green-700 rounded-lg text-green-700 dark:text-green-300 text-sm"
                    role="alert"
                  >
                    Thank you! Your message has been sent successfully.
                  </motion.div>
                )}
              </form>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>

      {/* PDF Viewer Modal */}
      <PDFViewer
        isOpen={isPDFViewerOpen}
        onClose={() => setIsPDFViewerOpen(false)}
        pdfUrl="/CV/AALIYAH MOMODU CV.pdf"
        fileName="Aaliyah_Momodu_CV.pdf"
      />
    </section>
  );
}
