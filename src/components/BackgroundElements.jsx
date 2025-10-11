"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const MAX_ELEMENTS = 5;
const MIN_THRESHOLD = Math.floor(MAX_ELEMENTS * 0.6);
const vectors = ["/assets/vector2.png", "/assets/vector3.png", "/assets/vector4.png"];
const SAFE_RADIUS = 120; // min distance between elements
const FLOAT_AMPLITUDE_FACTOR = 2.4; // tweak this to control float movement globally

// helper: distance check
const isTooClose = (left, top, existing) => {
  return existing.some((el) => {
    const dx = ((left - el.left) * window.innerWidth) / 100; // convert % to px
    const dy = ((top - el.top) * window.innerHeight) / 100;
    return Math.sqrt(dx * dx + dy * dy) < SAFE_RADIUS;
  });
};

const createElement = (id, existing = []) => {
  let left, top;
  let tries = 0;

  do {
    left = Math.random() * 100;
    top = Math.random() * 100;
    // push away from exact center
    if (left > 35 && left < 65) {
      left = Math.random() < 0.5 ? Math.random() * 30 : 70 + Math.random() * 30;
    }
    if (top > 35 && top < 65) {
      top = Math.random() < 0.5 ? Math.random() * 30 : 70 + Math.random() * 30;
    }
    tries++;
    if (tries > 50) break; // safety escape
  } while (isTooClose(left, top, existing));

  const size = 40 + Math.random() * 120;
  const prominent = Math.random() < 0.2;
  const amplitude = (prominent ? 60 : 25) * FLOAT_AMPLITUDE_FACTOR;
  const delay = Math.random() * 4;
  const duration = prominent ? 10 + Math.random() * 6 : 6 + Math.random() * 8;
  const zIndex = prominent ? 2 : Math.floor(Math.random() * 2);
  const img = vectors[Math.floor(Math.random() * vectors.length)];
  const scrollType = Math.random() < 0.5 ? "fixed" : "absolute";

  return { id, left, top, size, delay, duration, zIndex, amplitude, prominent, img, scrollType };
};

const BackgroundElements = () => {
  const [elements, setElements] = useState([]);

  // initial placement
  useEffect(() => {
    const newEls = [];
    for (let i = 0; i < MAX_ELEMENTS; i++) {
      newEls.push(createElement(i, newEls));
    }
    setElements(newEls);
  }, []);

  // regen loop
  useEffect(() => {
    if (elements.length < MIN_THRESHOLD) {
      const interval = setInterval(() => {
        setElements((prev) => {
          if (prev.length >= MAX_ELEMENTS) return prev;
          const newId = Date.now(); // unique
          return [...prev, createElement(newId, prev)];
        });
      }, 2000 + Math.random() * 2000);
      return () => clearInterval(interval);
    }
  }, [elements]);

  return (
    <div className='fixed inset-0 w-full h-full overflow-hidden pointer-events-none -z-10'>
      {/* Paper texture */}
      <svg
        className='absolute inset-0 w-full h-full opacity-[0.5] mix-blend-overlay'
        aria-hidden='true'
      >
        <filter
          id='paperNoise'
          x='0'
          y='0'
          width='100%'
          height='100%'
        >
          <feTurbulence
            type='fractalNoise'
            baseFrequency='0.8'
            numOctaves='3'
            stitchTiles='stitch'
            seed='11'
          />
          <feColorMatrix
            type='saturate'
            values='0'
          />
        </filter>
        <rect
          width='100%'
          height='100%'
          filter='url(#paperNoise)'
        />
      </svg>

      {/* Floating vectors */}
      <AnimatePresence>
        {elements.map((el) => (
          <motion.div
            key={el.id}
            initial={{ y: 0, scale: 0.5, opacity: 0 }}
            animate={{
              y: [0, -el.amplitude, 0],
              scale: el.prominent ? [1, 1.1, 1] : [1, 1.03, 1],
              rotate: [0, 3, -3, 0],
              opacity: el.prominent ? [0.7, 1, 0.8] : [0.3, 0.5, 0.4],
            }}
            transition={{
              duration: el.duration,
              repeat: Infinity,
              delay: el.delay,
              ease: "easeInOut",
            }}
            className={`${el.scrollType} absolute`}
            style={{ left: `${el.left}%`, top: `${el.top}%`, zIndex: el.zIndex }}
          >
            <Image
              src={el.img}
              alt='floating vector'
              width={el.size}
              height={el.size}
              className='opacity-100'
              priority
            />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default BackgroundElements;
