"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function SkillsHighlight() {
  const skills = ["BRANDING", "WEB DESIGN", "MARKETING", "UI/UX DESIGN", "DEVELOPMENT", "MOTION DESIGN"];

  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const transforms = skills.map((_, i) => {
    const len = skills.length;
    const segment = 1 / len;

    // Narrow range for color – only one blue at a time
    const colorStart = i * segment;
    const colorEnd = (i + 1) * segment;

    // Slightly wider range for movement
    const moveStart = Math.max(0, i * segment - segment * 0.15);
    const moveEnd = Math.min(1, (i + 1) * segment + segment * 0.15);

    const colorActive = useTransform(scrollYProgress, [colorStart, colorEnd], [0, 1]);
    const moveActive = useTransform(scrollYProgress, [moveStart, moveEnd], [0, 1]);

    return {
      color: useTransform(colorActive, (v) => (v >= 0.5 ? "#00B6E7" : "#828282")),
      x: useTransform(moveActive, [0, 1], [0, 6]),
    };
  });

  return (
    <section
      ref={containerRef}
      className='h-[60vh] flex flex-col justify-center items-center bg-tb-black text-white'
    >
      <div className='relative w-full max-w-4xl'>
        <span className='absolute left-0 top-1/2 -translate-y-1/2 rotate-90 tracking-[0.2em] font-bold text-lg'>LEVEL UP</span>
        <div className='ml-20 flex flex-col gap-3'>
          {skills.map((skill, i) => (
            <motion.div
              key={skill}
              style={transforms[i]}
              className='font-extrabold text-4xl md:text-6xl tracking-tight'
              transition={{ type: "tween", duration: 0.4 }}
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
