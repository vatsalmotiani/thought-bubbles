"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import caseList from "@/data/caseList";
import { ChevronLeft, ChevronRight } from "lucide-react";

const colors = ["#fff"]; // single white color

export default function PostItCards() {
  const [activeCard, setActiveCard] = useState();
  const [zoomedImage, setZoomedImage] = useState();
  const [slideIndex, setSlideIndex] = useState(0);

  const nextSlide = () => {
    if (!activeCard) return;
    setSlideIndex((prev) => (prev + 1) % (activeCard.slides?.length || 1));
  };

  const prevSlide = () => {
    if (!activeCard) return;
    setSlideIndex((prev) => (prev === 0 ? (activeCard.slides?.length || 1) - 1 : prev - 1));
  };

  return (
    <div className='relative grid grid-cols-1 md:grid-cols-2 gap-20 p-16 place-items-center'>
      {caseList.map((card, index) => {
        const randomRotate = (Math.random() - 0.5) * 10;
        const randomX = (Math.random() - 0.5) * 40;
        const randomY = (Math.random() - 0.5) * 40;
        const bgColor = colors[index % colors.length];

        return (
          <motion.div
            key={card.id}
            className='relative cursor-pointer p-6 w-[460px] min-h-[420px] rounded-lg shadow-lg cursor-effect-text'
            style={{
              backgroundColor: bgColor,
              rotate: `${randomRotate}deg`,
              transform: `translate(${randomX}px, ${randomY}px)`,
            }}
            onClick={() => {
              setActiveCard(card);
              setSlideIndex(0);
            }}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, type: "spring" }}
            viewport={{ once: true }}
          >
            {/* Tape effect */}
            <div className='absolute -top-3 left-1/2 -translate-x-1/2 w-20 h-5 bg-tb-blue/30 rounded-sm shadow-sm rotate-2' />

            {/* Image */}
            {card.img && (
              <div className='relative w-full h-64 mb-5'>
                <Image
                  src={card.img}
                  alt={card.name}
                  fill
                  className='object-cover rounded-md'
                />
              </div>
            )}

            <h3 className='font-oswald text-3xl text-[#1E1E1E]'>{card.name}</h3>
            <p className='text-lg font-caveat text-[#333] mt-3 line-clamp-5'>{card.shortDescription || card.body}</p>
          </motion.div>
        );
      })}

      {/* Expanded Card */}
      <AnimatePresence>
        {activeCard && (
          <motion.div
            className='fixed inset-0 bg-black/60 flex items-center justify-center z-50'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveCard(null)}
          >
            <motion.div
              className='relative bg-white rounded-xl shadow-xl w-[90%] md:w-[80%] max-w-5xl max-h-[90vh] overflow-hidden flex flex-col'
              initial={{ scale: 0.9, rotate: -1 }}
              animate={{ scale: 1, rotate: 0 }}
              exit={{ scale: 0.9, rotate: 1 }}
              transition={{ duration: 0.35, type: "spring" }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Paper Tape */}
              <div className='absolute -top-5 left-1/2 -translate-x-1/2 w-32 h-6 bg-[#e6d5ac] rounded-sm shadow-md rotate-2' />

              {/* Carousel Content */}
              <div className='relative flex-1 flex items-center overflow-hidden'>
                <AnimatePresence mode='wait'>
                  <motion.div
                    key={slideIndex}
                    className='w-full p-10 overflow-y-auto'
                    initial={{ x: 200, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -200, opacity: 0 }}
                    transition={{ duration: 0.4 }}
                  >
                    {/* Image */}
                    {activeCard.img && (
                      <div className='relative w-full h-80 mb-6 rounded-lg overflow-hidden'>
                        <Image
                          src={activeCard.img}
                          alt={activeCard.name}
                          fill
                          className='object-cover'
                        />
                      </div>
                    )}

                    {/* Title + Body */}
                    <h2 className='font-oswald text-4xl text-[#1E1E1E] mb-6'>{activeCard.name}</h2>
                    <p className='text-2xl font-caveat text-[#444] leading-relaxed'>{activeCard.slides?.[slideIndex] || activeCard.body}</p>

                    {/* Gallery */}
                    {activeCard.gallery?.length > 0 && (
                      <div className='flex flex-wrap gap-5 mt-6'>
                        {activeCard.gallery.map((img, idx) => (
                          <motion.div
                            key={idx}
                            className='relative w-40 h-40 cursor-pointer rounded-md overflow-hidden'
                            whileHover={{ scale: 1.05 }}
                            onClick={() => setZoomedImage(img)}
                          >
                            <Image
                              src={img}
                              alt=''
                              fill
                              className='object-cover'
                            />
                          </motion.div>
                        ))}
                      </div>
                    )}
                  </motion.div>
                </AnimatePresence>

                {/* Nav Arrows */}
                {activeCard.slides?.length > 1 && (
                  <>
                    <button
                      onClick={prevSlide}
                      className='absolute left-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/70 text-white p-3 rounded-full'
                    >
                      <ChevronLeft size={28} />
                    </button>
                    <button
                      onClick={nextSlide}
                      className='absolute right-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/70 text-white p-3 rounded-full'
                    >
                      <ChevronRight size={28} />
                    </button>
                  </>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Zoomed Gallery Image */}
      <AnimatePresence>
        {zoomedImage && (
          <motion.div
            className='fixed inset-0 bg-black/80 flex items-center justify-center z-[60]'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setZoomedImage(null)}
          >
            <motion.div
              className='relative w-[85%] h-[85%]'
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={zoomedImage}
                alt='zoomed'
                fill
                className='object-contain rounded-lg'
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
