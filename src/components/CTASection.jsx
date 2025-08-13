"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { ArrowRight, Star, Zap, Target } from "react-feather";

export default function CTASection() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1, 0.8]);

  return (
    <section
      ref={containerRef}
      className='relative py-24 bg-gradient-to-br from-slate-800 via-slate-900 to-blue-900 overflow-hidden'
    >
      {/* Animated Background Elements */}
      <div className='absolute inset-0 overflow-hidden'>
        {/* Primary Floating Orbs */}
        <motion.div
          className='absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-blue-500/10 to-blue-600/10 rounded-full blur-3xl'
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{ y }}
        />

        <motion.div
          className='absolute bottom-1/4 left-1/4 w-80 h-80 bg-gradient-to-br from-blue-400/10 to-blue-500/10 rounded-full blur-3xl'
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.5, 0.3],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{ y }}
        />

        {/* Floating Particles */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className='absolute w-1 h-1 bg-white/30 rounded-full'
            style={{
              left: `${10 + i * 12}%`,
              top: `${20 + (i % 3) * 30}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.2, 0.5, 0.2],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 4 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.3,
            }}
          />
        ))}

        {/* Geometric Patterns */}
        <motion.div
          className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96'
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        >
          <div className='absolute inset-0 border border-white/5 rounded-full' />
          <div className='absolute inset-8 border border-white/3 rounded-full' />
          <div className='absolute inset-16 border border-white/3 rounded-full' />
        </motion.div>
      </div>

      <div
        className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'
        style={{ opacity }}
      >
        <div className='flex flex-col lg:flex-row items-center justify-between gap-16'>
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
            className='flex-1 text-center lg:text-left'
          >
            {/* Icon Row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className='flex justify-center lg:justify-start space-x-4 mb-8'
            >
              {[Star, Zap, Target].map((Icon, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05, y: -1 }}
                  className='relative group'
                >
                  <div className='absolute inset-0 bg-gradient-to-br from-blue-500/10 to-blue-600/10 rounded-lg blur-sm group-hover:blur-md transition-all duration-300' />
                  <div className='relative bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20 group-hover:bg-white/20 transition-all duration-300'>
                    <Icon
                      size={24}
                      className='text-blue-400'
                    />
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Main Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              viewport={{ once: true }}
              className='text-5xl md:text-6xl lg:text-7xl font-oswald font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-200 to-blue-300 leading-tight mb-8'
            >
              <motion.span
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className='bg-gradient-to-r from-white via-blue-200 to-blue-300 bg-[length:200%_200%] bg-clip-text text-transparent'
              >
                Ready to Break
              </motion.span>
              <motion.span
                animate={{
                  backgroundPosition: ["100% 50%", "0% 50%", "100% 50%"],
                }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className='block bg-gradient-to-r from-blue-200 via-blue-300 to-blue-400 bg-[length:200%_200%] bg-clip-text text-transparent'
              >
                Through the Noise?
              </motion.span>
            </motion.h2>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
              className='text-xl md:text-2xl text-slate-300 mb-10 font-poppins max-w-2xl mx-auto lg:mx-0 leading-relaxed'
            >
              Let&apos;s create something <span className='text-blue-300 font-semibold'>extraordinary</span> together. Your brand deserves to <span className='text-blue-300 font-semibold'>stand out</span>, and we&apos;re here to make it happen with creativity that <span className='text-blue-300 font-semibold'>breaks all boundaries</span>.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              viewport={{ once: true }}
              className='flex flex-col sm:flex-row gap-6 justify-center lg:justify-start'
            >
              <Link href='/contact-us'>
                <motion.button
                  whileHover={{ scale: 1.02, y: -1 }}
                  whileTap={{ scale: 0.98 }}
                  className='relative group'
                >
                  <div className='absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300' />
                  <div className='relative bg-gradient-to-r from-blue-600 to-blue-700 text-white px-10 py-5 rounded-2xl font-semibold text-lg transition-all duration-300 flex items-center space-x-3'>
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
                  <div className='absolute inset-0 bg-white/10 backdrop-blur-sm border-2 border-white/20 rounded-2xl shadow-sm group-hover:shadow-md transition-all duration-300' />
                  <div className='relative bg-white/10 backdrop-blur-sm border-2 border-white/20 text-white px-10 py-5 rounded-2xl font-semibold text-lg transition-all duration-300 hover:bg-white/20'>View Our Work</div>
                </motion.button>
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              viewport={{ once: true }}
              className='flex flex-wrap justify-center lg:justify-start gap-8 mt-12'
            >
              {[
                { number: "500+", label: "Campaigns Delivered" },
                { number: "15+", label: "Years of Excellence" },
                { number: "100%", label: "Client Satisfaction" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.02 }}
                  className='text-center'
                >
                  <div className='text-2xl md:text-3xl font-bold text-blue-300 mb-1'>{stat.number}</div>
                  <div className='text-sm text-slate-400 uppercase tracking-wider font-medium'>{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Visual Element */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
            className='flex-1 flex justify-center'
          >
            <div className='relative'>
              {/* Orbital Rings */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className='absolute inset-0 w-80 h-80'
              >
                <div className='absolute inset-0 border border-blue-500/10 rounded-full' />
                <div className='absolute inset-8 border border-blue-400/10 rounded-full' />
                <div className='absolute inset-16 border border-blue-300/10 rounded-full' />
              </motion.div>

              {/* Floating Logo */}
              <motion.div
                animate={{
                  y: [0, -8, 0],
                  rotate: [0, 1, -1, 0],
                }}
                transition={{
                  y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                  rotate: { duration: 6, repeat: Infinity, ease: "easeInOut" },
                }}
                className='relative z-10'
              >
                <div className='relative'>
                  <div className='absolute inset-0 bg-gradient-to-br from-white/10 to-white/5 rounded-2xl blur-lg' />
                  <div className='relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 shadow-sm'>
                    <Image
                      src='/tb-logo.svg'
                      alt='Thought Bubbles Logo'
                      width={280}
                      height={280}
                      className='drop-shadow-sm'
                    />
                  </div>
                </div>
              </motion.div>

              {/* Floating Elements */}
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className='absolute w-2 h-2 bg-gradient-to-r from-blue-400 to-blue-500 rounded-full'
                  style={{
                    left: `${20 + i * 15}%`,
                    top: `${30 + (i % 2) * 40}%`,
                  }}
                  animate={{
                    y: [0, -15, 0],
                    opacity: [0.4, 0.8, 0.4],
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
          </motion.div>
        </div>

        {/* Bottom Text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          viewport={{ once: true }}
          className='text-center mt-20'
        >
          <div className='relative inline-block'>
            <div className='absolute inset-0 bg-gradient-to-r from-white/5 to-white/2 rounded-2xl blur-md' />
            <div className='relative bg-white/10 backdrop-blur-sm rounded-2xl px-8 py-6 border border-white/20'>
              <p className='text-white/90 text-lg font-poppins'>
                Join the ranks of brands that have <span className='text-blue-300 font-semibold'>transformed their presence</span> with Thought Bubbles
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
