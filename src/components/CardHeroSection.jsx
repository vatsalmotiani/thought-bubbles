"use client";
import React, { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Image from "next/image";

export default function CardHeroSection() {
  /* ------------------- SETTINGS ------------------- */
  const slides = ["/assets/dummy2.jpg", "/assets/dummy5.jpg", "/assets/dummy3.jpg"];
  const overlayOpacity = 0.5;

  /* ------------------- REFS & STATE ------------------- */
  const containerRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  /* ------------------- SCROLL PROGRESS ------------------- */
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const totalImages = slides.length;
  const scrollProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  // Map scroll progress to image index
  const imageProgress = useTransform(scrollProgress, [0, 1], [0, totalImages]);

  // Calculate the wipe progress
  const wipeProgress = useTransform(imageProgress, (latest) => {
    const decimal = latest % 1;
    return decimal;
  });

  // Clip path transform with smoother easing
  const clipPathValue = useTransform(wipeProgress, [0, 0.02, 0.98, 1], ["inset(0 100% 0 0)", "inset(0 99% 0 0)", "inset(0 1% 0 0)", "inset(0 0% 0 0)"]);

  // Card scale
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.98, 0.95]);

  // Create progress transforms - one for each slide at top level
  const progressScale0 = useTransform(imageProgress, [0, 1], [0, 1]);
  const progressScale1 = useTransform(imageProgress, [1, 2], [0, 1]);
  const progressScale2 = useTransform(imageProgress, [2, 3], [0, 1]);
  const progressScale3 = useTransform(imageProgress, [3, 4], [0, 1]);

  const progressScales = [progressScale0, progressScale1, progressScale2, progressScale3];

  // Update current index based on scroll
  useEffect(() => {
    const unsubscribe = imageProgress.on("change", (latest) => {
      const newIndex = Math.max(0, Math.min(Math.floor(latest), totalImages - 1));
      setCurrentIndex(newIndex);
    });
    return () => unsubscribe();
  }, [imageProgress, totalImages]);

  /* ------------------- CUSTOM CURSOR ------------------- */
  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setCursorPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const handleCardClick = (e) => {
    e.preventDefault();
    const element = document.querySelector("#work");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // Determine if we should show the next image
  const showNextImage = currentIndex < totalImages - 1;

  return (
    <>
      <style
        jsx
        global
      >{`
        .hide-cursor-on-card {
          cursor: none !important;
        }
        .hide-cursor-on-card * {
          cursor: none !important;
        }
      `}</style>

      <div
        ref={containerRef}
        className='relative'
        style={{
          height: `${totalImages * 100}vh`,
        }}
      >
        <div className='sticky top-0 h-screen flex items-center justify-center p-4 bg-transparent'>
          <motion.div
            style={{ scale }}
            className='relative w-full h-full rounded-3xl overflow-hidden hide-cursor-on-card'
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            onMouseMove={handleMouseMove}
            onClick={handleCardClick}
          >
            {/* ---------- Base Image (Current) ---------- */}
            <div className='absolute inset-0'>
              <Image
                src={slides[currentIndex]}
                alt={`Slide ${currentIndex + 1}`}
                fill
                className='object-cover'
                priority
                sizes='100vw'
              />
              <div
                className='absolute inset-0 bg-gradient-to-t from-black/40 via-black/20 to-black/40'
                style={{ opacity: overlayOpacity }}
              />
            </div>

            {/* ---------- Wiping Image (Next) ---------- */}
            <motion.div
              className='absolute inset-0'
              style={{
                clipPath: clipPathValue,
                opacity: showNextImage ? 1 : 0,
                pointerEvents: showNextImage ? "auto" : "none",
                willChange: "clip-path",
                transform: "translateZ(0)",
                backfaceVisibility: "hidden",
              }}
            >
              <Image
                src={slides[Math.min(currentIndex + 1, totalImages - 1)]}
                alt={`Slide ${currentIndex + 2}`}
                fill
                className='object-cover'
                priority
                sizes='100vw'
              />
              <div
                className='absolute inset-0 bg-gradient-to-t from-black/40 via-black/20 to-black/40'
                style={{ opacity: overlayOpacity }}
              />
            </motion.div>

            {/* ---------- Hero Content ---------- */}
            <div className='relative z-10 flex flex-col items-start justify-end md:justify-center h-full p-6 md:p-10 pb-32 md:pb-10 text-white pointer-events-none'>
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.3 }}
                className='relative'
              >
                {/* Multiple shadow layers for better readability */}
                <p className='max-w-lg text-base md:text-lg lg:text-xl text-white leading-relaxed font-medium relative z-10'>We craft unforgettable brand experiences using creativity, strategy, and design that connect with audiences everywhere.</p>
                {/* Background blur layer */}
                <div
                  className='absolute opacity-20 inset-0 -z-10 bg-gradient-to-r from-black/60 via-black/40 to-transparent blur-xl'
                  style={{ transform: "scale(1.1)" }}
                />
              </motion.div>

              {/* Progress Indicator */}
              <div className='absolute bottom-6 md:bottom-10 right-6 md:right-10 flex gap-2'>
                {slides.map((_, idx) => (
                  <div
                    key={idx}
                    className='h-1 w-8 md:w-12 bg-white/30 rounded-full overflow-hidden'
                  >
                    <motion.div
                      className='h-full bg-white rounded-full origin-left'
                      style={{
                        scaleX: progressScales[idx],
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* ---------- Center CTA Button (Static) - Hidden on hover ---------- */}
            <motion.div
              className='absolute inset-0 flex items-center justify-center pointer-events-none z-20'
              animate={{
                opacity: isHovering ? 0 : 1,
                scale: isHovering ? 0.5 : 1,
              }}
              transition={{ duration: 0.2, ease: "easeOut" }}
            >
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 1, duration: 0.5, type: "spring" }}
                className='w-24 h-24 md:w-32 md:h-32 rounded-full bg-white flex items-center justify-center shadow-2xl'
              >
                <span className='text-black font-bold text-xs md:text-sm tracking-wider text-center leading-tight'>
                  OUR
                  <br />
                  WORK
                </span>
              </motion.div>
            </motion.div>

            {/* ---------- Custom Cursor (follows mouse) ---------- */}
            {isHovering && (
              <motion.div
                className='absolute pointer-events-none z-30 hidden md:block'
                style={{
                  left: 0,
                  top: 0,
                  x: cursorPosition.x - 60,
                  y: cursorPosition.y - 60,
                }}
                initial={{ scale: 0, opacity: 0 }}
                animate={{
                  scale: 1,
                  opacity: 1,
                }}
                exit={{ scale: 0, opacity: 0 }}
                transition={{
                  scale: { type: "spring", stiffness: 400, damping: 25 },
                  opacity: { duration: 0.2 },
                  x: { type: "spring", stiffness: 600, damping: 30, mass: 0.1 },
                  y: { type: "spring", stiffness: 600, damping: 30, mass: 0.1 },
                }}
              >
                <div className='w-[120px] h-[120px] rounded-full bg-white/95 backdrop-blur-sm flex items-center justify-center shadow-2xl border-2 border-white'>
                  <span className='text-black font-bold text-xs tracking-wider text-center leading-tight'>
                    OUR
                    <br />
                    WORK
                  </span>
                </div>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </>
  );
}
