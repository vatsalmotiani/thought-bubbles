"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { ArrowRight, Star, Zap, Target } from "lucide-react";

export default function CTASection() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 1], [0.8, 1, 0.9]);

  // Floating bubble data
  const bubbles = Array.from({ length: 12 }, (_, i) => ({
    id: i,
    size: 15 + Math.random() * 40,
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 8,
    duration: 10 + Math.random() * 15,
  }));

  return (
    <section
      ref={containerRef}
      className='relative py-32 overflow-hidden'
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
              id='cta-dots'
              x='0'
              y='0'
              width='50'
              height='50'
              patternUnits='userSpaceOnUse'
            >
              <circle
                cx='25'
                cy='25'
                r='2'
                fill='#00B6E7'
                opacity='0.15'
              />
            </pattern>
            <filter id='roughTexture'>
              <feTurbulence
                baseFrequency='0.02'
                numOctaves='4'
                result='noise'
                seed='5'
              />
              <feDisplacementMap
                in='SourceGraphic'
                in2='noise'
                scale='2'
              />
            </filter>
          </defs>

          {/* Dotted background pattern */}
          <rect
            width='100%'
            height='100%'
            fill='url(#cta-dots)'
          />

          {/* Animated doodle paths */}
          <motion.path
            d='M50,400 Q200,200 400,400 T800,400 Q1000,200 1150,400'
            stroke='#00B6E7'
            strokeWidth='3'
            fill='none'
            strokeLinecap='round'
            strokeDasharray='15,8'
            opacity='0.3'
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 6, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" }}
          />

          <motion.path
            d='M1100,600 Q900,500 700,600 T300,600'
            stroke='#00B6E7'
            strokeWidth='2'
            fill='none'
            strokeLinecap='round'
            strokeDasharray='8,6'
            opacity='0.25'
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 8, ease: "easeInOut", repeat: Infinity, repeatType: "reverse", delay: 1 }}
          />

          {/* Floating doodle circles */}
          <motion.circle
            cx='150'
            cy='150'
            r='30'
            stroke='#00B6E7'
            strokeWidth='3'
            fill='none'
            opacity='0.4'
            strokeDasharray='10,5'
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
          />

          <motion.circle
            cx='1000'
            cy='600'
            r='25'
            stroke='#00B6E7'
            strokeWidth='2'
            fill='rgba(0, 182, 231, 0.1)'
            opacity='0.5'
            animate={{
              scale: [1, 1.3, 1],
              rotate: [360, 0],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Squiggly decorative elements */}
          <motion.path
            d='M800,100 Q820,80 840,100 T880,100'
            stroke='#00B6E7'
            strokeWidth='4'
            fill='none'
            strokeLinecap='round'
            opacity='0.6'
            animate={{
              d: ["M800,100 Q820,80 840,100 T880,100", "M800,100 Q820,120 840,100 T880,100", "M800,100 Q820,80 840,100 T880,100"],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </svg>
      </div>

      {/* Floating Bubbles */}
      {bubbles.map((bubble) => (
        <motion.div
          key={bubble.id}
          className='absolute rounded-full border-3'
          style={{
            left: `${bubble.x}%`,
            top: `${bubble.y}%`,
            width: `${bubble.size}px`,
            height: `${bubble.size}px`,
            borderColor: "#00B6E7",
            opacity: 0.2 + Math.random() * 0.3,
            backgroundColor: "rgba(0, 182, 231, 0.05)",
          }}
          animate={{
            y: [0, -20 - Math.random() * 30, 0],
            x: [0, Math.sin(bubble.id) * 15, 0],
            scale: [1, 1.1 + Math.random() * 0.3, 1],
            rotate: [0, 180 + Math.random() * 180, 360],
          }}
          transition={{
            duration: bubble.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: bubble.delay,
          }}
        />
      ))}

      <div
        className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'
        style={{ opacity }}
      >
        <div className='flex flex-col lg:flex-row items-center justify-between gap-20'>
          {/* Visual Element - Moved to left */}
          <motion.div
            initial={{ opacity: 0, x: -50, rotate: -5 }}
            whileInView={{ opacity: 1, x: 0, rotate: 0 }}
            transition={{ duration: 1.2, delay: 0.2, type: "spring", stiffness: 100 }}
            viewport={{ once: true }}
            className='flex-1 flex justify-center lg:justify-start order-2 lg:order-1'
          >
            <div className='relative'>
              {/* Main logo container with cartoon shadow */}
              <motion.div
                animate={{
                  y: [0, -12, 0],
                  rotate: [0, 2, -2, 0],
                }}
                transition={{
                  y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
                  rotate: { duration: 8, repeat: Infinity, ease: "easeInOut" },
                }}
                className='relative z-10'
              >
                <div
                  className='relative rounded-3xl p-12 border-4 transform'
                  style={{
                    backgroundColor: "white",
                    borderColor: "#00B6E7",
                    boxShadow: "12px 12px 0px #00B6E7",
                  }}
                >
                  <Image
                    src='/tb-logo.svg'
                    alt='Thought Bubbles Logo'
                    width={200}
                    height={200}
                    className='drop-shadow-sm'
                  />
                </div>
              </motion.div>

              {/* Orbiting elements around logo */}
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className='absolute w-6 h-6 rounded-full border-2'
                  style={{
                    borderColor: "#00B6E7",
                    backgroundColor: "rgba(0, 182, 231, 0.2)",
                    left: "50%",
                    top: "50%",
                  }}
                  animate={{
                    rotate: [0, 360],
                    x: Math.cos(i * 60 * (Math.PI / 180)) * 120,
                    y: Math.sin(i * 60 * (Math.PI / 180)) * 120,
                  }}
                  transition={{
                    duration: 12 + i * 2,
                    repeat: Infinity,
                    ease: "linear",
                    delay: i * 0.5,
                  }}
                />
              ))}

              {/* Sparkle effects */}
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={`sparkle-${i}`}
                  className='absolute w-3 h-3 rounded-full'
                  style={{
                    backgroundColor: "#00B6E7",
                    left: `${30 + i * 15}%`,
                    top: `${20 + (i % 3) * 25}%`,
                  }}
                  animate={{
                    scale: [0, 1.2, 0],
                    rotate: [0, 180, 360],
                  }}
                  transition={{
                    duration: 2 + Math.random() * 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: i * 0.3,
                  }}
                />
              ))}
            </div>
          </motion.div>

          {/* Content - Moved to right */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
            className='flex-1 text-center lg:text-right order-1 lg:order-2'
          >
            {/* Main heading with cartoon styling */}
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              viewport={{ once: true }}
              className='text-5xl md:text-6xl lg:text-7xl font-black leading-tight mb-8'
              style={{
                color: "#1E1E1E",
                fontFamily: "Oswald, sans-serif",
              }}
            >
              <motion.span
                style={{ color: "#00B6E7" }}
                animate={{
                  rotate: [0, 3, -3, 0],
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                Let's Create
              </motion.span>
              <span className='block'>Something Amazing</span>
            </motion.h2>

            {/* Subtitle with doodle underline */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
              className='relative mb-16'
            >
              <p
                className='text-lg md:text-xl max-w-lg mx-auto lg:mx-0 lg:ml-auto leading-relaxed font-poppins'
                style={{ color: "#828282" }}
              >
                Your brand deserves to <span style={{ color: "#00B6E7", fontWeight: "600" }}>stand out</span>. Let's make it happen together.
              </p>

              {/* Animated doodle underline */}
              <svg
                className='absolute -bottom-4 right-0 lg:right-0'
                width='180'
                height='15'
                viewBox='0 0 180 15'
              >
                <motion.path
                  d='M10,10 Q55,5 90,10 T170,10'
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

            {/* Cartoon-style CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              viewport={{ once: true }}
              className='flex flex-col sm:flex-row gap-6 justify-center lg:justify-end'
            >
              <Link href='/contact-us'>
                <motion.button
                  className='relative group'
                  whileHover={{ scale: 1.05, rotate: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div
                    className='relative px-12 py-6 rounded-full font-black text-xl text-white transform transition-all'
                    style={{
                      backgroundColor: "#00B6E7",
                      boxShadow: "6px 6px 0px #1E1E1E",
                    }}
                  >
                    <span className='flex items-center space-x-3'>
                      <span>Let's Talk</span>
                      <ArrowRight
                        size={22}
                        className='group-hover:translate-x-1 transition-transform duration-300'
                      />
                    </span>
                    <motion.div
                      className='absolute -top-2 -right-2 w-6 h-6 rounded-full bg-white'
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
              </Link>

              <Link href='/work/all'>
                <motion.button
                  className='relative group'
                  whileHover={{ scale: 1.05, rotate: 2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div
                    className='relative px-12 py-6 rounded-full font-black text-xl border-4 transform transition-all'
                    style={{
                      backgroundColor: "white",
                      borderColor: "#00B6E7",
                      color: "#00B6E7",
                      boxShadow: "6px 6px 0px #00B6E7",
                    }}
                  >
                    Our Work
                  </div>
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom tagline with cartoon speech bubble */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          viewport={{ once: true }}
          className='text-center mt-20'
        >
          <div className='relative inline-block'>
            <div
              className='relative rounded-3xl px-8 py-4 border-4 transform'
              style={{
                backgroundColor: "white",
                borderColor: "#00B6E7",
                boxShadow: "6px 6px 0px #00B6E7",
              }}
            >
              <p
                className='text-base font-poppins'
                style={{ color: "#1E1E1E" }}
              >
                Ready to <span style={{ color: "#00B6E7", fontWeight: "600" }}>transform your brand?</span>
              </p>

              {/* Speech bubble tail */}
              <div
                className='absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-6 h-6 rotate-45 border-b-4 border-r-4'
                style={{
                  backgroundColor: "white",
                  borderColor: "#00B6E7",
                }}
              />
            </div>

            {/* Floating hearts around speech bubble */}
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className='absolute w-3 h-3'
                style={{
                  left: `${25 + i * 25}%`,
                  top: `${-8 + (i % 2) * 16}%`,
                }}
                animate={{
                  y: [0, -8, 0],
                  scale: [1, 1.2, 1],
                  rotate: [0, 15, -15, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: i * 0.7,
                  ease: "easeInOut",
                }}
              >
                <svg
                  width='12'
                  height='12'
                  viewBox='0 0 24 24'
                  fill='#00B6E7'
                >
                  <path d='M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z' />
                </svg>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
