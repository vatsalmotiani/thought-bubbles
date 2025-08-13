"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className='relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-white via-blue-50 to-tb-blue/10'>
      {/* Background Elements */}
      <div className='absolute inset-0 overflow-hidden'>
        <motion.div
          className='absolute -top-40 -right-40 w-80 h-80 bg-tb-blue/20 rounded-full blur-3xl'
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className='absolute -bottom-40 -left-40 w-96 h-96 bg-sky-300/20 rounded-full blur-3xl'
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Main Content */}
      <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className='mb-8'
        >
          <Image
            src='/tb-logo.svg'
            alt='Thought Bubbles Logo'
            width={120}
            height={120}
            className='mx-auto'
          />
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className='text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-oswald font-bold text-tb-black leading-tight mb-6'
        >
          THOUGHT
          <span className='block text-tb-blue'>BUBBLES</span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className='text-xl sm:text-2xl md:text-3xl text-tb-body max-w-4xl mx-auto mb-8 font-poppins'
        >
          Where creativity meets strategy. We craft <span className='text-tb-black font-semibold'>actionable ideas</span> that break through the noise
        </motion.p>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className='flex flex-wrap justify-center gap-8 md:gap-16 mb-12'
        >
          <div className='text-center'>
            <div className='text-3xl md:text-4xl font-bold text-tb-blue mb-2'>2009</div>
            <div className='text-sm text-tb-body uppercase tracking-wider'>Founded</div>
          </div>
          <div className='text-center'>
            <div className='text-3xl md:text-4xl font-bold text-tb-blue mb-2'>15+</div>
            <div className='text-sm text-tb-body uppercase tracking-wider'>Years Experience</div>
          </div>
          <div className='text-center'>
            <div className='text-3xl md:text-4xl font-bold text-tb-blue mb-2'>500+</div>
            <div className='text-sm text-tb-body uppercase tracking-wider'>Campaigns Delivered</div>
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className='flex flex-col sm:flex-row gap-4 justify-center items-center'
        >
          <Link href='/work/all'>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className='bg-tb-blue text-white px-8 py-4 rounded-2xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300'
            >
              View Our Work
            </motion.button>
          </Link>
          <Link href='/about'>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className='border-2 border-tb-blue text-tb-blue px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-tb-blue hover:text-white transition-all duration-300'
            >
              About Us
            </motion.button>
          </Link>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className='absolute bottom-8 left-1/2 transform -translate-x-1/2'
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className='w-6 h-10 border-2 border-tb-blue rounded-full flex justify-center'
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className='w-1 h-3 bg-tb-blue rounded-full mt-2'
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
