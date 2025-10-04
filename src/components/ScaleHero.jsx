"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const textLines = [
  { id: 1, initial: "We craft digital", scaled: "We craft digital" },
  { id: 2, initial: "experiences with", scaled: "experiences with" },
  { id: 3, initial: "care and speed", scaled: "care and speed" },
];

export default function HeroTextScaler() {
  const [isScaled, setIsScaled] = useState(false);

  useEffect(() => {
    // Handle scroll
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScaled(true);
      } else {
        setIsScaled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className='relative max-h-[95vh] text-white overflow-hidden'>
      {/* Navigation */}
      <nav className='fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 py-4 md:px-8 md:py-6'>
        <div className='flex items-center'>
          <div className='text-xl md:text-2xl font-bold'>
            <div className='z-20'>
              <Image
                onClick={scrollToTop}
                src='/tb-logo.svg'
                alt='Company Logo'
                width={120}
                height={40}
                className='object-contain'
                priority
              />
            </div>
          </div>
        </div>
        <div className='hidden md:flex items-center gap-6 lg:gap-8'>
          <a
            href='#work'
            className='text-sm text-tb-black hover:text-gray-800 transition-colors'
          >
            WORK
          </a>
          <a
            href='#contact'
            className='px-4 py-2 bg-white text-tb-black rounded-full text-sm font-medium hover:bg-gray-200 transition-colors'
          >
            LET'S TALK
          </a>
        </div>
        <a
          href='#contact'
          className='md:hidden px-4 py-2 bg-white text-black rounded-full text-xs font-medium'
        >
          LET'S TALK
        </a>
      </nav>

      {/* Main Content */}
      <div className='flex items-end justify-start min-h-screen px-4 md:px-8 pb-20 md:pb-28'>
        <div className='relative w-full max-w-7xl'>
          <motion.h1
            className='text-tb-black font-[500] leading-tight'
            initial={{
              fontSize: "clamp(2.5rem, 8vw, 6rem)",
            }}
            animate={{
              fontSize: isScaled ? "clamp(1.75rem, 5vw, 3.5rem)" : "clamp(2.5rem, 8vw, 6rem)",
            }}
            transition={{
              duration: 1.2,
              ease: [0.43, 0.13, 0.23, 0.96],
            }}
          >
            {textLines.map((line) => (
              <motion.span
                key={line.id}
                className='block relative h-[1.2em]'
                style={{ lineHeight: "1.2" }}
              >
                <motion.span
                  className='absolute left-0 top-0'
                  initial={{ opacity: 1 }}
                  animate={{
                    opacity: isScaled ? 0 : 1,
                  }}
                  transition={{ duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] }}
                >
                  {line.initial}
                </motion.span>
                <motion.span
                  className='absolute left-0 top-0'
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: isScaled ? 1 : 0,
                  }}
                  transition={{ duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] }}
                >
                  {line.scaled}
                </motion.span>
              </motion.span>
            ))}
          </motion.h1>

          {/* Scroll Indicator */}
          <motion.div
            className='absolute right-0 flex items-center gap-2 md:gap-3 text-xs md:text-sm'
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
          >
            <div className='w-6 opacity-[30%] h-10 md:w-8 md:h-12 border-[1.5px]  border-tb-body rounded-full flex items-start justify-center p-1.5 md:p-2'>
              <motion.div
                className='w-1 h-1.5 md:w-1.5 md:h-2 bg-tb-body rounded-full'
                animate={{
                  y: [0, 12, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </div>
            <span className='hidden sm:inline text-tb-body opacity-[50%]'>SCROLL TO START</span>
            <span className='sm:hidden text-tb-body opacity-[50%]'>SCROLL</span>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
