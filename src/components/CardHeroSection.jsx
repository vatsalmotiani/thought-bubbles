"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

export default function CardHeroSection() {
  /* ------------------- SETTINGS ------------------- */
  const slides = ["/assets/dummy2.jpg", "/assets/dummy5.jpg"]; // add more images
  const intervalTime = 5000; // ms each image stays on screen
  const transitionTime = 0.3; // seconds for fade transition
  const overlayOpacity = 0.5; // black overlay strength (0–1)

  /* ------------------- IMAGE CYCLER ------------------- */
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, intervalTime);
    return () => clearInterval(id);
  }, [slides.length, intervalTime]);

  /* ------------------- SCROLL SCALE ------------------- */
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.98]);

  return (
    <section className='h-screen flex items-center justify-center p-4 bg-transparent'>
      <motion.div
        style={{ scale }}
        className='relative w-full h-full rounded-3xl overflow-hidden'
      >
        {/* ---------- Image Slideshow ---------- */}
        <AnimatePresence mode='wait'>
          <motion.div
            key={slides[index]}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: transitionTime,
              ease: "easeInOut",
            }}
            className='absolute inset-0'
          >
            <Image
              src={slides[index]}
              alt='Advertising agency showcase'
              fill
              className='object-cover'
              priority
            />
            {/* soft overlay to unify brightness */}
            <div
              className='absolute inset-0 bg-gradient-to-t from-black/40 via-black/20 to-black/40'
              style={{ opacity: overlayOpacity }}
            />
          </motion.div>
        </AnimatePresence>

        {/* ---------- Hero Content ---------- */}
        {/* <div className='relative z-10 flex flex-col items-start justify-center h-full p-10 text-white'>
          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className='text-4xl md:text-6xl font-bold leading-tight'
          >
            Bold Ideas.
            <br />
            Striking Campaigns.
          </motion.h1>

          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className='mt-6 max-w-lg text-lg md:text-xl text-gray-200'
          >
            We craft unforgettable brand experiences using creativity, strategy, and design that connect with audiences everywhere.
          </motion.p>
        </div> */}
      </motion.div>
    </section>
  );
}
