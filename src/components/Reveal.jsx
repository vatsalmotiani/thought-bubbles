"use client";
import React from "react";
import { motion } from "framer-motion";

export default function Reveal({ children, width = "fit-content" }) {
  return (
    <div style={{ position: "relative", width, overflow: "hidden" }}>
      {React.Children.map(children, (child, index) => (
        <motion.div
          key={index}
          variants={{
            hidden: { opacity: 0, y: 75 },
            visible: { opacity: 1, y: 0 },
          }}
          initial='hidden'
          animate='visible'
          transition={{ duration: 0.3, delay: 0.5 + index * 0.25 }}
        >
          {child}
        </motion.div>
      ))}
    </div>
  );
}
