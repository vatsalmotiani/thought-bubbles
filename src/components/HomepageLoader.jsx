"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Reveal from "./Reveal";

export default function BubbleLoader({ onComplete }) {
  // 🔧 Adjustable variables
  const HOLD_TIME = 1200;
  const SCALE_TIME = 2000;
  const MOVE_TIME = 1000;
  const EXIT_X = "calc(100vw + 200px)"; // moves beyond screen width + bubble radius
  const EXIT_Y = "0vh";
  const FINAL_SCALE = 0.2;

  const [phase, setPhase] = useState("full");

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase("shrink"), HOLD_TIME),
      setTimeout(() => setPhase("move"), HOLD_TIME + SCALE_TIME),
      setTimeout(() => setPhase("settle"), HOLD_TIME + SCALE_TIME + MOVE_TIME),
      setTimeout(() => {
        setPhase("done");
        if (onComplete) onComplete();
      }, HOLD_TIME + SCALE_TIME + MOVE_TIME + 2000),
    ];
    return () => timers.forEach(clearTimeout);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {phase !== "done" && (
        <div className={`fixed inset-0 z-[9999] flex items-center justify-center ${phase === "shrink" || phase === "move" || phase === "settle" ? "bg-transparent" : "bg-[#F2F2F2]"}`}>
          {/* Bubble */}
          <motion.div
            key='main-bubble'
            className='absolute'
            initial={{ scale: 20, opacity: 1 }}
            animate={
              phase === "full"
                ? { scale: 20, opacity: 1 }
                : phase === "shrink"
                ? { scale: 4, opacity: 1 }
                : phase === "move"
                ? { scale: 1.2, x: EXIT_X, y: EXIT_Y, opacity: 0.8 }
                : phase === "settle"
                ? {
                    scale: FINAL_SCALE,
                    x: EXIT_X,
                    y: EXIT_Y,
                    opacity: 0.6,
                    transition: {
                      duration: 6,
                      ease: "easeInOut",
                    },
                  }
                : {}
            }
            transition={phase === "shrink" ? { duration: SCALE_TIME / 1000, ease: "easeInOut" } : phase === "move" ? { duration: MOVE_TIME / 1000, ease: "easeInOut" } : { duration: 0.5 }}
          >
            <Image
              src='/assets/vector1.svg'
              alt='main bubble'
              width={160}
              height={160}
              priority
            />
          </motion.div>

          {/* Centered Reveal text */}
          <AnimatePresence mode='wait'>
            {phase === "full" && (
              <motion.div
                key='thinking-text'
                className='absolute text-center'
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
              >
                <Reveal>
                  <p className='font-oswald uppercase text-white text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-semibold mt-4 pb-2 leading-tight'>Thinking…</p>
                </Reveal>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      )}
    </AnimatePresence>
  );
}
