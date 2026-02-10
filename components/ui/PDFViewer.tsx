"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Download } from "lucide-react";
import { useEffect } from "react";

interface PDFViewerProps {
  isOpen: boolean;
  onClose: () => void;
  pdfUrl: string;
  fileName?: string;
}

export default function PDFViewer({
  isOpen,
  onClose,
  pdfUrl,
  fileName = "CV.pdf",
}: PDFViewerProps) {
  // Close on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      // Prevent body scroll when modal is open
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/70 dark:bg-black/80 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-4 md:inset-8 lg:inset-12 z-50 flex flex-col"
          >
            <div className="glass-card rounded-t-2xl md:rounded-2xl flex flex-col h-full overflow-hidden border border-pastel-pink-200/50 dark:border-pastel-pink-800/50 shadow-2xl">
              {/* Header */}
              <div className="flex items-center justify-between p-4 md:p-6 border-b border-border bg-gradient-to-r from-pastel-pink-500/10 to-pastel-lavender-500/10">
                <h2 className="text-xl md:text-2xl font-bold gradient-text font-elegant">
                  Curriculum Vitae
                </h2>
                <div className="flex items-center gap-3">
                  {/* Download Button */}
                  <motion.a
                    href={pdfUrl}
                    download={fileName}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-4 py-2 bg-gradient-to-r from-pastel-pink-500 to-pastel-lavender-500 text-white rounded-lg font-semibold hover-glow transition-all duration-300 flex items-center gap-2 text-sm md:text-base"
                  >
                    <Download className="w-4 h-4 md:w-5 md:h-5" />
                    <span className="hidden sm:inline">Download</span>
                  </motion.a>
                  {/* Close Button */}
                  <motion.button
                    onClick={onClose}
                    whileHover={{ scale: 1.1, rotate: 90 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-2 rounded-lg glass-card hover:bg-pastel-pink-500/20 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-pastel-pink-500"
                    aria-label="Close PDF viewer"
                  >
                    <X className="w-5 h-5 md:w-6 md:h-6 text-foreground" />
                  </motion.button>
                </div>
              </div>

              {/* PDF Viewer */}
              <div className="flex-1 overflow-hidden bg-gray-100 dark:bg-gray-900">
                <iframe
                  src={`${pdfUrl}#toolbar=1&navpanes=1&scrollbar=1`}
                  className="w-full h-full border-0"
                  title="CV Preview"
                  aria-label="CV Preview"
                />
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
