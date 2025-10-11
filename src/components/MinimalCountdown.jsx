"use client";
import { motion, useScroll, useTransform, AnimatePresence, useSpring } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";

export default function MinimalCountdown() {
  const containerRef = useRef(null);
  const [selectedImage, setSelectedImage] = useState(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"],
  });

  // Smooth spring config
  const springConfig = { stiffness: 50, damping: 25, mass: 1 };

  // Year changes from 2009 to 2025
  const rawYear = 2009;
  const displayYear = useSpring(rawYear, springConfig);

  // Subtitle changes
  const subtitle = "16 years of excellence";

  // Image positions - start immediately at scroll position 0
  const img1X = useTransform(scrollYProgress, [0, 0.3], [-600, 0]);
  const img1Y = useTransform(scrollYProgress, [0, 0.3], [-400, 0]);
  const img1Opacity = useTransform(scrollYProgress, [0, 0.15, 0.3], [0, 0.6, 1]);
  const smoothImg1X = useSpring(img1X, springConfig);
  const smoothImg1Y = useSpring(img1Y, springConfig);

  const img2X = useTransform(scrollYProgress, [0, 0.35], [600, 0]);
  const img2Y = useTransform(scrollYProgress, [0, 0.35], [-350, 0]);
  const img2Opacity = useTransform(scrollYProgress, [0, 0.18, 0.35], [0, 0.6, 1]);
  const smoothImg2X = useSpring(img2X, springConfig);
  const smoothImg2Y = useSpring(img2Y, springConfig);

  const img3X = useTransform(scrollYProgress, [0, 0.4], [-500, 0]);
  const img3Y = useTransform(scrollYProgress, [0, 0.4], [500, 0]);
  const img3Opacity = useTransform(scrollYProgress, [0, 0.2, 0.4], [0, 0.6, 1]);
  const smoothImg3X = useSpring(img3X, springConfig);
  const smoothImg3Y = useSpring(img3Y, springConfig);

  const img4X = useTransform(scrollYProgress, [0, 0.45], [550, 0]);
  const img4Y = useTransform(scrollYProgress, [0, 0.45], [450, 0]);
  const img4Opacity = useTransform(scrollYProgress, [0, 0.23, 0.45], [0, 0.6, 1]);
  const smoothImg4X = useSpring(img4X, springConfig);
  const smoothImg4Y = useSpring(img4Y, springConfig);

  const images = [
    { src: "/assets/dummy1.jpg", alt: "Memory 1" },
    { src: "/assets/dummy2.jpg", alt: "Memory 2" },
    { src: "/assets/dummy3.jpg", alt: "Memory 3" },
    { src: "/assets/dummy4.jpg", alt: "Memory 4" },
  ];

  return (
    <div
      ref={containerRef}
      className='relative h-[200vh]'
    >
      <div className='sticky top-0 h-screen flex items-center justify-center overflow-hidden px-4'>
        <div className='relative z-20 text-center'>
          <motion.h1
            className='text-[100px] sm:text-[140px] md:text-[180px] font-bold leading-none text-gray-900 mb-4'
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.span>{displayYear}</motion.span>
          </motion.h1>
          <motion.p
            className='text-lg sm:text-xl md:text-2xl text-gray-600 font-light'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <motion.span>{subtitle}</motion.span>
          </motion.p>
        </div>

        {/* Images - Flying in from different directions */}

        {/* Image 1 - Top Left */}
        <motion.div
          className='absolute w-40 h-40 sm:w-52 sm:h-52 md:w-64 md:h-64 lg:w-72 lg:h-72 rounded-2xl overflow-hidden shadow-lg cursor-pointer'
          style={{
            x: smoothImg1X,
            y: smoothImg1Y,
            opacity: img1Opacity,
            top: "10%",
            left: "5%",
          }}
          onClick={() => setSelectedImage(images[0])}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.3 }}
        >
          <Image
            src={images[0].src}
            alt={images[0].alt}
            fill
            className='object-cover'
            sizes='(max-width: 640px) 160px, (max-width: 768px) 208px, (max-width: 1024px) 256px, 288px'
          />
          <div className='absolute inset-0 bg-gradient-to-br from-white/10 to-transparent' />
        </motion.div>

        {/* Image 2 - Top Right */}
        <motion.div
          className='absolute w-44 h-44 sm:w-56 sm:h-56 md:w-68 md:h-68 lg:w-80 lg:h-80 rounded-2xl overflow-hidden shadow-lg cursor-pointer'
          style={{
            x: smoothImg2X,
            y: smoothImg2Y,
            opacity: img2Opacity,
            top: "8%",
            right: "5%",
          }}
          onClick={() => setSelectedImage(images[1])}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.3 }}
        >
          <Image
            src={images[1].src}
            alt={images[1].alt}
            fill
            className='object-cover'
            sizes='(max-width: 640px) 176px, (max-width: 768px) 224px, (max-width: 1024px) 272px, 320px'
          />
          <div className='absolute inset-0 bg-gradient-to-br from-white/10 to-transparent' />
        </motion.div>

        {/* Image 3 - Bottom Left */}
        <motion.div
          className='absolute w-36 h-36 sm:w-48 sm:h-48 md:w-60 md:h-60 lg:h-72 lg:w-72 rounded-2xl overflow-hidden shadow-lg cursor-pointer'
          style={{
            x: smoothImg3X,
            y: smoothImg3Y,
            opacity: img3Opacity,
            bottom: "12%",
            left: "8%",
          }}
          onClick={() => setSelectedImage(images[2])}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.3 }}
        >
          <Image
            src={images[2].src}
            alt={images[2].alt}
            fill
            className='object-cover'
            sizes='(max-width: 640px) 144px, (max-width: 768px) 192px, (max-width: 1024px) 240px, 288px'
          />
          <div className='absolute inset-0 bg-gradient-to-br from-white/10 to-transparent' />
        </motion.div>

        {/* Image 4 - Bottom Right */}
        <motion.div
          className='absolute w-40 h-40 sm:w-52 sm:h-52 md:w-64 md:h-64 lg:w-76 lg:h-76 rounded-2xl overflow-hidden shadow-lg cursor-pointer'
          style={{
            x: smoothImg4X,
            y: smoothImg4Y,
            opacity: img4Opacity,
            bottom: "10%",
            right: "10%",
          }}
          onClick={() => setSelectedImage(images[3])}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.3 }}
        >
          <Image
            src={images[3].src}
            alt={images[3].alt}
            fill
            className='object-cover'
            sizes='(max-width: 640px) 160px, (max-width: 768px) 208px, (max-width: 1024px) 256px, 304px'
          />
          <div className='absolute inset-0 bg-gradient-to-br from-white/10 to-transparent' />
        </motion.div>

        {/* Scroll Hint */}
        <motion.div
          className='absolute bottom-8 left-1/2 -translate-x-1/2'
          initial={{ opacity: 1 }}
          animate={{ opacity: [1, 0.4, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          style={{
            opacity: useTransform(scrollYProgress, [0, 0.2], [1, 0]),
          }}
        >
          <div className='flex flex-col items-center gap-2 text-gray-400 text-xs tracking-wider'>
            <span>SCROLL</span>
            <motion.div
              className='w-[2px] h-8 bg-gray-400'
              animate={{ scaleY: [1, 0.5, 1] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </motion.div>
      </div>

      {/* Image Popup Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className='fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              className='relative w-full h-full flex items-center justify-center'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className='relative max-w-full max-h-full'>
                <Image
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  width={1920}
                  height={1080}
                  className='max-w-full max-h-[90vh] w-auto h-auto object-contain rounded-2xl shadow-2xl'
                />
              </div>

              {/* Close button */}
              <button
                onClick={() => setSelectedImage(null)}
                className='absolute top-4 right-4 w-12 h-12 bg-white/90 hover:bg-white rounded-full flex items-center justify-center text-gray-900 font-bold text-2xl shadow-lg transition-all hover:scale-110'
              >
                ×
              </button>
            </motion.div>

            {/* Click anywhere hint */}
            <motion.div
              className='absolute bottom-8 text-white/60 text-sm'
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Click anywhere to close
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
