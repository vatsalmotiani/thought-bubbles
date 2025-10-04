"use client";

import { useEffect, useState, useMemo } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import caseList from "@/data/caseList";
import { Drawer, DrawerClose, DrawerContent, DrawerHeader, DrawerTitle } from "@/components/ui/drawer";

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

  const handleCardClick = (card) => {
    console.log("Card clicked:", card.name);
    setActiveCard(card);
    setActiveImage(card.img || (card.gallery && card.gallery[0]) || null);
    setDrawerOpen(true);
  };

  const handleDrawerClose = (open) => {
    console.log("Drawer open state changed to:", open);
    setDrawerOpen(open);
    if (!open) {
      setTimeout(() => {
        setActiveCard(null);
        setActiveImage(null);
      }, 300);
    }
  };

  // Hide scrollbar when drawer is open
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
                  className='object-cover transition-transform duration-500 group-hover:scale-110'
                  priority={i < 2}
                />
              ) : (
                <div className='w-full h-full bg-neutral-200' />
              )}
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

            <h3 className='mt-6 font-space font-[500] text-xl sm:text-3xl text-tb-black'>{card.name}</h3>
            {card.shortDescription && <p className='mt-1 font-space text-sm sm:text-lg text-neutral-600'>{card.shortDescription}</p>}
          </motion.div>
        ))}
      </div>

      {/* DRAWER GALLERY */}
      <Drawer
        open={drawerOpen}
        onOpenChange={handleDrawerClose}
      >
        <DrawerContent className='max-w-5xl mx-auto h-[80vh] rounded-t-3xl md:rounded-t-[2rem] z-[9999]'>
          <DrawerHeader className='border-b border-neutral-200 pb-4'>
            <div className='flex items-center justify-between'>
              <div>
                <DrawerTitle className='font-space text-xl sm:text-2xl text-tb-black font-[500]'>{activeCard?.name}</DrawerTitle>
                {activeCard?.client?.name && <p className='font-space text-sm text-neutral-500 mt-1'>{activeCard.client.name}</p>}
              </div>
              <DrawerClose asChild>
                <button
                  className='rounded-full bg-tb-black text-white px-4 py-2 text-sm hover:bg-tb-black transition-colors font-space '
                  aria-label='Close'
                >
                  Close
                </button>
              </DrawerClose>
            </div>
          </DrawerHeader>

          <div className='flex-1 overflow-y-auto overscroll-contain px-6 py-6'>
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
          </div>
        </DrawerContent>
      </Drawer>
    </>
  );
}
