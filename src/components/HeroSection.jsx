"use client";
import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { servicesWithIcons } from "@/data/services";
import { slugify } from "@/lib/utils";
import Link from "next/link";

// --------------------------- Helpers ---------------------------
const createKeyframes = (rx, ry, startAngle) => {
  const frames = [];
  for (let i = 0; i <= 360; i += 10) {
    const angle = ((i + startAngle) * Math.PI) / 180;
    frames.push({ x: rx * Math.cos(angle), y: ry * Math.sin(angle) });
  }
  return frames;
};

const darkenColor = (color, percent) => {
  const num = parseInt(color.replace("#", ""), 16);
  const amt = Math.round(2.55 * percent);
  const r = (num >> 16) - amt;
  const g = ((num >> 8) & 0xff) - amt;
  const b = (num & 0xff) - amt;
  return "#" + (0x1000000 + (Math.max(0, Math.min(255, r)) << 16) + (Math.max(0, Math.min(255, g)) << 8) + Math.max(0, Math.min(255, b))).toString(16).slice(1);
};

// --------------------------- Components ---------------------------
const OrbitRings = ({ orbits }) => (
  <>
    {orbits.map((orbit, i) => (
      <div
        key={i}
        className='absolute top-1/2 left-1/2  -translate-x-1/2 -translate-y-1/2 border border-dashed opacity-30'
        style={{
          width: orbit.rx * 2,
          height: orbit.ry * 2,
          borderRadius: "50%",
          borderColor: "#1E1E1E",
        }}
      />
    ))}
  </>
);

