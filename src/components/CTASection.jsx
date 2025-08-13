"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function CTASection() {
  return (
    <section className='py-20 bg-gradient-to-r from-sky-300 via-tb-blue to-sky-400 relative overflow-hidden'>
      {/* Background Elements */}
      <div className='absolute inset-0 overflow-hidden'>
        <motion.div
          className='absolute -top-20 -right-20 w-40 h-40 bg-white/20 rounded-full blur-2xl'
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className='absolute -bottom-20 -left-20 w-48 h-48 bg-white/20 rounded-full blur-2xl'
          animate={{
            scale: [1.3, 1, 1.3],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex flex-col lg:flex-row items-center justify-between gap-12'>
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className='flex-1 text-center lg:text-left'
          >
            <h2 className='text-4xl md:text-5xl lg:text-6xl font-oswald font-bold text-white mb-6 leading-tight'>
              Ready to Break
              <span className='block'>Out of Your Bubble?</span>
            </h2>
            <p className='text-xl md:text-2xl text-white/90 mb-8 font-poppins max-w-2xl'>Let's create something extraordinary together. Your brand deserves to stand out, and we're here to make it happen.</p>

            <div className='flex flex-col sm:flex-row gap-4 justify-center lg:justify-start'>
              <Link href='/contact-us'>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className='bg-white text-tb-blue px-8 py-4 rounded-2xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300'
                >
                  Start Your Project
                </motion.button>
              </Link>
              <Link href='/work/all'>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className='border-2 border-white text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-white hover:text-tb-blue transition-all duration-300'
                >
                  View Our Work
                </motion.button>
              </Link>
            </div>
          </motion.div>

          {/* Visual Element */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className='flex-1 flex justify-center'
          >
            <div className='relative'>
              <motion.div
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className='absolute inset-0 bg-white/20 rounded-full blur-xl'
                style={{ width: "300px", height: "300px" }}
              />
              <Image
                src='/tb-logo.svg'
                alt='Thought Bubbles Logo'
                width={300}
                height={300}
                className='relative z-10 drop-shadow-2xl'
              />
            </div>
          </motion.div>
        </div>

        {/* Bottom Text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className='text-center mt-16'
        >
          <p className='text-white/80 text-lg font-poppins'>Join the ranks of brands that have transformed their presence with Thought Bubbles</p>
        </motion.div>
      </div>
    </section>
  );
}
