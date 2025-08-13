"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { ArrowRight, Star, Zap, Target } from "react-feather";

export default function HeroSection() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

  return (
    <section
      ref={containerRef}
      className='relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-cyan-50/30 to-cyan-100/20'
    >
      {/* Refined Background Elements */}
      <div className='absolute inset-0 overflow-hidden'>
        {/* Primary Floating Orb */}
        <motion.div
          className='absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-cyan-200/15 to-cyan-600/15 rounded-full blur-3xl'
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{ y }}
        />

        {/* Secondary Floating Orb */}
        <motion.div
          className='absolute bottom-1/4 left-1/4 w-80 h-80 bg-gradient-to-br from-cyan-300/15 to-cyan-500/15 rounded-full blur-3xl'
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.5, 0.3],
            y: [0, 20, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{ y }}
        />

        {/* Subtle Floating Particles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className='absolute w-1 h-1 bg-cyan-400/30 rounded-full'
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + (i % 2) * 40}%`,
            }}
            animate={{
              y: [0, -15, 0],
              opacity: [0.2, 0.5, 0.2],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.2,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div
        className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center'
        style={{ opacity }}
      >
        {/* Main Heading with Refined Gradient */}
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          className='text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-oswald font-black text-transparent bg-clip-text bg-gradient-to-r from-slate-800 via-cyan-600 to-cyan-700 leading-none mb-8'
        >
          <motion.span
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className='bg-gradient-to-r from-slate-800 via-cyan-600 to-cyan-700 bg-[length:200%_200%] bg-clip-text text-transparent'
          >
            Ready to Break
          </motion.span>
          <motion.span
            animate={{
              backgroundPosition: ["100% 50%", "0% 50%", "100% 50%"],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className='block bg-gradient-to-r from-cyan-600 via-cyan-700 to-cyan-800 bg-[length:200%_200%] bg-clip-text text-transparent pb-8'
          >
            Through the Noise?
          </motion.span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          className='text-xl sm:text-2xl md:text-3xl text-slate-700 max-w-4xl mx-auto mb-12 font-poppins font-medium'
        >
          Let&apos;s create something <span className='text-cyan-600 font-semibold'>extraordinary</span> together. Your brand deserves to <span className='text-cyan-700 font-semibold'>stand out</span>, and we&apos;re here to make it happen with creativity that <span className='text-cyan-800 font-semibold'>breaks all boundaries</span>.
        </motion.p>

        {/* Stats with Refined Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7, ease: "easeOut" }}
          className='flex flex-wrap justify-center gap-6 md:gap-12 mb-16'
        >
          {[
            { number: "500+", label: "Campaigns Delivered" },
            { number: "15+", label: "Years of Excellence" },
            // { number: "100%", label: "Client Satisfaction" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.02, y: -2 }}
              className='relative group'
            >
              <div className='absolute inset-0 bg-gradient-to-br from-white/10 to-white/5 rounded-xl blur-md group-hover:blur-lg transition-all duration-300' />
              <div className='relative bg-white/30 backdrop-blur-sm rounded-xl p-6 border border-white/40 shadow-sm group-hover:shadow-md transition-all duration-300'>
                <div className='text-3xl md:text-4xl font-bold text-cyan-600 mb-2'>{stat.number}</div>
                <div className='text-sm text-slate-600 uppercase tracking-wider font-medium'>{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Buttons with Fixed Shadows */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9, ease: "easeOut" }}
          className='flex flex-col sm:flex-row gap-6 justify-center items-center'
        >
          <Link href='/contact-us'>
            <motion.button
              whileHover={{ scale: 1.02, y: -1 }}
              whileTap={{ scale: 0.98 }}
              className='relative group'
            >
              <div className='absolute inset-0 bg-gradient-to-r from-cyan-600 to-cyan-700 rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300' />
              <div className='relative bg-gradient-to-r from-cyan-600 to-cyan-700 text-white px-10 py-5 rounded-2xl font-semibold text-lg transition-all duration-300 flex items-center space-x-3'>
                <span>Start Your Project</span>
                <ArrowRight
                  size={20}
                  className='group-hover:translate-x-1 transition-transform duration-300'
                />
              </div>
            </motion.button>
          </Link>
          <Link href='/work/all'>
            <motion.button
              whileHover={{ scale: 1.02, y: -1 }}
              whileTap={{ scale: 0.98 }}
              className='relative group'
            >
              <div className='absolute inset-0 bg-white/20 backdrop-blur-sm border-2 border-cyan-600/30 rounded-2xl shadow-sm group-hover:shadow-md transition-all duration-300' />
              <div className='relative bg-white/30 backdrop-blur-sm border-2 border-cyan-600/30 text-cyan-700 px-10 py-5 rounded-2xl font-semibold text-lg transition-all duration-300 hover:bg-white/40'>View Our Work</div>
            </motion.button>
          </Link>
        </motion.div>

        {/* Enhanced Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 1.2 }}
          className='absolute bottom-12 left-1/2 transform -translate-x-1/2'
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className='relative group'
          >
            <div className='absolute inset-0 bg-gradient-to-br from-cyan-400/10 to-cyan-600/10 rounded-full blur-md' />
            <div className='relative w-8 h-12 border-2 border-cyan-600/30 rounded-full flex justify-center bg-white/20 backdrop-blur-sm'>
              <motion.div
                animate={{ y: [0, 16, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className='w-1 h-3 bg-gradient-to-b from-cyan-600 to-cyan-700 rounded-full mt-2'
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
