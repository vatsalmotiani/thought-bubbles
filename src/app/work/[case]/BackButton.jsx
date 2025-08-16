"use client";
import { ArrowLeft } from "react-feather";
import Link from "next/link";
import { motion } from "framer-motion";

export function BackButton() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4, delay: 0.2 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className='inline-block' // Add this to prevent full-width behavior
    >
      <Link
        href='/work'
        className='inline-flex items-center gap-2 px-5 py-3 rounded-full font-bold text-sm transition-all duration-300 whitespace-nowrap'
        style={{
          backgroundColor: "#00B6E7",
          border: "4px solid #1E1E1E",
          boxShadow: "6px 6px 0px #1E1E1E",
          color: "white",
        }}
      >
        <ArrowLeft
          size={18}
          className='stroke-2'
        />
        <span>All Cases</span>
      </Link>
    </motion.div>
  );
}
