"use client";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef, useEffect, useState } from "react";

export default function CountdownScroll() {
  const containerRef = useRef(null);
  const [isComplete, setIsComplete] = useState(false);

  const COUNTDOWN_SPEED = 1300;

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const year = useTransform(scrollYProgress, [0.1, 0.95], [2009, 2025]);
  const smoothYear = useSpring(year, { stiffness: 50, damping: 30, mass: 1 });
  const displayYear = useTransform(smoothYear, (latest) => Math.round(latest));

  const colorProgress = useTransform(scrollYProgress, [0.1, 0.95], [0, 1]);

  // Orbiting elements transforms
  const orbitRotation = useTransform(scrollYProgress, [0.1, 0.95], [0, 720]);
  const orbitScale = useTransform(scrollYProgress, [0.1, 0.5, 0.95], [0.5, 1.2, 0.8]);

  const yearString = useTransform(displayYear, (y) => y.toString());
  const digit1 = useTransform(yearString, (s) => s[0]);
  const digit2 = useTransform(yearString, (s) => s[1]);
  const digit3 = useTransform(yearString, (s) => s[2]);
  const digit4 = useTransform(yearString, (s) => s[3]);

  const milestones = [
    { year: 2022, text: "Building excellence since day one." },
    { year: 2020, text: "Adapting and innovating through challenges." },
    { year: 2016, text: "Laying the groundwork for future innovation." },
    { year: 2013, text: "Expanding horizons and breaking boundaries." },
    { year: 2009, text: "Where it all began - the foundation." },
  ];

  const [currentText, setCurrentText] = useState(milestones[0].text);

  useEffect(() => {
    const unsubscribe = displayYear.on("change", (latest) => {
      for (let i = 0; i < milestones.length; i++) {
        if (latest >= milestones[i].year) {
          if (currentText !== milestones[i].text) {
            setCurrentText(milestones[i].text);
          }
          break;
        }
      }
    });
    return () => unsubscribe();
  }, [displayYear, currentText]);

  useEffect(() => {
    const unsubscribe = displayYear.on("change", (latest) => {
      if (latest <= 2009) {
        setIsComplete(true);
        document.body.style.overflow = "auto";
      }
    });
    return () => unsubscribe();
  }, [displayYear]);

  useEffect(() => {
    if (!isComplete) {
      const preventScroll = (e) => {
        const container = containerRef.current;
        if (!container) return;
        const rect = container.getBoundingClientRect();
        const containerBottom = rect.bottom;
        if (containerBottom <= window.innerHeight && displayYear.get() > 2009) {
          e.preventDefault();
        }
      };
      window.addEventListener("wheel", preventScroll, { passive: false });
      window.addEventListener("touchmove", preventScroll, { passive: false });
      return () => {
        window.removeEventListener("wheel", preventScroll);
        window.removeEventListener("touchmove", preventScroll);
      };
    }
  }, [isComplete, displayYear]);

  // Floating particles that orbit the numbers
  const FloatingOrb = ({ delay, radius, speed }) => {
    return (
      <motion.div
        className='absolute left-1/2 top-1/2'
        style={{
          x: useTransform(orbitRotation, (r) => Math.cos(((r + delay) * Math.PI) / 180) * radius - 8),
          y: useTransform(orbitRotation, (r) => Math.sin(((r + delay) * Math.PI) / 180) * radius - 8),
          scale: orbitScale,
        }}
      >
        <motion.div
          className='w-4 h-4 rounded-full bg-tb-blue/30 blur-sm'
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: speed,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </motion.div>
    );
  };

  return (
    <div
      ref={containerRef}
      className='relative'
      style={{ minHeight: `${COUNTDOWN_SPEED}vh` }}
    >
      <div className='sticky top-0 h-screen flex items-center overflow-hidden'>
        <div className='w-full max-w-7xl mx-auto px-4 md:px-8'>
          {/* Subtle hint at top */}
          <motion.div
            className='absolute top-12 left-1/2 -translate-x-1/2'
            style={{
              opacity: useTransform(scrollYProgress, [0, 0.15], [0.4, 0]),
            }}
          >
            <motion.div
              animate={{
                y: [0, 8, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className='text-tb-body/40 text-xs tracking-[0.3em] font-space'
            >
              SCROLL TO EXPLORE
            </motion.div>
          </motion.div>

          <div className='relative flex items-center justify-center'>
            {/* Orbiting particles around the year */}
            <FloatingOrb
              delay={0}
              radius={200}
              speed={2}
            />
            <FloatingOrb
              delay={90}
              radius={200}
              speed={2.5}
            />
            <FloatingOrb
              delay={180}
              radius={200}
              speed={2}
            />
            <FloatingOrb
              delay={270}
              radius={200}
              speed={2.5}
            />

            <FloatingOrb
              delay={45}
              radius={280}
              speed={3}
            />
            <FloatingOrb
              delay={135}
              radius={280}
              speed={3.5}
            />
            <FloatingOrb
              delay={225}
              radius={280}
              speed={3}
            />
            <FloatingOrb
              delay={315}
              radius={280}
              speed={3.5}
            />

            {/* Main year display */}
            <motion.div
              className='text-[180px] sm:text-[220px] md:text-[200px] lg:text-[320px] font-bold leading-none font-space tracking-tighter relative z-10'
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

          {/* Dynamic milestone text */}
          <motion.div className='absolute bottom-24 left-0 right-0 px-4'>
            <div className='max-w-7xl mx-auto'>
              <motion.p
                key={currentText}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -30, scale: 0.95 }}
                transition={{
                  duration: 0.7,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className='text-xl font-space text-tb-body text-center'
              >
                {currentText}
              </motion.p>
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
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className='w-6 h-10 opacity-[30%] border-[1.5px] border-tb-body rounded-full flex items-start justify-center p-2'
            >
              <motion.div
                className='w-1 h-2 bg-tb-body rounded-full'
                animate={{
                  height: [8, 12, 8],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
