"use client";
import { motion } from "framer-motion";
import React from "react";

export default function BackgroundElements() {
  // Floating bubbles for background
  const bubbles = Array.from({ length: 6 }, (_, i) => ({
    id: i,
    size: 20 + Math.random() * 40,
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 3,
    duration: 8 + Math.random() * 8,
  }));

  return (
    <div className='fixed inset-0 -z-10 pointer-events-none overflow-hidden'>
      {/* Animated Background SVG */}
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
        </defs>

        {/* Dotted background pattern */}
        <rect
          width='100%'
          height='100%'
          fill='url(#dots)'
        />

        {/* Animated doodle paths */}
        <motion.path
          d='M50,300 Q200,200 350,300 T600,300'
          stroke='#00B6E7'
          strokeWidth='2'
          fill='none'
          strokeLinecap='round'
          strokeDasharray='8,4'
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.3 }}
          transition={{ duration: 4, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" }}
        />

        <motion.circle
          cx='150'
          cy='150'
          r='40'
          stroke='#00B6E7'
          strokeWidth='2'
          fill='none'
          opacity='0.25'
          strokeDasharray='12,8'
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, -360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
            repeatType: "loop",
          }}
        />
      </svg>

      {/* Floating Bubbles */}
      {bubbles.map((bubble) => (
        <motion.div
          key={bubble.id}
          className='absolute rounded-full border-2'
          style={{
            left: `${bubble.x}%`,
            top: `${bubble.y}%`,
            width: `${bubble.size}px`,
            height: `${bubble.size}px`,
            borderColor: "#00B6E7",
            opacity: 0.2,
            backgroundColor: "rgba(0, 182, 231, 0.1)",
          }}
          animate={{
            y: [0, -20, 0],
            x: [0, Math.sin(bubble.id) * 15, 0],
            scale: [1, 1.15, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: bubble.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: bubble.delay,
            repeatType: "loop",
          }}
        />
      ))}
    </div>
  );
}
