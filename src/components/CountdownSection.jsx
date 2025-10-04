"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";

export default function CountdownScroll() {
  const containerRef = useRef(null);
  const [isComplete, setIsComplete] = useState(false);

  // SPEED CONTROL: Adjust this value (higher = more scroll needed, slower countdown)
  const COUNTDOWN_SPEED = 1000; // Default: 300vh. Increase for slower, decrease for faster

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Transform scroll progress to year (2025 to 2009)
  const year = useTransform(scrollYProgress, [0.1, 0.95], [2025, 2009]);
  const displayYear = useTransform(year, (latest) => Math.round(latest));

  // Color transition from black to tb-blue for countdown only
  const colorProgress = useTransform(scrollYProgress, [0.1, 0.95], [0, 1]);

  // Split year into individual digits
  const yearString = useTransform(displayYear, (y) => y.toString());
  const digit1 = useTransform(yearString, (s) => s[0]);
  const digit2 = useTransform(yearString, (s) => s[1]);
  const digit3 = useTransform(yearString, (s) => s[2]);
  const digit4 = useTransform(yearString, (s) => s[3]);

  // Check if countdown is complete
  useEffect(() => {
    const unsubscribe = displayYear.on("change", (latest) => {
      if (latest <= 2009) {
        setIsComplete(true);
        // Remove scroll lock when complete
        document.body.style.overflow = "auto";
      }
    });

    return () => unsubscribe();
  }, [displayYear]);

  // Strict scroll control - only allow natural scrolling
  useEffect(() => {
    if (!isComplete) {
      const preventScroll = (e) => {
        const container = containerRef.current;
        if (!container) return;

        const rect = container.getBoundingClientRect();
        const containerBottom = rect.bottom;

        // If we're at the container and trying to scroll down past it
        if (containerBottom <= window.innerHeight && displayYear.get() > 2009) {
          e.preventDefault();
        }
      };

      // Prevent scroll past the section
      window.addEventListener("wheel", preventScroll, { passive: false });
      window.addEventListener("touchmove", preventScroll, { passive: false });

      return () => {
        window.removeEventListener("wheel", preventScroll);
        window.removeEventListener("touchmove", preventScroll);
      };
    }
  }, [isComplete, displayYear]);

  return (
    <div
      ref={containerRef}
      className='relative'
      style={{ minHeight: `${COUNTDOWN_SPEED}vh` }}
    >
      {/* Sticky container */}
      <div className='sticky top-0 h-screen flex items-center overflow-hidden'>
        <div className='w-full max-w-7xl mx-auto px-4 md:px-8'>
          <div className='grid md:grid-cols-2 gap-12 md:gap-20 lg:gap-32 items-center'>
            {/* Left side - Year countdown */}
            <div className='flex items-center justify-center md:col-span-1 col-span-2 md:justify-end'>
              <motion.div
                className='text-[180px] sm:text-[220px] md:text-[200px] lg:text-[320px] font-bold leading-none font-space tracking-tighter'
                style={{
                  color: useTransform(colorProgress, [0, 1], ["#1E1E1E", "#00B6E7"]),
                }}
              >
                <motion.span>{digit1}</motion.span>
                <motion.span>{digit2}</motion.span>
                <motion.span>{digit3}</motion.span>
                <motion.span>{digit4}</motion.span>
              </motion.div>
            </div>

            {/* Right side - Minimal info */}
            <div className='hidden md:block'>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <p className='text-lg md:text-xl text-tb-body leading-relaxed max-w-md'>Building excellence since day one.</p>
              </motion.div>
            </div>
          </div>

          {/* Bottom minimal text - mobile only */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className='absolute bottom-20 left-0 right-0 px-4 md:hidden'
          >
            <div className='max-w-7xl mx-auto'>
              <p className='text-sm text-tb-body text-center'>Building excellence since day one.</p>
            </div>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: isComplete ? 0 : 1 }}
            transition={{ duration: 0.5 }}
            className='absolute bottom-8 left-1/2 -translate-x-1/2'
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className='w-6 h-10 border-2 border-tb-body rounded-full flex items-start justify-center p-2'
            >
              <motion.div className='w-1 h-2 bg-tb-body rounded-full' />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
