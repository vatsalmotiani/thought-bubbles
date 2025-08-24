"use client";
import { motion } from "framer-motion";

const TapeScroller = ({ text }) => {
  const repeatedText = Array(10).fill(text).join("   •   ");

  return (
    <div className='relative w-full py-32 overflow-visible'>
      {/* Full-width angled tape */}
      <div className='relative w-[120%] -ml-[10%] -rotate-3'>
        {/* Blue background strip */}
        <div className='absolute inset-0 bg-tb-blue' />

        {/* Scrolling text on top */}
        <motion.div
          className='flex whitespace-nowrap py-8 relative'
          animate={{ x: ["0%", "-100%"] }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
        >
          <span className='px-12 text-5xl md:text-7xl font-extrabold uppercase tracking-tight text-white'>{repeatedText}</span>
          <span className='px-12 text-5xl md:text-7xl font-extrabold uppercase tracking-tight text-white'>{repeatedText}</span>
        </motion.div>
      </div>
    </div>
  );
};

export default TapeScroller;