const ServicePlanet = ({ service, orbit, isAutoHighlighted, hoveredService, isMobile, onEnter, onLeave, onClick }) => {
  const Icon = service.icon;

  return (
    <motion.div
      className='absolute top-1/2 left-1/2 cursor-pointer z-20'
      style={{
        width: isMobile ? 40 : 50,
        height: isMobile ? 40 : 50,
        transform: `translate(-${isMobile ? 20 : 25}px, -${isMobile ? 20 : 25}px)`,
      }}
      animate={{
        x: createKeyframes(orbit.rx, orbit.ry, service.startAngle).map((k) => k.x),
        y: createKeyframes(orbit.rx, orbit.ry, service.startAngle).map((k) => k.y),
      }}
      transition={{ duration: service.speed, repeat: Infinity, ease: "linear" }}
      onMouseEnter={() => !isMobile && onEnter(service.id)}
      onMouseLeave={() => !isMobile && onLeave()}
      onTouchStart={() => isMobile && onEnter(service.id)}
      onTouchEnd={() => isMobile && onLeave()}
      onClick={() => onClick(service.url)}
    >
      <motion.div
        className='flex w-full h-full items-center justify-center'
        animate={{ scale: isAutoHighlighted ? [1, 1.2, 1] : 1 }}
        transition={{
          scale: isAutoHighlighted ? { duration: 2, repeat: Infinity, repeatType: "reverse" } : { duration: 0.3 },
        }}
      >
        <div
          className={`relative rounded-full flex items-center justify-center ${isMobile ? "w-10 h-10 border-2" : "w-12 h-12 border-3"}`}
          style={{
            backgroundColor: hoveredService === service.id ? service.color : isAutoHighlighted ? service.color : darkenColor(service.color, 30),
            borderColor: darkenColor(service.color, 20),
            boxShadow: hoveredService === service.id ? `0 0 20px ${service.color}` : isAutoHighlighted ? `0 0 15px ${service.color},0 0 30px rgba(135,206,235,0.5)` : "2px 2px 0 rgba(0,0,0,0.2)",
          }}
        >
          <Icon
            size={isMobile ? 16 : 20}
            color='white'
          />
          {hoveredService === service.id && (
            <motion.div
              className='absolute left-1/2 transform -translate-x-1/2 whitespace-nowrap z-50 pointer-events-none'
              initial={{
                opacity: 0,
                y: service.orbitIndex >= 2 ? 8 : -8,
              }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2 }}
              style={{
                bottom: service.orbitIndex >= 2 ? (isMobile ? "45px" : "60px") : "auto",
                top: service.orbitIndex < 2 ? (isMobile ? "45px" : "60px") : "auto",
              }}
            >
              <div
                style={{
                  backgroundColor: service.color,
                  color: "white",
                  boxShadow: "1px 1px 0 rgba(0,0,0,0.2)",
                }}
                className='px-3 py-1 rounded-full text-xs font-bold text-center'
              >
                Explore
              </div>
            </motion.div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};

// --------------------------- Main ---------------------------
export default function RedesignedHeroSection() {
  const router = useRouter();
  const [hoveredService, setHoveredService] = useState(null);
  const [autoHighlightedService, setAutoHighlightedService] = useState(null);
  const [isUserHovering, setIsUserHovering] = useState(false);
  const currentIndexRef = useRef(0);
  const intervalRef = useRef(null);

  const desktopOrbits = [
    { rx: 320, ry: 125 },
    { rx: 450, ry: 160 },
    { rx: 600, ry: 200 },
  ];
  const mobileOrbits = [
    { rx: 130, ry: 180 },
    { rx: 170, ry: 220 },
    { rx: 210, ry: 260 },
  ];

  // distribute services
  const services = (() => {
    const out = [];
    let idx = 0;

    out.push({ ...servicesWithIcons[idx], id: 1, orbitIndex: 0, startAngle: 0 });
    idx++;

    const perOrbit = Math.ceil((servicesWithIcons.length - 1) / (desktopOrbits.length - 1));

    for (let orbit = 1; orbit < desktopOrbits.length; orbit++) {
      for (let i = 0; i < perOrbit && idx < servicesWithIcons.length; i++) {
        out.push({
          ...servicesWithIcons[idx],
          id: idx + 1,
          orbitIndex: orbit,
          startAngle: (i * 360) / Math.min(perOrbit, servicesWithIcons.length - idx),
        });
        idx++;
      }
    }

    return out.map((s) => ({
      ...s,
      speed: 30 + s.orbitIndex * 8,
      url: `/work?category=${slugify(s.name)}`,
    }));
  })();

  // auto highlight (start from last hovered / last highlighted)
  useEffect(() => {
    if (!services.length) return;

    intervalRef.current && clearInterval(intervalRef.current);

    // if user was hovering, resume from that
    if (hoveredService) {
      const found = services.findIndex((s) => s.id === hoveredService);
      currentIndexRef.current = found >= 0 ? found : 0;
      setAutoHighlightedService(services[currentIndexRef.current].id);
    } else {
      // otherwise resume from the last autoHighlightedService
      const found = services.findIndex((s) => s.id === autoHighlightedService);
      currentIndexRef.current = found >= 0 ? found : currentIndexRef.current;
    }

    intervalRef.current = setInterval(() => {
      if (!isUserHovering) {
        currentIndexRef.current = (currentIndexRef.current + 1) % services.length;
        setAutoHighlightedService(services[currentIndexRef.current].id);
      }
    }, 3000);

    return () => clearInterval(intervalRef.current);
  }, [isUserHovering]);

  const handleEnter = (id) => {
    setIsUserHovering(true);
    setHoveredService(id);
  };

  const handleLeave = () => {
    setIsUserHovering(false);
    setHoveredService(null);
  };

  return (
    <section className='h-screen flex flex-col overflow-hidden bg-transparent'>
      {/* Top 1/4 – Highlight text */}
      <Link href={"/work"}>
        <div
          className='flex-[1] flex items-center justify-center relative'
          onMouseEnter={() => setHoveredService("viewwork")}
          onMouseLeave={() => setHoveredService(null)}
        >
          {autoHighlightedService && (
            <motion.div
              key={autoHighlightedService}
              className='text-tb-black text-[5vw] font-bold whitespace-nowrap pointer-events-none uppercase'
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 0.1, scale: 1 }}
              transition={{ duration: 0.4 }}
            >
              {services.find((s) => s.id === autoHighlightedService)?.name}
            </motion.div>
          )}

          {hoveredService === "viewwork" && (
            <motion.div
              className='absolute bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap pointer-events-none'
              initial={{ opacity: 0, y: -4 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2 }}
            >
              <div className='bg-tb-blue text-white px-3 py-1 rounded-full text-xs font-bold'>View Work</div>
            </motion.div>
          )}
        </div>
      </Link>

      {/* Bottom 3/4 – Orbits + logo */}
      <div className='flex-[3] relative flex items-center justify-center'>
        <motion.div
          className='absolute z-10'
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <Link href='/about'>
            <Image
              src='/tb-logo.svg'
              width={240}
              height={240}
              alt='Thought Bubbles Logo'
            />
          </Link>
        </motion.div>

        {/* Desktop */}
        <div className='hidden md:block relative w-[1000px] h-full'>
          <OrbitRings orbits={desktopOrbits} />
          {services.map((s) => (
            <ServicePlanet
              key={s.id}
              service={s}
              orbit={desktopOrbits[s.orbitIndex]}
              isAutoHighlighted={autoHighlightedService === s.id && !hoveredService}
              hoveredService={hoveredService}
              isMobile={false}
              onEnter={handleEnter}
              onLeave={handleLeave}
              onClick={(url) => router.push(url)}
            />
          ))}
        </div>

        {/* Mobile */}
        <div className='md:hidden relative w-[380px] h-full'>
          <OrbitRings orbits={mobileOrbits} />
          {services.map((s) => (
            <ServicePlanet
              key={s.id}
              service={s}
              orbit={mobileOrbits[s.orbitIndex]}
              isAutoHighlighted={autoHighlightedService === s.id && !hoveredService}
              hoveredService={hoveredService}
              isMobile={true}
              onEnter={handleEnter}
              onLeave={handleLeave}
              onClick={(url) => router.push(url)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
