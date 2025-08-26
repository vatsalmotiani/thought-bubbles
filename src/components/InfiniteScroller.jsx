"use client";
import { motion } from "framer-motion";

const TapeScroller = ({ text }) => {
  const repeatedText = Array(10).fill(text).join("   •   ");

  return (
    <div className='relative w-full md:py-40 py-20 overflow-visible'>
      {/* BACK TAPE (darker, same height, rotated opposite) */}

      {/* FRONT TAPE (bright, opposite angle) */}
      <div className='absolute top-1/2 left-1/2 w-[120%] -translate-x-1/2 -translate-y-1/2 -rotate-3'>
        <div className='absolute inset-0 bg-tb-blue' />
        <motion.div
          className='flex whitespace-nowrap py-8 relative'
          animate={{ x: ["0%", "-100%"] }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
        >
          <span className='px-12 text-5xl md:text-7xl font-extrabold uppercase tracking-tight text-white '>{repeatedText}</span>
          <span className='px-12 text-5xl md:text-7xl font-extrabold uppercase tracking-tight text-white '>{repeatedText}</span>
        </motion.div>
      </div>
    </div>
  );
};

export default TapeScroller;
