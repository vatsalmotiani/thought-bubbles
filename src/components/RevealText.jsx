"use client";

import { motion } from "framer-motion";

export default function RevealText({ lines, className = "" }) {
  const container = {
    hidden: { opacity: 1 },
    show: {
      transition: { staggerChildren: 0.25 },
    },
  };

  const lineAnim = {
    hidden: { y: 40, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      variants={container}
      initial='hidden'
      whileInView='show'
      viewport={{ once: true, amount: 0.3 }}
      className={`text-center mb-16 space-y-2 ${className}`}
    >
      {lines.map((line, i) => (
        <motion.p
          key={i}
          variants={lineAnim}
          className='text-xl md:text-2xl text-tb-body max-w-3xl mx-auto font-poppins'
        >
          {line}
        </motion.p>
      ))}
    </motion.div>
  );
}
