"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import caseList from "@/data/caseList";

export default function CaseShowcase() {
  const [activeCard, setActiveCard] = useState(null);
  const [activeImage, setActiveImage] = useState(null);

  // randomly pick ~1/3 of cases for overlay
  const overlayIndices = useMemo(() => {
    const count = Math.floor(caseList.length / 3);
    const indices = new Set();
    while (indices.size < count) {
      const rand = Math.floor(Math.random() * caseList.length);
      indices.add(rand);
    }
    return indices;
  }, []);

  // assign random corner for each overlay card
  const overlayCorner = () => {
    const positions = [
      "top-0 left-0 -translate-x-1/3 -translate-y-1/3", // top-left
      "top-0 right-0 translate-x-1/3 -translate-y-1/3", // top-right
      "bottom-0 left-0 -translate-x-1/3 translate-y-1/3", // bottom-left
      "bottom-0 right-0 translate-x-1/3 translate-y-1/3", // bottom-right
    ];
    return positions[Math.floor(Math.random() * positions.length)];
  };

  const aspectForIndex = (i) => (i % 3 === 0 ? "aspect-[16/10]" : i % 3 === 1 ? "aspect-[4/5]" : "aspect-[5/4]");

  const galleryForCard = useMemo(() => {
    if (!activeCard) return [];
    const imgs = [activeCard.img, ...(activeCard.gallery || [])].filter(Boolean);
    return [...new Set(imgs)];
  }, [activeCard]);

  return (
    <>
      {/* MASONRY */}
      <div className='px-6 md:px-10 lg:px-16 py-16 columns-1 sm:columns-2 [column-gap:4rem] md:[column-gap:5rem] space-y-16'>
        {caseList.map((card, i) => (
          <motion.div
            key={card.id}
            className='relative break-inside-avoid group cursor-pointer cursor-effect-text'
            onClick={() => {
              setActiveCard(card);
              setActiveImage(card.img || (card.gallery && card.gallery[0]) || null);
            }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, type: "spring" }}
            viewport={{ once: true }}
          >
            {/* card image */}
            <div className={`relative w-full ${aspectForIndex(i)} rounded-xl overflow-hidden`}>
              {card.img ? (
                <Image
                  src={card.img}
                  alt={card.name}
                  fill
                  sizes='(max-width: 768px) 100vw, 50vw'
                  className='object-cover transition-transform duration-500 group-hover:scale-110'
                  priority={i < 2}
                />
              ) : (
                <div className='w-full h-full bg-neutral-200' />
              )}
            </div>

            {/* overlay vector3 (edges only) */}
            {overlayIndices.has(i) && (
              <div className={`absolute z-20 pointer-events-none ${overlayCorner()}`}>
                <Image
                  src='/assets/vector3.png'
                  alt='Vector Decoration'
                  width={80}
                  height={80}
                  className='opacity-70'
                />
              </div>
            )}

            {/* label */}
            <h3 className='mt-4 font-oswald text-xl sm:text-2xl text-tb-black'>{card.name}</h3>
            {card.shortDescription && <p className='mt-1 text-sm sm:text-base text-neutral-600'>{card.shortDescription}</p>}
          </motion.div>
        ))}
      </div>

      {/* POPUP / GALLERY */}
      <AnimatePresence>
        {activeCard && (
          <motion.div
            className='fixed inset-0 z-50 bg-tb-black/70 flex items-center justify-center p-4'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => {
              setActiveCard(null);
              setActiveImage(null);
            }}
          >
            <motion.div
              className='relative bg-white rounded-2xl w-full max-w-6xl md:p-10 p-6 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start'
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              transition={{ duration: 0.35, type: "spring" }}
              onClick={(e) => e.stopPropagation()}
              style={{ maxHeight: "88vh" }}
            >
              {/* LEFT */}
              <div className='flex flex-col gap-5'>
                {activeImage && (
                  <div className='relative w-full aspect-[4/3] rounded-xl overflow-hidden'>
                    <Image
                      src={activeImage}
                      alt={activeCard.name}
                      fill
                      sizes='(max-width: 768px) 100vw, 50vw'
                      className='object-cover'
                    />
                  </div>
                )}
                {galleryForCard.length > 1 && (
                  <div className='grid grid-cols-4 gap-3'>
                    {galleryForCard.map((img, idx) => (
                      <button
                        key={idx}
                        type='button'
                        onClick={() => setActiveImage(img)}
                        className={`relative w-full aspect-square rounded-lg overflow-hidden cursor-effect-text border-2 ${activeImage === img ? "border-tb-blue" : "border-transparent"}`}
                        aria-label='View image'
                      >
                        <Image
                          src={img}
                          alt=''
                          fill
                          className='object-cover'
                        />
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* RIGHT */}
              <div className='flex flex-col gap-6 md:gap-7'>
                {activeCard.client?.name && <p className='font-oswald text-xl sm:text-2xl text-tb-black'>{activeCard.name}</p>}
                {activeCard.client?.name && <p className='text-sm text-neutral-500 -mt-3'>{activeCard.client.name}</p>}
                {activeCard.body && <p className='text-[15px] leading-relaxed text-neutral-700 line-clamp-7 md:line-clamp-9'>{activeCard.body}</p>}
              </div>

              {/* close */}
              <button
                onClick={() => {
                  setActiveCard(null);
                  setActiveImage(null);
                }}
                className='absolute top-3 right-3 md:top-5 md:right-5 rounded-full bg-tb-black/80 text-white px-3 py-1 text-xs cursor-effect-text'
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
