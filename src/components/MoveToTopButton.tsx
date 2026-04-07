import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronUp } from "lucide-react";
import { useLenis } from "lenis/react";
import { cn } from "@/lib/utils";

export const MoveToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const lenis = useLenis();

  useEffect(() => {
    let ticking = false;
    let lastVisible = false;
    const toggleVisibility = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(() => {
          const shouldShow = window.scrollY > 400;
          if (shouldShow !== lastVisible) {
            lastVisible = shouldShow;
            setIsVisible(shouldShow);
          }
          ticking = false;
        });
      }
    };

    window.addEventListener("scroll", toggleVisibility, { passive: true });
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    if (lenis) {
      lenis.scrollTo(0, { duration: 1.5 });
    } else {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, y: 20, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.8 }}
          whileHover={{ scale: 1.1, backgroundColor: "rgba(0, 0, 0, 0.9)" }}
          whileTap={{ scale: 0.9 }}
          onClick={scrollToTop}
          className={cn(
            "fixed bottom-8 right-8 z-[100]",
            "hidden md:flex items-center justify-center w-8 h-8 ",
            "bg-black text-white shadow-2xl",
            "backdrop-blur-md transition-colors duration-300",
            "group overflow-hidden",
          )}
          aria-label="Move to top"
        >
          {/* Subtle gold gradient background on hover */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 bg-gradient-to-t from-[#d4af37] to-[#8a6d10]" />

          <ChevronUp className="w-6 h-6 relative z-10 group-hover:animate-bounce" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};
