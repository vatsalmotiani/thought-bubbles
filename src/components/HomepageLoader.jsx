"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const HomepageLoader = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [bubbles, setBubbles] = useState([]);

  // Create random bubbles
  useEffect(() => {
    if (!isLoading) return;

    const newBubbles = Array.from({ length: 25 }).map((_, i) => ({
      id: i,
      size: 15 + Math.random() * 45,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 0.3, // Reduced delay for faster appearance
      duration: 2 + Math.random() * 2, // Faster animation
      opacity: 0.3 + Math.random() * 0.7,
    }));

    setBubbles(newBubbles);

    // Auto-close after 2 seconds (reduced from 3)
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, [isLoading]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className='fixed inset-0 z-50 flex items-center justify-center'
          style={{ backgroundColor: "#00B6E7" }}
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: {
              duration: 0.6,
              ease: [0.22, 1, 0.36, 1],
            },
          }}
        >
          {/* Bubbles - now appearing faster */}
          {bubbles.map((bubble) => (
            <motion.div
              key={bubble.id}
              className='absolute rounded-full bg-white/30 backdrop-blur-sm'
              style={{
                left: `${bubble.x}%`,
                top: `${bubble.y}%`,
                width: `${bubble.size}px`,
                height: `${bubble.size}px`,
                opacity: bubble.opacity,
              }}
              initial={{ scale: 0 }}
              animate={{
                scale: [0, 1, 1.1, 0],
                y: [0, -30, -60],
                x: [0, Math.sin(bubble.id) * 15, 0],
                opacity: [0, bubble.opacity, 0],
              }}
              transition={{
                duration: bubble.duration,
                delay: bubble.delay,
                repeat: Infinity,
                repeatDelay: 0.3, // Reduced delay between cycles
                ease: "easeInOut",
              }}
            />
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default HomepageLoader;
