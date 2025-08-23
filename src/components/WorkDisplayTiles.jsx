"use client";
import { useState, useMemo } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import caseList from "@/data/caseList";

// --- helpers ---
const sortedCases = [...caseList.filter((c) => c.favourite), ...caseList.filter((c) => !c.favourite)];

// non-uniform mosaic patterns
const pickPattern = (i) => {
  const patterns = [
    { col: 5, row: 2, rotate: -2 },
    { col: 7, row: 3, rotate: 1.5 },
    { col: 4, row: 2, rotate: -1 },
    { col: 6, row: 2, rotate: 2 },
    { col: 8, row: 3, rotate: -1.5 },
  ];
  return patterns[i % patterns.length];
};

// --- Tile ---
const Tile = ({ item, index, isOpen, onToggle }) => {
  const { col, row, rotate } = useMemo(() => pickPattern(index), [index]);

  return (
    <motion.div
      layout
      className='relative rounded-3xl overflow-hidden cursor-pointer will-change-transform'
      style={{
        gridColumn: `span ${col} / span ${col}`,
        gridRow: `span ${row} / span ${row}`,
        rotate,
      }}
      onClick={() => onToggle(item.id)}
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -20% 0px" }}
      transition={{ duration: 0.9, ease: "easeOut" }}
    >
      {/* Image */}
      <motion.div
        layout
        className='relative w-full h-full min-h-[200px] md:min-h-[280px] lg:min-h-[320px]'
      >
        <Image
          src={item.img}
          alt={item.name}
          fill
          className='object-cover'
        />
      </motion.div>

      {/* Title overlay */}
      {!isOpen && <div className='absolute bottom-4 left-4 text-white text-xl md:text-2xl font-semibold drop-shadow-[0_2px_8px_rgba(0,0,0,0.65)]'>{item.name}</div>}

      {/* Expanded content */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className='absolute inset-0 bg-white p-6 md:p-10 overflow-y-auto rounded-3xl'
          >
            <div className='flex justify-between items-start gap-4 mb-6'>
              <h3 className='text-2xl md:text-3xl font-bold leading-tight'>{item.name}</h3>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onToggle(null);
                }}
                className='text-xl font-bold text-neutral-500 hover:text-black'
              >
                ✕
              </button>
            </div>

            {item.shortDescription && <p className='text-neutral-700 mb-4'>{item.shortDescription}</p>}

            {item.client?.name && (
              <div className='flex items-center gap-3 mb-4'>
                {item.client.logo && (
                  <Image
                    src={item.client.logo}
                    alt={item.client.name}
                    width={40}
                    height={40}
                    className='rounded-full border'
                  />
                )}
                <span className='font-medium'>{item.client.name}</span>
              </div>
            )}

            <p className='text-neutral-600 leading-relaxed mb-6'>{item.body}</p>

            {item.gallery?.length > 0 && (
              <div className='grid grid-cols-2 sm:grid-cols-3 gap-4 mb-6'>
                {item.gallery.map((img, idx) => (
                  <div
                    key={idx}
                    className='relative w-full h-32 sm:h-40 rounded-lg overflow-hidden'
                  >
                    <Image
                      src={img}
                      alt=''
                      fill
                      className='object-cover'
                    />
                  </div>
                ))}
              </div>
            )}

            {item.metrics?.length > 0 && (
              <div className='grid sm:grid-cols-2 gap-4'>
                {item.metrics.map((m, idx) => (
                  <div
                    key={idx}
                    className='p-4 rounded-lg border bg-neutral-50'
                  >
                    <div className='text-sm text-neutral-500'>{m.metric}</div>
                    <div className='font-semibold'>{m.value}</div>
                  </div>
                ))}
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

// --- Main ---
export default function WorkDisplayTiles() {
  const [openId, setOpenId] = useState(null);

  return (
    <section className='relative min-h-screen py-16'>
      {/* funky glowing bg */}
      <div className='pointer-events-none absolute inset-0 -z-10'>
        <div className='absolute top-[-10%] left-[-10%] h-[40rem] w-[40rem] rounded-full bg-pink-400/20 blur-3xl' />
        <div className='absolute bottom-[-10%] right-[-10%] h-[36rem] w-[36rem] rounded-full bg-cyan-400/20 blur-3xl' />
      </div>

      <motion.div
        layout
        className='
          mx-auto max-w-7xl px-4 md:px-8
          grid auto-rows-[140px]
          sm:auto-rows-[180px] md:auto-rows-[200px] lg:auto-rows-[220px]
          grid-cols-1 sm:grid-cols-6 lg:grid-cols-12
          gap-5 md:gap-7
          [grid-auto-flow:dense]
        '
      >
        {sortedCases.map((item, i) => (
          <Tile
            key={item.id}
            item={item}
            index={i}
            isOpen={openId === item.id}
            onToggle={setOpenId}
          />
        ))}
      </motion.div>
    </section>
  );
}
