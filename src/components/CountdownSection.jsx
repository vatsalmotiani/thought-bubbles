"use client";
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from "framer-motion";
import { useRef, useEffect, useState, useCallback, useMemo } from "react";
import Image from "next/image";

export default function CountdownScroll() {
  const containerRef = useRef(null);
  const yearRef = useRef(null);
  const [isComplete, setIsComplete] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);

  // ---------------------- CONFIG ----------------------
  const AUTO_SCROLL_PX_PER_SEC = 800;
  const USER_INACTIVITY_RESUME_MS = 300;
  const CENTER_TOLERANCE_FRAC = 0.8;
  const COUNTDOWN_SPEED = 1300;
  // -----------------------------------------------------

  // Set window width on mount
  useEffect(() => {
    setWindowWidth(window.innerWidth);
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const year = useTransform(scrollYProgress, [0.1, 0.95], [2009, 2025]);
  const smoothYear = useSpring(year, { stiffness: 50, damping: 30, mass: 1 });
  const displayYear = useTransform(smoothYear, (latest) => Math.round(latest));
  const colorProgress = useTransform(scrollYProgress, [0.1, 0.95], [0, 1]);

  // Orbit transforms
  const orbitRotation = useTransform(scrollYProgress, [0.1, 0.95], [0, 720]);
  const orbitScale = useTransform(scrollYProgress, [0.1, 0.5, 0.95], [0.5, 1.2, 0.8]);

  // Year opacity for layering with images
  const yearOpacity = useTransform(scrollYProgress, [0.1, 0.95], [0.95, 0.85]);

  // Progress for scroll indicator
  const scrollProgress = useTransform(scrollYProgress, [0.1, 0.95], [0, 1]);

  // Year digits
  const yearString = useTransform(displayYear, (y) => y.toString());
  const digit1 = useTransform(yearString, (s) => s[0]);
  const digit2 = useTransform(yearString, (s) => s[1]);
  const digit3 = useTransform(yearString, (s) => s[2]);
  const digit4 = useTransform(yearString, (s) => s[3]);

  // ---------------------- MILESTONES ----------------------
  const milestones = useMemo(
    () => [
      { year: 2022, text: "Building excellence since day one.", image: "/assets/dummy1.jpg", side: "right" },
      { year: 2020, text: "Adapting and innovating through challenges.", image: "/assets/dummy2.jpg", side: "left" },
      { year: 2016, text: "Laying the groundwork for future innovation.", image: "/assets/dummy3.jpg", side: "right" },
      { year: 2013, text: "Expanding horizons and breaking boundaries.", image: "/assets/dummy4.jpg", side: "left" },
      { year: 2009, text: "Where it all began - the foundation.", image: "/assets/dummy5.jpg", side: "right" },
    ],
    [] // dependencies — empty means it stays constant
  );

  const [currentMilestone, setCurrentMilestone] = useState(milestones[0]);
  const [milestoneKey, setMilestoneKey] = useState(0);

  useEffect(() => {
    const unsubscribe = displayYear.on("change", (latest) => {
      for (let i = 0; i < milestones.length; i++) {
        if (latest >= milestones[i].year) {
          if (currentMilestone.year !== milestones[i].year) {
            setCurrentMilestone(milestones[i]);
            setMilestoneKey((prev) => prev + 1);
          }
          break;
        }
      }
    });
    return () => unsubscribe();
  }, [displayYear, currentMilestone, milestones]);

  // ---------------------- AUTO SCROLL ----------------------
  const rafRef = useRef(null);
  const lastTimestampRef = useRef(null);
  const userInteractingRef = useRef(false);
  const inactivityTimeoutRef = useRef(null);
  const autoActiveRef = useRef(false);

  const isDisplayInAutoRange = useCallback(() => {
    const v = displayYear.get();
    return v >= 2009 && v < 2024;
  }, [displayYear]);

  const isYearCentered = () => {
    const el = yearRef.current;
    if (!el) return false;
    const rect = el.getBoundingClientRect();
    const centerY = rect.top + rect.height / 2;
    const viewportCenter = window.innerHeight / 2;
    const tolerance = window.innerHeight * CENTER_TOLERANCE_FRAC;
    return Math.abs(centerY - viewportCenter) <= tolerance;
  };

  function stopAutoScroll() {
    autoActiveRef.current = false;
    lastTimestampRef.current = null;
    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    }
  }

  const startAutoScroll = useCallback(() => {
    if (autoActiveRef.current) return;
    autoActiveRef.current = true;
    lastTimestampRef.current = null;

    const step = (time) => {
      if (!autoActiveRef.current) return;
      if (lastTimestampRef.current == null) lastTimestampRef.current = time;
      const delta = (time - lastTimestampRef.current) / 1000;
      lastTimestampRef.current = time;

      const dy = AUTO_SCROLL_PX_PER_SEC * delta;
      window.scrollBy(0, dy);

      const reachedEndYear = displayYear.get() >= 2024 - 0.4;
      const reachedScrollEnd = containerRef.current && containerRef.current.getBoundingClientRect().bottom <= window.innerHeight + 2;

      if (reachedEndYear || reachedScrollEnd) {
        stopAutoScroll();
        setIsComplete(true);
        setTimeout(() => {
          document.querySelector("#work")?.scrollIntoView({ behavior: "smooth" });
        }, 500);
        return;
      }

      rafRef.current = requestAnimationFrame(step);
    };

    rafRef.current = requestAnimationFrame(step);
  }, [displayYear]);

  const cancelInactivityResume = () => {
    if (inactivityTimeoutRef.current) {
      clearTimeout(inactivityTimeoutRef.current);
      inactivityTimeoutRef.current = null;
    }
  };

  const scheduleResumeIfEligible = useCallback(() => {
    cancelInactivityResume();
    inactivityTimeoutRef.current = setTimeout(() => {
      userInteractingRef.current = false;
      if (isDisplayInAutoRange() && isYearCentered()) startAutoScroll();
    }, USER_INACTIVITY_RESUME_MS);
  }, [isDisplayInAutoRange, startAutoScroll]);

  const onUserInteraction = useCallback(() => {
    userInteractingRef.current = true;
    stopAutoScroll();
    scheduleResumeIfEligible();
  }, [scheduleResumeIfEligible]);

  useEffect(() => {
    const opts = { passive: true, capture: true };
    ["wheel", "touchstart", "touchmove", "pointerdown", "keydown"].forEach((evt) => window.addEventListener(evt, onUserInteraction, opts));
    return () => ["wheel", "touchstart", "touchmove", "pointerdown", "keydown"].forEach((evt) => window.removeEventListener(evt, onUserInteraction, opts));
  }, [onUserInteraction]);

  useEffect(() => {
    let guardTimeout = null;
    const unsub = displayYear.on("change", () => {
      if (userInteractingRef.current) {
        cancelInactivityResume();
        scheduleResumeIfEligible();
        return;
      }
      if (guardTimeout) clearTimeout(guardTimeout);
      guardTimeout = setTimeout(() => {
        guardTimeout = null;
        if (isDisplayInAutoRange() && isYearCentered()) startAutoScroll();
        else stopAutoScroll();
      }, 80);
    });
    return () => {
      if (guardTimeout) clearTimeout(guardTimeout);
      unsub();
      cancelInactivityResume();
      stopAutoScroll();
    };
  }, [displayYear, scrollYProgress, isDisplayInAutoRange, scheduleResumeIfEligible, startAutoScroll]);

  useEffect(() => {
    const stopHandler = () => {
      stopAutoScroll();
      userInteractingRef.current = true;
      cancelInactivityResume();
    };
    window.addEventListener("stopCountdownAutoScroll", stopHandler);
    return () => window.removeEventListener("stopCountdownAutoScroll", stopHandler);
  }, []);

  // ---------------------- COMPONENT RENDER ----------------------
  const FloatingOrb = ({ delay, radius, speed }) => (
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
        animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: speed, repeat: Infinity, ease: "easeInOut" }}
      />
    </motion.div>
  );

  return (
    <div
      ref={containerRef}
      className='relative'
      style={{ minHeight: `${COUNTDOWN_SPEED}vh` }}
    >
      <div className='sticky top-0 h-screen flex items-center overflow-hidden'>
        <div className='w-full max-w-7xl mx-auto px-4 md:px-8'>
          {/* SCROLL TO EXPLORE TEXT */}
          <motion.div
            className='absolute top-12 left-1/2 -translate-x-1/2'
            // style={{ opacity: useTransform(scrollYProgress, [0, 0.15], [0.4, 0]) }}
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className='text-tb-body/40 text-xs tracking-[0.3em] font-space'
            >
              SCROLL TO EXPLORE
            </motion.div>
          </motion.div>

          {/* PROGRESS SCROLL WHEEL INDICATOR - Hidden on mobile, Left on desktop */}
          <motion.div
            className='hidden md:flex fixed top-1/2 left-8 -translate-y-1/2 z-40'
            style={{ opacity: useTransform(scrollYProgress, [0, 0.1, 0.9, 0.95], [0, 1, 1, 0]) }}
          >
            <div className='flex flex-col items-center gap-3'>
              {/* Progress bar */}
              <div className='w-[2px] h-32 bg-tb-body/20 rounded-full overflow-hidden relative'>
                <motion.div
                  className='absolute top-0 left-0 w-full bg-tb-blue origin-top'
                  style={{
                    scaleY: scrollProgress,
                  }}
                />
              </div>

              {/* Scroll wheel icon */}
              <motion.div
                className='w-6 h-10 border-[1.5px] border-tb-body/40 rounded-full flex items-start justify-center p-2'
                animate={{ opacity: [0.4, 0.8, 0.4] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                <motion.div
                  className='w-1 h-2 bg-tb-body/60 rounded-full'
                  animate={{ y: [0, 8, 0], opacity: [0.8, 0.3, 0.8] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                />
              </motion.div>

              {/* Progress text */}
              <motion.div
                className='text-xs text-tb-body/40 font-space tabular-nums'
                style={{
                  opacity: useTransform(scrollProgress, [0, 1], [0.4, 1]),
                }}
              >
                <motion.span>{useTransform(scrollProgress, (v) => Math.round(v * 100))}</motion.span>%
              </motion.div>
            </div>
          </motion.div>

          {/* DESKTOP LAYOUT */}
          <div className='hidden md:grid md:grid-cols-2 md:gap-8 h-full items-center'>
            {/* LEFT SIDE - YEAR (50%) */}
            <div className='relative flex flex-col items-center justify-center -mt-20'>
              <div className='relative flex items-center justify-center'>
                {[0, 90, 180, 270, 45, 135, 225, 315].map((d, i) => (
                  <FloatingOrb
                    key={i}
                    delay={d}
                    radius={i < 4 ? 120 : 180}
                    speed={i % 2 === 0 ? 2 : 3}
                  />
                ))}

                <motion.div
                  ref={yearRef}
                  className='text-[180px] lg:text-[240px] xl:text-[280px] font-bold leading-none font-space tracking-tighter relative z-10'
                  style={{
                    color: useTransform(colorProgress, [0, 1], ["#1E1E1E", "#00B6E7"]),
                    opacity: yearOpacity,
                  }}
                >
                  <motion.span>{digit1}</motion.span>
                  <motion.span>{digit2}</motion.span>
                  <motion.span>{digit3}</motion.span>
                  <motion.span>{digit4}</motion.span>
                </motion.div>
              </div>

              {/* MILESTONE TEXT - Under year on desktop */}
              <motion.div className='mt-8 px-4'>
                <AnimatePresence mode='wait'>
                  <motion.p
                    key={currentMilestone.text}
                    initial={{ opacity: 0, y: 30, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -30, scale: 0.95 }}
                    transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                    className='text-md font-space text-tb-body text-center'
                  >
                    {currentMilestone.text}
                  </motion.p>
                </AnimatePresence>
              </motion.div>
            </div>

            {/* RIGHT SIDE - IMAGES (50%) - All fly from right */}
            <div className='relative flex items-center justify-center h-full'>
              <AnimatePresence mode='wait'>
                <motion.div
                  key={milestoneKey}
                  className='relative w-full flex items-center justify-center'
                >
                  <motion.div
                    initial={{
                      x: windowWidth > 0 ? windowWidth * 0.6 : 600,
                      opacity: 0,
                      scale: 1.8,
                      rotate: 25,
                    }}
                    animate={{
                      x: 0,
                      opacity: 1,
                      scale: 1,
                      rotate: 0,
                    }}
                    exit={{
                      x: windowWidth > 0 ? windowWidth * 0.6 : 600,
                      opacity: 0,
                      scale: 0.7,
                      rotate: 15,
                    }}
                    transition={{
                      duration: 1.4,
                      ease: [0.19, 1, 0.22, 1],
                      scale: { duration: 1.2, ease: [0.34, 1.56, 0.64, 1] },
                      rotate: { duration: 1.3, ease: [0.16, 1, 0.3, 1] },
                    }}
                    className='relative w-full max-w-lg aspect-[4/3]'
                  >
                    <motion.div
                      className='relative w-full h-full'
                      animate={{
                        y: [0, -15, 0],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      <motion.div
                        className='absolute inset-0 bg-gradient-to-br from-tb-blue/20 to-transparent rounded-2xl blur-2xl'
                        animate={{
                          scale: [1, 1.1, 1],
                          opacity: [0.3, 0.5, 0.3],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      />
                      <Image
                        src={currentMilestone.image}
                        alt={currentMilestone.text}
                        fill
                        sizes='(max-width: 1024px) 50vw, 40vw'
                        className='object-cover rounded-2xl shadow-2xl'
                        style={{
                          boxShadow: "0 15px 30px -8px rgba(0, 0, 0, 0.25)",
                        }}
                        priority
                      />
                      <div className='absolute inset-0 rounded-2xl ring-1 ring-white/10' />
                    </motion.div>
                  </motion.div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* MOBILE LAYOUT */}
          <div className='md:hidden flex flex-col items-center justify-center h-full gap-12'>
            {/* 1. YEAR at top */}
            <div className='relative flex flex-col items-center justify-center'>
              <div className='relative flex items-center justify-center'>
                {[0, 90, 180, 270, 45, 135, 225, 315].map((d, i) => (
                  <FloatingOrb
                    key={i}
                    delay={d}
                    radius={i < 4 ? 80 : 120}
                    speed={i % 2 === 0 ? 2 : 3}
                  />
                ))}

                <motion.div
                  className='text-[120px] sm:text-[160px] font-bold leading-none font-space tracking-tighter relative z-10'
                  style={{
                    color: useTransform(colorProgress, [0, 1], ["#1E1E1E", "#00B6E7"]),
                    opacity: yearOpacity,
                  }}
                >
                  <motion.span>{digit1}</motion.span>
                  <motion.span>{digit2}</motion.span>
                  <motion.span>{digit3}</motion.span>
                  <motion.span>{digit4}</motion.span>
                </motion.div>
              </div>

              {/* MILESTONE TEXT - Under year on mobile */}
              <motion.div className='mt-8 px-4'>
                <AnimatePresence mode='wait'>
                  <motion.p
                    key={currentMilestone.text}
                    initial={{ opacity: 0, y: 30, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -30, scale: 0.95 }}
                    transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                    className='text-md font-space text-tb-body text-center'
                  >
                    {currentMilestone.text}
                  </motion.p>
                </AnimatePresence>
              </motion.div>
            </div>

            {/* 2. IMAGES in center - flying from respective sides */}
            <div className='relative w-full flex items-center justify-center px-4'>
              <AnimatePresence mode='wait'>
                <motion.div
                  key={milestoneKey}
                  className='relative w-full max-w-sm'
                >
                  <motion.div
                    initial={{
                      x: windowWidth > 0 ? (currentMilestone.side === "left" ? -windowWidth * 1.2 : windowWidth * 1.2) : currentMilestone.side === "left" ? -500 : 500,
                      opacity: 0,
                      scale: 1.8,
                      rotate: currentMilestone.side === "left" ? -25 : 25,
                    }}
                    animate={{
                      x: 0,
                      opacity: 1,
                      scale: 1,
                      rotate: 0,
                    }}
                    exit={{
                      x: windowWidth > 0 ? (currentMilestone.side === "left" ? -windowWidth : windowWidth) : currentMilestone.side === "left" ? -500 : 500,
                      opacity: 0,
                      scale: 0.7,
                      rotate: currentMilestone.side === "left" ? -15 : 15,
                    }}
                    transition={{
                      duration: 1.4,
                      ease: [0.19, 1, 0.22, 1],
                      scale: { duration: 1.2, ease: [0.34, 1.56, 0.64, 1] },
                      rotate: { duration: 1.3, ease: [0.16, 1, 0.3, 1] },
                    }}
                    className='relative w-full aspect-[4/3]'
                  >
                    <motion.div
                      className='relative w-full h-full'
                      animate={{
                        y: [0, -15, 0],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      <motion.div
                        className='absolute inset-0 bg-gradient-to-br from-tb-blue/20 to-transparent rounded-2xl blur-2xl'
                        animate={{
                          scale: [1, 1.1, 1],
                          opacity: [0.3, 0.5, 0.3],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      />
                      <Image
                        src={currentMilestone.image}
                        alt={currentMilestone.text}
                        fill
                        sizes='90vw'
                        className='object-cover rounded-2xl shadow-2xl'
                        style={{
                          boxShadow: "0 15px 30px -8px rgba(0, 0, 0, 0.25)",
                        }}
                        priority
                      />
                      <div className='absolute inset-0 rounded-2xl ring-1 ring-white/10' />
                    </motion.div>
                  </motion.div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* MILESTONE TEXT - Center bottom on both layouts */}
          <motion.div className='absolute bottom-16 md:bottom-20 left-0 right-0 px-4 z-30 hidden'>
            <div className='max-w-4xl mx-auto'>
              <AnimatePresence mode='wait'>
                <motion.p
                  key={currentMilestone.text}
                  initial={{ opacity: 0, y: 30, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -30, scale: 0.95 }}
                  transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                  className='text-base md:text-xl lg:text-2xl font-space text-tb-body text-center'
                >
                  {currentMilestone.text}
                </motion.p>
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
