"use client";
import { AnimatePresence, motion } from "framer-motion";

export default function MotionWrap({ children }) {
  return (
    <AnimatePresence mode='wait'>
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 15 }}
        transition={{ 
          delay: 0.15, 
          type: "spring", 
          stiffness: 260, 
          damping: 20,
          duration: 0.4
        }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}

export function MotionWrap2({ children }) {
  return (
    <AnimatePresence mode='wait'>
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          delay: 0.05,
          duration: 0.3,
          ease: "easeOut"
        }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
