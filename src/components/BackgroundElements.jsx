"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const MAX_ELEMENTS = 14;
const MIN_THRESHOLD = Math.floor(MAX_ELEMENTS * 0.6);
const vectors = ["/assets/vector2.png", "/assets/vector3.png", "/assets/vector4.png"];

const createElement = (id) => {
  let left = Math.random() * 100;
  let top = Math.random() * 100;
  if (left > 35 && left < 65) left = Math.random() < 0.5 ? Math.random() * 30 : 70 + Math.random() * 30;
  if (top > 35 && top < 65) top = Math.random() < 0.5 ? Math.random() * 30 : 70 + Math.random() * 30;

  const size = 40 + Math.random() * 120;
  const prominent = Math.random() < 0.2;
  const amplitude = prominent ? 60 : 25;
  const delay = Math.random() * 4;
  const duration = prominent ? 10 + Math.random() * 6 : 6 + Math.random() * 8;
  const zIndex = prominent ? 2 : Math.floor(Math.random() * 2);
  const img = vectors[Math.floor(Math.random() * vectors.length)];
  const scrollType = Math.random() < 0.5 ? "fixed" : "absolute";

  return { id, left, top, size, delay, duration, zIndex, amplitude, prominent, img, scrollType, popped: false };
};

const BackgroundElements = () => {
  const [elements, setElements] = useState([]);

  useEffect(() => {
    setElements(Array.from({ length: MAX_ELEMENTS }).map((_, i) => createElement(i)));
  }, []);

  // Regen loop
  useEffect(() => {
    if (elements.length < MIN_THRESHOLD) {
      const interval = setInterval(() => {
        setElements((prev) => {
          if (prev.length >= MAX_ELEMENTS) return prev;
          const newId = Date.now(); // unique
          return [...prev, createElement(newId)];
        });
      }, 2000 + Math.random() * 2000); // staggered regen
      return () => clearInterval(interval);
    }
  }, [elements]);

  const handlePop = (id) => {
    setElements((prev) => prev.map((el) => (el.id === id ? { ...el, popped: true } : el)));
    setTimeout(() => {
      setElements((prev) => prev.filter((el) => el.id !== id));
    }, 600); // delay matches pop animation duration
  };

  return (
    <div className='fixed inset-0 w-full h-full overflow-hidden pointer-events-none -z-10'>
      {/* Paper texture */}
      <svg
        className='absolute inset-0 w-full h-full opacity-[0.3] mix-blend-overlay'
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
            animate={
              el.popped
                ? { scale: [1, 1.3, 0], opacity: [1, 0.5, 0] }
                : {
                    y: [0, -el.amplitude, 0],
                    scale: el.prominent ? [1, 1.1, 1] : [1, 1.03, 1],
                    rotate: [0, 3, -3, 0],
                    opacity: el.prominent ? [0.7, 1, 0.8] : [0.3, 0.5, 0.4],
                  }
            }
            exit={{ scale: 0, opacity: 0 }}
            transition={{ duration: el.popped ? 0.6 : el.duration, repeat: el.popped ? 0 : Infinity, delay: el.delay, ease: "easeInOut" }}
            className={`${el.scrollType} absolute cursor-pointer pointer-events-auto`}
            style={{ left: `${el.left}%`, top: `${el.top}%`, zIndex: el.zIndex }}
            onClick={() => handlePop(el.id)}
          >
            <Image
              src={el.img}
              alt='floating vector'
              width={el.size}
              height={el.size}
              className='opacity-80'
            />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default BackgroundElements;
