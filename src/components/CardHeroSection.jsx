"use client";
import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Image from "next/image";

export default function CardHeroSection() {
  const slides = ["/assets/dummy2.jpg", "/assets/dummy5.jpg"];
  const overlayOpacity = 0.5;
  const totalImages = slides.length;

  const containerRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  // ----- scroll tracking -----
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 25,
    mass: 0.6,
  });

  // map 0→1 scroll to 0→(totalImages)
  const imageProgress = useTransform(smoothProgress, [0, 1], [0, totalImages]);

  // Modified: transition starts at 10% and completes at 90%
  const wipeProgress = useTransform(imageProgress, (v) => {
    const fractional = v % 1;
    // Map 0-0.9 range to 0-1 for the clip animation
    return Math.min(fractional / 0.9, 1);
  });

  const clipPathValue = useTransform(wipeProgress, [0, 1], ["inset(0 100% 0 0)", "inset(0 0% 0 0)"]);

  const scale = useTransform(smoothProgress, [0, 0.5, 1], [1, 0.985, 0.95]);

  // ----- progress bars -----
  const progressScale0 = useTransform(imageProgress, [0, 1], [0, 1]);
  const progressScales = [progressScale0];

  // ----- current image index - switch at 90% -----
  useEffect(() => {
    const unsubscribe = imageProgress.on("change", (v) => {
      const clamped = Math.max(0, Math.min(v, totalImages - 0.0001));
      // Switch image when we hit 90% of the transition
      const idx = Math.floor(clamped + 0.1);
      if (idx !== currentIndex && idx < totalImages) {
        setCurrentIndex(idx);
      }
    });
    return () => unsubscribe();
  }, [imageProgress, totalImages, currentIndex]);

  // ----- cursor tracking -----
  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setCursorPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  // ----- click scroll -----
  const handleCardClick = (e) => {
    e.preventDefault();
    const element = document.querySelector("#work");
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  const totalHeight = `${totalImages * 100}vh`;
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
        style={{ height: totalHeight }}
      >
        <div className='sticky top-0 h-screen flex items-center justify-center p-4'>
          <motion.div
            style={{ scale }}
            className='relative w-full h-full rounded-3xl overflow-hidden hide-cursor-on-card'
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            onMouseMove={handleMouseMove}
            onClick={handleCardClick}
          >
            {/* Current image */}
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

            {/* Wiping next image */}
            {showNextImage && (
              <motion.div
                className='absolute inset-0'
                style={{
                  clipPath: clipPathValue,
                }}
              >
                <Image
                  src={slides[currentIndex + 1]}
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
            )}

            {/* Content */}
            <div className='relative z-10 flex flex-col items-start justify-end md:justify-center h-full p-6 md:p-10 pb-32 md:pb-10 text-white pointer-events-none'>
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.3 }}
              >
                <p className='max-w-lg text-base md:text-lg lg:text-xl text-white leading-relaxed font-medium'>We craft unforgettable brand experiences using creativity, strategy, and design that connect with audiences everywhere.</p>
                <div
                  className='absolute opacity-20 inset-0 -z-10 bg-gradient-to-r from-black/60 via-black/40 to-transparent blur-xl'
                  style={{ transform: "scale(1.1)" }}
                />
              </motion.div>

              {/* Progress bars */}
              <div className='absolute bottom-6 md:bottom-10 right-6 md:right-10 flex gap-2'>
                <div className='h-1 w-8 md:w-12 bg-white/30 rounded-full overflow-hidden'>
                  <motion.div
                    className='h-full bg-white rounded-full origin-left'
                    style={{ scaleX: progressScales[0] }}
                  />
                </div>
              </div>
            </div>

            {/* Center CTA */}
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

            {/* Cursor */}
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
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0, opacity: 0 }}
                transition={{
                  scale: { type: "spring", stiffness: 400, damping: 25 },
                  opacity: { duration: 0.2 },
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
