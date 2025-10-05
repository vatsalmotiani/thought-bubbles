"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight } from "lucide-react";

export default function BottomCTAPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    // Show popup after 1 second
    const timer = setTimeout(() => {
      if (!isDismissed) {
        setIsVisible(true);
      }
    }, 20000);

    return () => clearTimeout(timer);
  }, [isDismissed]);

  const handleClose = () => {
    setIsVisible(false);
    setIsDismissed(true);
  };

  const handleCTAClick = () => {
    const contactSection = document.querySelector("#contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setIsVisible(false);
    setIsDismissed(true);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 100, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 100, scale: 0.8 }}
          transition={{
            duration: 0.5,
            ease: [0.43, 0.13, 0.23, 0.96],
          }}
          className='fixed bottom-4 right-4 left-4 sm:left-auto sm:bottom-6 sm:right-6 z-50 max-w-sm sm:max-w-md'
        >
          <div className='relative bg-white/50 backdrop-blur-md border-b border-white/20  rounded-xl sm:rounded-2xl shadow-sm overflow-hidden'>
            {/* Subtle gradient overlay */}
            <div className='absolute inset-0 bg-gradient-to-br from-white/50 to-transparent pointer-events-none' />

            {/* Close button */}
            <button
              onClick={handleClose}
              className='cursor-effect-text absolute top-2 right-2 sm:top-3 sm:right-3 z-10 p-1.5 rounded-full hover:bg-gray-100/80 transition-colors group'
              aria-label='Close'
            >
              <X className='w-4 h-4 text-gray-500 group-hover:text-gray-700' />
            </button>

            {/* Content */}
            <div className='relative p-4 pr-10 sm:p-5 sm:pr-12'>
              <div className='mb-3'>
                <h3 className='text-base sm:text-lg font-semibold text-tb-black mb-1 font-space'>Ready to start your project?</h3>
                <p className='text-xs sm:text-sm text-tb-body leading-relaxed font-space'>Let's discuss how we can bring your vision to life.</p>
              </div>

              {/* CTA Button */}

              <button
                onClick={handleCTAClick}
                className='cursor-effect-text px-4 py-2 bg-tb-blue/90 text-white rounded-full text-sm font-medium hover:bg-tb-blue transition-colors cursor-pointer'
              >
                LET'S TALK
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
