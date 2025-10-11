"use client";

import { useEffect, useState, useMemo } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import caseList from "@/data/caseList";
import { Drawer, DrawerClose, DrawerContent, DrawerHeader, DrawerTitle } from "@/components/ui/drawer";
import { X, ArrowLeft, ArrowRight } from "react-feather";

// ========================================
// CASE SHOWCASE COMPONENT
// ========================================

// tiny stable hash -> pseudo-random [0,1)
function hashToUnit(seed) {
  let h = 2166136261;
  const s = String(seed);
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i);
    h = (h * 16777619) >>> 0;
  }
  return (h % 1_000_003) / 1_000_003;
}

// choose a corner deterministically from 4 options
function cornerFor(seed) {
  const corners = ["top-0 left-0 -translate-x-1/3 -translate-y-1/3", "top-0 right-0 translate-x-1/3 -translate-y-1/3", "bottom-0 left-0 -translate-x-1/3 translate-y-1/3", "bottom-0 right-0 translate-x-1/3 translate-y-1/3"];
  const idx = Math.floor(hashToUnit(seed) * corners.length);
  return corners[idx];
}

export default function CaseShowcase() {
  const [activeCard, setActiveCard] = useState(null);
  const [activeImage, setActiveImage] = useState(null);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const showOverlayForId = (id) => hashToUnit(id) < 1 / 3;

  const aspectForIndex = (i) => (i % 3 === 0 ? "aspect-[16/10]" : i % 3 === 1 ? "aspect-[4/5]" : "aspect-[5/4]");

  const galleryForCard = useMemo(() => {
    if (!activeCard) return [];
    const imgs = [activeCard.img, ...(activeCard.gallery || [])].filter(Boolean);
    return [...new Set(imgs)];
  }, [activeCard]);

  // open drawer and set active card/image
  const handleCardClick = (card) => {
    setActiveCard(card);
    setActiveImage(card.img || (card.gallery && card.gallery[0]) || null);
    setDrawerOpen(true);
  };

  // onOpenChange from Drawer
  const handleDrawerClose = (open) => {
    setDrawerOpen(open);
    if (!open) {
      setTimeout(() => {
        setActiveCard(null);
        setActiveImage(null);
      }, 300);
    }
  };

  // Prev / Next navigation (wraps)
  const handleNextCase = () => {
    if (!activeCard || !caseList || caseList.length === 0) return;
    const currentIndex = caseList.findIndex((c) => c.id === activeCard.id);
    const nextIndex = (currentIndex + 1) % caseList.length;
    const nextCard = caseList[nextIndex];
    setActiveCard(nextCard);
    setActiveImage(nextCard.img || (nextCard.gallery && nextCard.gallery[0]) || null);
  };

  const handlePrevCase = () => {
    if (!activeCard || !caseList || caseList.length === 0) return;
    const currentIndex = caseList.findIndex((c) => c.id === activeCard.id);
    const prevIndex = (currentIndex - 1 + caseList.length) % caseList.length;
    const prevCard = caseList[prevIndex];
    setActiveCard(prevCard);
    setActiveImage(prevCard.img || (prevCard.gallery && prevCard.gallery[0]) || null);
  };

  // Hide scrollbar when drawer is open (restored original behavior)
  useEffect(() => {
    if (drawerOpen) {
      document.documentElement.style.overflow = "hidden";
      document.body.style.overflow = "hidden";
    } else {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
    }

    return () => {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
    };
  }, [drawerOpen]);

  return (
    <>
      {/* MASONRY GRID */}
      <div className='px-6 md:px-10 lg:px-16 py-16 columns-1 sm:columns-2 [column-gap:4rem] md:[column-gap:5rem] space-y-16'>
        {caseList.map((card, i) => (
          <motion.div
            key={card.id}
            className='relative break-inside-avoid group cursor-pointer cursor-effect-text'
            onClick={() => handleCardClick(card)}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, type: "spring" }}
            viewport={{ once: true }}
          >
            <div className={`relative w-full ${aspectForIndex(i)} rounded-xl overflow-hidden`}>
              {card.img ? (
                <Image
                  src={card.img}
                  alt={card.name}
                  fill
                  sizes='(max-width: 768px) 100vw, 50vw'
                  className='object-cover transition-transform duration-500 md:group-hover:scale-110'
                  priority={i < 2}
                />
              ) : (
                <div className='w-full h-full bg-neutral-200' />
              )}

              {/* Subtle tappable indicator:
                  - On small screens show "Tap to view"
                  - On larger screens show "View details" on hover (using group)
              */}
              <div className='absolute left-3 bottom-3 z-30 sm:hidden'>
                <div className='bg-tb-black/40 text-white text-xs rounded-full px-3 py-1 font-space'>Tap to view</div>
              </div>

              <div className='absolute left-3 bottom-3 z-30 hidden sm:block opacity-0 group-hover:opacity-90 transition-opacity'>
                <div className='bg-tb-black/40 text-white text-xs rounded-full px-3 py-1 font-space'>View details</div>
              </div>
            </div>

            {showOverlayForId(card.id) && (
              <div className={`absolute z-20 pointer-events-none ${cornerFor(card.id)}`}>
                <Image
                  src='/assets/vector3.png'
                  alt='Vector Decoration'
                  width={80}
                  height={80}
                  className='opacity-70'
                />
              </div>
            )}

            <h3 className='mt-6 font-space font-[500] text-lg sm:text-2xl text-tb-black'>{card.name}</h3>
            {card.shortDescription && <p className='mt-1 font-space text-sm md:text-md text-neutral-600'>{card.shortDescription}</p>}
          </motion.div>
        ))}
      </div>

      {/* DRAWER */}
      <Drawer
        open={drawerOpen}
        onOpenChange={handleDrawerClose}
      >
        <DrawerContent className='mb-12 max-w-5xl mx-auto h-[80vh] rounded-t-3xl md:rounded-t-[2rem] z-[9999]'>
          <DrawerHeader className='border-b border-neutral-200 pb-4 mx-6'>
            <div className='flex items-center justify-between'>
              <div className='text-start'>
                <DrawerTitle className='font-space text-lg sm:text-2xl text-tb-black font-[500]'>{activeCard?.name}</DrawerTitle>
                {activeCard?.client?.name && <p className='font-space text-sm text-neutral-500 mt-1'>{activeCard.client.name}</p>}
              </div>

              {/* Close button only in header */}
              <DrawerClose asChild>
                <button
                  className='bg-tb-black text-white p-3 rounded-full shadow-lg hover:bg-tb-black/80 transition-all hover:scale-105'
                  aria-label='Close'
                >
                  <X className='w-5 h-5' />
                </button>
                {/* <button
                  className='transition-opacity hover:opacity-60 text-neutral-700'
                >
                </button> */}
              </DrawerClose>
            </div>
          </DrawerHeader>

          <div className='flex-1 overflow-y-auto overscroll-contain px-6 py-6 relative'>
            {activeCard && (
              <div className='grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12'>
                <div className='flex flex-col gap-5'>
                  {activeImage && (
                    <div className='relative w-full aspect-[4/3] rounded-xl overflow-hidden bg-neutral-100'>
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
                          className={`relative w-full aspect-square rounded-lg overflow-hidden cursor-pointer border-2 transition-all ${activeImage === img ? "border-tb-blue scale-105" : "border-transparent hover:border-neutral-300"}`}
                          aria-label={`View image ${idx + 1}`}
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

                <div className='flex flex-col gap-6 md:gap-7'>
                  {activeCard.body && (
                    <div className='font-space text-[15px] leading-relaxed text-neutral-700 space-y-4'>
                      <p>{activeCard.body}</p>
                    </div>
                  )}

                  {activeCard.tags && activeCard.tags.length > 0 && (
                    <div className='flex flex-wrap gap-2'>
                      {activeCard.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className='px-3 py-1 bg-neutral-100 text-neutral-700 text-xs rounded-full font-space'
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Floating navigation buttons at bottom right */}
            <div className='fixed bottom-8 right-8 flex items-center gap-3 z-50'>
              <button
                onClick={handlePrevCase}
                className='bg-tb-blue text-white p-3 rounded-full shadow-lg hover:bg-tb-blue/80 transition-all hover:scale-105'
                aria-label='Previous Case'
              >
                <ArrowLeft className='w-6 h-6' />
              </button>

              <button
                onClick={handleNextCase}
                className='bg-tb-blue text-white p-3 rounded-full shadow-lg hover:bg-tb-blue/80 transition-all hover:scale-105'
                aria-label='Next Case'
              >
                <ArrowRight className='w-6 h-6' />
              </button>
            </div>
          </div>
        </DrawerContent>
      </Drawer>
    </>
  );
}
