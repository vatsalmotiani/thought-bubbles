"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function HeroSection() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

  // Floating bubble data
  const bubbles = Array.from({ length: 8 }, (_, i) => ({
    id: i,
    size: 20 + Math.random() * 60,
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 5,
    duration: 8 + Math.random() * 12,
  }));

  return (
    <section
      ref={containerRef}
      className='relative min-h-screen flex items-center justify-center overflow-hidden'
      style={{ backgroundColor: "#F2F2F2" }}
    >
      {/* Animated Background SVG */}
      <div className='absolute inset-0'>
        <svg
          className='absolute inset-0 w-full h-full'
          viewBox='0 0 1200 800'
          preserveAspectRatio='xMidYMid slice'
        >
          <defs>
            <pattern
              id='dots'
              x='0'
              y='0'
              width='40'
              height='40'
              patternUnits='userSpaceOnUse'
            >
              <circle
                cx='20'
                cy='20'
                r='1.5'
                fill='#00B6E7'
                opacity='0.2'
              />
            </pattern>
            <filter id='roughPaper'>
              <feTurbulence
                baseFrequency='0.04'
                numOctaves='5'
                result='noise'
                seed='2'
              />
              <feDisplacementMap
                in='SourceGraphic'
                in2='noise'
                scale='3'
              />
            </filter>
          </defs>

          {/* Dotted background pattern */}
          <rect
            width='100%'
            height='100%'
            fill='url(#dots)'
          />

          {/* Animated doodle paths - Simplified */}
          <motion.path
            d='M100,200 Q200,100 300,200 T500,200'
            stroke='#00B6E7'
            strokeWidth='2'
            fill='none'
            strokeLinecap='round'
            strokeDasharray='8,4'
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.4 }}
            transition={{ duration: 4, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" }}
          />

          {/* Single hand-drawn style circle */}
          <motion.circle
            cx='1050'
            cy='150'
            r='50'
            stroke='#00B6E7'
            strokeWidth='2'
            fill='none'
            opacity='0.3'
            strokeDasharray='12,8'
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, -360],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </svg>
      </div>

      {/* Floating Bubbles - Reduced count */}
      {bubbles.slice(0, 4).map((bubble) => (
        <motion.div
          key={bubble.id}
          className='absolute rounded-full border-2'
          style={{
            left: `${bubble.x}%`,
            top: `${bubble.y}%`,
            width: `${bubble.size}px`,
            height: `${bubble.size}px`,
            borderColor: "#00B6E7",
            opacity: 0.3,
            backgroundColor: "rgba(0, 182, 231, 0.1)",
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, Math.sin(bubble.id) * 20, 0],
            scale: [1, 1.2, 1],
            rotate: [0, 360],
          }}
          transition={{
            duration: bubble.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: bubble.delay,
          }}
        />
      ))}

      {/* Main Content */}
      <motion.div
        className='relative z-10 max-w-6xl mx-auto px-4 text-center'
        style={{ opacity }}
      >
        {/* Animated Title */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className='mb-8'
        >
          <motion.h1
            className='text-7xl md:text-9xl font-black leading-tight'
            style={{
              color: "#1E1E1E",
              fontFamily: "Oswald, sans-serif",
            }}
          >
            Ready to
            <motion.span
              className='block'
              style={{ color: "#00B6E7" }}
              animate={{
                rotate: [0, 2, -2, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              Break Through
            </motion.span>
            <span>the Noise?</span>
          </motion.h1>
        </motion.div>

        {/* Animated subtitle with doodle underline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className='relative mb-16'
        >
          <p
            className='text-2xl md:text-3xl max-w-4xl mx-auto leading-relaxed font-poppins'
            style={{ color: "#828282" }}
          >
            Let's create something <span style={{ color: "#00B6E7", fontWeight: "600" }}>extraordinary</span> together. Your brand deserves to <span style={{ color: "#00B6E7", fontWeight: "600" }}>stand out</span>
          </p>

          {/* Animated doodle underline */}
          <svg
            className='absolute -bottom-4 left-1/2 transform -translate-x-1/2'
            width='300'
            height='20'
            viewBox='0 0 300 20'
          >
            <motion.path
              d='M10,15 Q75,5 150,15 T290,15'
              stroke='#00B6E7'
              strokeWidth='3'
              fill='none'
              strokeLinecap='round'
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.8 }}
              transition={{ duration: 2, delay: 1.5, ease: "easeOut" }}
            />
          </svg>
        </motion.div>

        {/* Stats with cartoon-style cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className='flex flex-wrap justify-center gap-8 mb-20'
        >
          {[
            { number: "500+", label: "Campaigns Delivered" },
            { number: "15+", label: "Years of Excellence" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              className='relative group'
              whileHover={{
                scale: 1.05,
                rotate: index % 2 === 0 ? 2 : -2,
                y: -5,
              }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div
                className='relative rounded-3xl p-8 border-3 transform'
                style={{
                  backgroundColor: "white",
                  borderColor: "#00B6E7",
                  boxShadow: "6px 6px 0px #00B6E7",
                }}
              >
                <motion.div
                  className='text-5xl font-black mb-2'
                  style={{ color: "#00B6E7" }}
                  animate={{
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.5,
                  }}
                >
                  {stat.number}
                </motion.div>
                <div
                  className='text-sm uppercase tracking-wider font-bold'
                  style={{ color: "#1E1E1E" }}
                >
                  {stat.label}
                </div>
              </div>

              {/* Floating sparkles around cards */}
              <motion.div
                className='absolute -top-2 -right-2 w-6 h-6 rounded-full'
                style={{ backgroundColor: "#00B6E7" }}
                animate={{
                  scale: [0, 1, 0],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: index * 1.5 + 0.5,
                }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Cartoon-style CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
          className='flex flex-col sm:flex-row gap-6 justify-center items-center mb-20'
        >
          <motion.button
            className='relative group'
            whileHover={{ scale: 1.05, rotate: -1 }}
            whileTap={{ scale: 0.95 }}
          >
            <div
              className='relative px-12 py-6 rounded-full font-black text-xl text-white transform transition-all'
              style={{
                backgroundColor: "#00B6E7",
                boxShadow: "4px 4px 0px #1E1E1E",
              }}
            >
              Start Your Project
              <motion.div
                className='absolute -top-1 -right-1 w-6 h-6 rounded-full bg-white'
                animate={{
                  scale: [0, 1, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: 0.5,
                }}
              />
            </div>
          </motion.button>

          <motion.button
            className='relative group'
            whileHover={{ scale: 1.05, rotate: 1 }}
            whileTap={{ scale: 0.95 }}
          >
            <div
              className='relative px-12 py-6 rounded-full font-black text-xl border-4 transform transition-all'
              style={{
                backgroundColor: "white",
                borderColor: "#00B6E7",
                color: "#00B6E7",
                boxShadow: "4px 4px 0px #00B6E7",
              }}
            >
              View Our Work
            </div>
          </motion.button>
        </motion.div>

        {/* Animated scroll indicator with cartoon style */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className='absolute bottom-8 left-1/2 transform -translate-x-1/2'
        >
          <motion.div
            animate={{
              y: [0, 15, 0],
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className='relative'
          >
            <div
              className='w-12 h-20 border-4 rounded-full flex justify-center'
              style={{ borderColor: "#00B6E7", backgroundColor: "white" }}
            >
              <motion.div
                animate={{ y: [0, 24, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className='w-2 h-6 rounded-full mt-3'
                style={{ backgroundColor: "#00B6E7" }}
              />
            </div>

            {/* Bouncing arrow */}
            <svg
              className='absolute -bottom-6 left-1/2 transform -translate-x-1/2'
              width='24'
              height='24'
              viewBox='0 0 24 24'
            >
              <motion.path
                d='M7 14l5 5 5-5'
                stroke='#00B6E7'
                strokeWidth='3'
                fill='none'
                strokeLinecap='round'
                strokeLinejoin='round'
                animate={{ y: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
            </svg>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Single floating doodle - Simplified */}
      <motion.div
        className='absolute top-20 right-20'
        animate={{
          rotate: [0, 360],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <svg
          width='60'
          height='60'
          viewBox='0 0 60 60'
        >
          <circle
            cx='30'
            cy='30'
            r='25'
            stroke='#00B6E7'
            strokeWidth='2'
            fill='none'
            opacity='0.4'
            strokeDasharray='8,4'
          />
        </svg>
      </motion.div>
    </section>
  );
}
